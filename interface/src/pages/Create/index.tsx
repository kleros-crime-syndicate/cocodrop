import React, { useState } from "react";
import cn from "classnames";
import { isUndefined } from "utils/isUndefined";
import { isAddress } from "utils/address";
import SelectStrategy from "./SelectStrategy";

interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {
  hasError: boolean;
}

const Input: React.FC<IInput> = ({ hasError, ...props }) => (
  <input 
    {...props}
    className={cn(
      "text-2xl",
      "px-4",
      "py-2",
      hasError ? "border-red-500" : "border-white",
      "border-solid",
      "border-4",
      "focus:outline-none",
      "focus:border-[#C3877B]"
    )}
  />
);

const Create: React.FC = () => {
  const [strategyId, setStrategyId] = useState<number | undefined>(undefined);
  const [tokenAddress, setTokenAddress] = useState<string>();
  const [tokenHasError, setTokenHasError] = useState<boolean>(false);
  const [totalAmount, setTotalAmount] = useState<number>();
  const [amountHasError, setAmountHasError] = useState<boolean>(false);
  const buttonDisabled = isUndefined(strategyId) || tokenHasError || amountHasError;
  return (
    <div className="bg-[#4298A9] h-screen flex">
      <div className="flex flex-col gap-8 m-auto w-1/3 p-10 bg-white/30 rounded-2xl">
        <h1 className="font-display text-white text-6xl">
          Create AirDrop
        </h1>
        <SelectStrategy {...{ strategyId, setStrategyId }}/>
        <Input
          placeholder="Token Address..."
          value={tokenAddress}
          hasError={tokenHasError}
          onChange={(e) => {
            const newValue = e.target.value;
            const newValueIsValid = newValue.length <= 42;
            setTokenAddress(newValueIsValid ? newValue: tokenAddress);
            setTokenHasError(
              newValueIsValid
                ? !(typeof isAddress(newValue) === "string")
                : tokenHasError
            );
          }}
        />
        <Input
          placeholder="Total Amount..."
          value={totalAmount}
          hasError={amountHasError}
          onChange={(e) => {
            setTotalAmount(parseInt(e.target.value));
            setAmountHasError(typeof isAddress(e.target.value) === "string");
          }}
        />
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
        >
          Deploy
        </button>
      </div>
    </div>
  );
};

export default Create;
