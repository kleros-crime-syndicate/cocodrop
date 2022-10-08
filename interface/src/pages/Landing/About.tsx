import React from "react";
import cn from "classnames";
import Parachute from "assets/parachute-coconut.webp";

const About: React.FC = () => (
  <div
    className={cn("bg-white flex items-start justify-between px-96 py-32")}
  >
    <div>
      <h1 className="text-9xl font-display">Whatever</h1>
    </div>
    <img src={Parachute} className="w-1/3 rounded-3xl" />
  </div>
);

export default About;
