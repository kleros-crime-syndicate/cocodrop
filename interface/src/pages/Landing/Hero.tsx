import React from "react";
import cn from "classnames";
import CocoDrop from "assets/logo-cocodrop.svg";
import Background from "assets/background-hero.png";

const Hero: React.FC = () => {
  console.log("hey", Background);
  return (
    <div className={cn(`bg-[url(${Background})]`)}>
      <CocoDrop />
    </div>
  );
};

export default Hero;
