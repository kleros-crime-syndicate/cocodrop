import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import cn from "classnames";
import Button from "components/Button";
import useWeb3 from "hooks/useWeb3";
import { injected } from "utils/connectors";
import strategies from "strategies";
import BackgroundCreate from "assets/background-create.jpg";
import Preview from "./Preview";
import Form, { IFormInfo } from "./Form";
import generateMerkle, { Merkle } from "strategies/generateMerkle";
import publishMerkle, { Metadata } from "strategies/publishMerkle";
import { useCocodropContract, useERC20Contract } from "hooks/useContract";
import { ContractTransaction } from "ethers";
import { isUndefined } from "utils/isUndefined";
import { useConfetti } from "modules/Confetti";

const Create: React.FC = () => {
  const { account, activate } = useWeb3();
  const confetti = useConfetti();
  const navigate = useNavigate();
  const [formInfo, setFormInfo] = useState<IFormInfo>({
    title: undefined,
    description: undefined,
    strategyId: undefined,
    tokenAddress: undefined,
    totalAmount: undefined,
    parameters: [],
    tokenAddressHasError: false,
    totalAmountHasError: false,
  });
  const [recipients, setRecipients] = useState<number>();
  const [merkleRoot, setMerkleRoot] = useState<string>();
  const [contentId, setContentId] = useState<string>();
  const [strategyDisplayName, setStrategyDisplayName] = useState<string>();
  const [isLoading, setIsLoading] = useState(false);
  const [previewMode, setPreviewMode] = useState(false);
  const ERC20Contract = useERC20Contract(formInfo.tokenAddressHasError ? undefined : formInfo.tokenAddress);
  const cocodrop = useCocodropContract();
  return (
    <div
      className={cn("bg-cover", "bg-no-repeat", "bg-center", "min-h-screen", "flex", "py-24")}
      style={{ backgroundImage: `url('${BackgroundCreate}')` }}
    >
      <div className="flex flex-col gap-8 m-auto w-1/3 p-10 bg-white/30 rounded-2xl">
        {isUndefined(account)
          ? (
          <button
            className="text-3xl px-2 my-4 border-4 bg-white py-3 rounded-3xl font-display"
            onClick={() => activate(injected)}
          >
            Connect to create AirDrop
          </button>
          ) : previewMode
            ? (
              <>
                <h1 className="font-display text-white text-6xl">Create AirDrop</h1>
                <Preview
                  strategy={strategyDisplayName}
                  totalAmount={formInfo.totalAmount?.toString()}
                  {...{ recipients }}
                />
                <div className="flex justify-between">
                  <Button text="Back" disabled={isLoading} onClick={() => setPreviewMode(false)} />
                  <Button
                    text="Deploy"
                    onClick={async () => {
                      try {
                        setIsLoading(true);
                        if (
                          !(
                            cocodrop &&
                            formInfo.totalAmount &&
                            formInfo.tokenAddress &&
                            formInfo.strategyId &&
                            formInfo.title &&
                            formInfo.description &&
                            merkleRoot &&
                            ERC20Contract &&
                            contentId
                          )
                        )
                          return;

                        let tx: ContractTransaction = await ERC20Contract.approve(cocodrop.address, formInfo.totalAmount);
                        toast.info("Token approval transaction sent.")
                        await tx.wait();
                        toast.success("Token approval was mined!")

                        tx = await cocodrop.createAirdrop(
                          merkleRoot,
                          formInfo.tokenAddress!,
                          formInfo.totalAmount!,
                          contentId
                        );
                        toast.info("AirDrop deployment sent.")
                        await tx.wait();
                        toast.success("AirDrop was mined! 🥥")
                        confetti.addConfetti({emojis: ["🥥"]});
                        navigate("/");
                      } catch (e) {
                        toast.error(e.toString());
                      } finally {
                        setIsLoading(false);
                      }
                    }}
                    {...{ isLoading }}
                  />
                </div>
              </>
            ) : (
              <>
                <Form {...{ formInfo, setFormInfo }} />
                <Button
                  text="Preview"
                  onClick={async () => {
                    try {
                      setIsLoading(true);
                      if (
                        cocodrop &&
                        formInfo.totalAmount &&
                        formInfo.tokenAddress &&
                        formInfo.strategyId &&
                        formInfo.title &&
                        formInfo.description
                      ) {
                        const mt: Merkle = await generateMerkle(
                          formInfo.totalAmount,
                          strategies[formInfo.strategyId],
                          formInfo.parameters
                        );
                        setRecipients(Object.keys(mt.claims).length);
                        setMerkleRoot(mt.root);
                        const meta: Metadata = {
                          title: formInfo.title,
                          description: formInfo.description,
                          strategy: await strategies[formInfo.strategyId].getDisplayName(formInfo.parameters),
                        };
                        setStrategyDisplayName(meta.strategy);
                        setContentId(await publishMerkle(mt, meta));
                        setPreviewMode(true);
                      }
                    } catch {
                    } finally {
                      setIsLoading(false);
                    }
                  }}
                  {...{ isLoading }}
                />
              </>
        )}
      </div>
    </div>
  );
};

export default Create;
