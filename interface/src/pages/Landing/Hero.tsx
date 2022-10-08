import React from "react";
import CocoDrop from "assets/logo-cocodrop.svg";
import Background from "assets/background-hero.webp";

const Hero: React.FC = () => {
  console.log("hey", Background);
  return (
    <div style={{"backgroundImage": `url('${Background}')`}} className="bg-cover bg-no-repeat bg-center h-screen flex items-center justify-center">
      <CocoDrop className="h-1/3" />
    </div>
  );
};

export default Hero;
