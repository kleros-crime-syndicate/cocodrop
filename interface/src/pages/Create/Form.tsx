import React from "react";
import { isAddress } from "utils/address";
import { BigNumber } from "ethers";
import SelectStrategy from "./SelectStrategy";
import Input from "components/Input";

export type IFormInfo = {
  title: string | undefined;
  description: string | undefined;
  strategyId: number | undefined;
  tokenAddress: string | undefined;
  totalAmount: BigNumber | undefined;
  parameters: any[];
  tokenAddressHasError: boolean;
  totalAmountHasError: boolean;
};

const Form = ({ formInfo, setFormInfo }) => (
  <div className="flex flex-col gap-8">
    <div>
      <h1 className="font-display text-white text-2xl">
        Title
      </h1>
      <Input
        placeholder="Title..."
        value={formInfo.title}
        hasError={false}
        onChange={(e) => {
          setFormInfo({
            ...formInfo,
            title: e.target.value
          });
        }}
      />
    </div>
    <div>
      <h1 className="font-display text-white text-2xl">
        Description
      </h1>
      <Input
        placeholder="Description..."
        value={formInfo.description}
        hasError={false}
        onChange={(e) => {
          setFormInfo({
            ...formInfo,
            description: e.target.value
          });
        }}
      />
    </div>
    <div className="flex flex-col gap-8">
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
    </div>
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
        value={formInfo.totalAmount?.toString()}
        hasError={formInfo.totalAmountHasError}
        onChange={(e) => {
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
  </div>
)

export default Form;
