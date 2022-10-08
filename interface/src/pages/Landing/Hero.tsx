import React from "react";
import CocoLogo from "assets/cocologo.svg";
import background from "assets/cocodrop-bg.jpg";

const Hero: React.FC = () => {
  console.log("hey", background);
  return (
    <div
      style={{ backgroundImage: `url('${background}')` }}
      className="bg-cover bg-no-repeat bg-center h-screen flex flex-col items-center justify-center"
    >
      <CocoLogo className="w-1/3" />
      <span className="text-9xl font-display text-white">Drop</span>
    </div>
  );
};

export default Hero;
