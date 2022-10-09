import React, { useEffect } from "react";
import cn from "classnames";
import CocoLogo from "assets/cocologo.svg";
import { Link } from "react-router-dom";
import background from "assets/cocodrop-bg.jpg";
import generateMerkle from "../../strategies/generateMerkle";
import { BigNumber } from "ethers";
import pohStrategy from "../../strategies/poh";
import publishMerkle from "../../strategies/publishMerkle";

const hello = async () => {
  const test = await generateMerkle(BigNumber.from(1_000_000), pohStrategy);
  const test2 = await publishMerkle(test, { title: "Incredible", description: "Amazing" });
  console.log(test2);
};

const Hero: React.FC = () => {
  useEffect(() => {
    hello();
  }, []);

  return (
    <div
      style={{ backgroundImage: `url('${background}')` }}
      className="bg-cover bg-no-repeat bg-center h-screen flex flex-col items-center justify-center"
    >
      <Link
        to="/claim"
        className={cn(
          "absolute",
          "top-10",
          "bg-white",
          "px-6",
          "py-3",
          "rounded-3xl",
          "font-display",
          "mix-blend-screen",
          "text-6xl"
        )}
      >
        Use dApp
      </Link>
      <CocoLogo className="w-1/3" />
      <span className="text-9xl font-display text-white">Drop</span>
    </div>
  );
};

export default Hero;
