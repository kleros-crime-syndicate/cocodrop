import React from "react";
import cn from "classnames";

interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean;
}

const Input: React.FC<IInput> = ({ hasError, ...props }) => (
  <input 
    {...props}
    className={cn(
      "w-full",
      "text-2xl",
      "px-4",
      "py-2",
      hasError ? "border-red-500" : "border-white",
      "rounded-sm",
      "border-solid",
      "border-4",
      "focus:outline-none",
      "focus:border-[#C3877B]"
    )}
  />
);

export default Input;
