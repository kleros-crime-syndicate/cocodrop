import React from "react";
import cn from "classnames";
import LoadingImage from "assets/loading.svg";

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  isLoading?: Boolean;
}

const Button: React.FC<IButton> = ({
  className,
  disabled,
  isLoading,
  text,
  ...props
}) => (
  <button
    className={cn(
      "w-fit",
      "self-center",
      disabled ? "bg-white/30" : "bg-white",
      "px-6",
      "py-3",
      "rounded-3xl",
      "mix-blend-screen",
      "relative",
      className
    )}
    { ...props }
  >
    <p className={cn(
      "font-display",
      "text-6xl",
      isLoading ? "invisible" : ""
    )}>
      {text}
    </p>
    {isLoading && <LoadingImage
      className={cn(
        "absolute",
        "top-1/2",
        "left-1/2",
        "-translate-x-1/2",
        "-translate-y-1/2",
        "h-[60px]",
        "animate-pulse"
      )}
    />}
  </button>
)

export default Button;
