import React from "react";
import cn from "classnames";
import CocoLogo from "assets/cocologo.svg";
import { Link } from "react-router-dom";
import background from "assets/cocodrop-bg.jpg";

const Hero: React.FC = () => (
  <div
    style={{ backgroundImage: `url('${background}')` }}
    className="bg-cover bg-no-repeat bg-center h-screen flex flex-col items-center justify-center"
  >
    <Link
      to="/claim"
      className={cn(
        "hidden",
        "xl:block",
        "absolute",
        "top-10",
        "bg-white",
        "px-6",
        "py-3",
        "rounded-3xl",
        "font-display",
        "mix-blend-screen",
        "text-6xl",
        "animate-bounce"
      )}
    >
      Use dApp
    </Link>
    <CocoLogo className="w-3/4 sm:w-1/2 2xl:w-1/3" />
    <span className="text-5xl font-display text-white sm:text-7xl 2xl:text-9xl">Drop</span>
  </div>
);

export default Hero;
