import React, { useState, useEffect } from "react";
import useWeb3 from "hooks/useWeb3";
import { BigNumber } from "ethers";
import cn from "classnames";
import { isUndefined } from "utils/isUndefined";
import { isAddress } from "utils/address";
import SelectStrategy from "./SelectStrategy";
import strategies from "strategies";
import { useCocodropContract, useERC20Contract } from "hooks/useContract";
import Input from "components/Input";
import generateMerkle, { Merkle } from 'strategies/generateMerkle';
import publishMerkle, { Metadata } from 'strategies/publishMerkle';

type IFormInfo = {
  strategyId: number | undefined;
  tokenAddress: string | undefined;
  totalAmount: BigNumber | undefined;
  parameters: any[] | undefined;
  tokenAddressHasError: boolean;
  totalAmountHasError: boolean;
};

const Create: React.FC = () => {
  const [formInfo, setFormInfo] = useState<IFormInfo>({
    strategyId: undefined,
    tokenAddress: undefined,
    totalAmount: undefined,
    parameters: [],
    tokenAddressHasError: false,
    totalAmountHasError: false,
  });
  const [tokenInfo, setTokenInfo] = useState({
    userBalance: BigNumber.from(0),
    userAllowance: BigNumber.from(0),
    decimals: BigNumber.from(0),
    simbol: "",
  });
  const ERC20Contract = useERC20Contract(
    formInfo.tokenAddressHasError ? undefined : formInfo.tokenAddress
  );
  const { account } = useWeb3();
  useEffect(() => {
    const updateTokenInfo = async () => {
      if (account && ERC20Contract) {
        // const userBalance = await ERC20Contract.balanceOf(account);
        // const userAllowance = await ERC20Contract.allowance(account, "")
        // setTokenInfo({ ...tokenInfo, userBalance, userAllowance })
      }
    }
    updateTokenInfo();
  }, [account, ERC20Contract]);
  const buttonDisabled = (
    isUndefined(formInfo.strategyId)
      || formInfo.tokenAddressHasError
      || formInfo.totalAmountHasError
  );
  const cocodrop = useCocodropContract();
  return (
    <div className="bg-[#4298A9] h-screen flex">
      <div className="flex flex-col gap-8 m-auto w-1/3 p-10 bg-white/30 rounded-2xl">
        <h1 className="font-display text-white text-6xl">
          Create AirDrop
        </h1>
        <SelectStrategy
          strategyId={formInfo.strategyId}
          setStrategyId={(value) =>
            setFormInfo({ ...formInfo, strategyId: value })
          }
          parameters={formInfo.parameters}
          setParameters={(parameters) =>
            setFormInfo({ ...formInfo, parameters })
          }
        />
        <div>
          <h1 className="font-display text-white text-2xl">
            Token Address
          </h1>
          <Input
            placeholder="Token Address..."
            value={formInfo.tokenAddress}
            hasError={formInfo.tokenAddressHasError}
            onChange={(e) => {
              const newValue = e.target.value;
              const newValueIsValid = newValue.length <= 42;
              setFormInfo({
                ...formInfo,
                tokenAddress: newValueIsValid ? newValue : formInfo.tokenAddress,
                tokenAddressHasError: newValueIsValid
                  ? !(typeof isAddress(newValue) === "string")
                  : formInfo.tokenAddressHasError
              });
            }}
          />
        </div>
        <div>
          <h1 className="font-display text-white text-2xl">
            Total Amount to AirDrop
          </h1>
          <Input
            placeholder="Total Amount..."
            disabled={isUndefined(tokenInfo.simbol)}
            value={formInfo.totalAmount?.toString()}
            hasError={formInfo.totalAmountHasError}
            onChange={(e) => {
              // const numberRegex = /^\d+\.?\d*$/;
              // const newValue = numberRegex.test(e.target.value)
              //   ? BigNumber.from(e.target.value)
              //   : undefined;
              // const newValueIsValid = Boolean(
              //   newValue?.lte(tokenInfo.userBalance)
              // );
              let newValue;
              try {
                newValue = BigNumber.from(e.target.value);
              } catch {
                newValue = BigNumber.from(0);
              }
              setFormInfo({
                ...formInfo,
                totalAmount: newValue,
                totalAmountHasError: false,
              })
            }}
          />
        </div>
        <button
          disabled={buttonDisabled}
          className={cn(
            "w-fit",
            "self-center",
            buttonDisabled ? "bg-white/30" : "bg-white",
            "px-6",
            "py-3",
            "rounded-3xl",
            "font-display",
            "mix-blend-screen",
            "text-6xl"
          )}
          onClick={async () => {
            const mt: Merkle = await generateMerkle(formInfo.totalAmount, strategies[formInfo.strategyId], formInfo.parameters);
            const meta: Metadata = {
                title: "Fairdrop",
                description: "All POH humans"
            }
            const contentId = await publishMerkle(mt, meta);
            console.log(contentId);
            cocodrop?.createAirdrop(mt.root, formInfo.tokenAddress, formInfo.totalAmount, contentId);
          }}
        >
          Deploy
        </button>
      </div>
    </div>
  );
};

export default Create;
