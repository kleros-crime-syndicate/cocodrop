import React from "react";
import cn from "classnames";
import Parachute from "assets/parachute-coconut.webp";
import CocoMap from "assets/coco-plan.png";
import CocoAnime from "assets/coco-anime.jpeg";
import { Link } from "react-router-dom";

const About: React.FC = () => (
  <div className={cn("bg-white flex flex-col items-start justify-between px-96 py-32")}>
    <div className="m-auto w-4/5 flex flex-col">
      <h1 className="text-5xl font-display m-8">Struggling with airdrops?</h1>
      <h1 className="text-5xl font-display m-8 mb-64 self-end">
        Are you <strong className="underline">coconutz</strong>?
      </h1>
    </div>
    <div className="flex mb-64">
      <img src={Parachute} className="w-1/3 rounded-3xl" />
      <div className="flex flex-col">
        <h1 className="text-5xl font-display m-8">Lens, POAP, POH, Sismo, what do they have in common?</h1>
        <h1 className="text-5xl font-display m-8">C🥥c🥥drops!</h1>
      </div>
    </div>
    <div className="flex mb-64">
      <h1 className="m-8 text-5xl font-display">
        They said money doesn't grow in trees... but Cocodrops grow in Merkle trees!
      </h1>
      <img src={CocoMap} className="w-1/3 rounded-3xl" />
    </div>
    <div className="flex">
      <img src={CocoAnime} className="w-1/3 rounded-3xl" />
      <div className="flex flex-col">
        <h1 className="m-8 text-5xl font-display">A Cocodrop a day keeps the community engaged.</h1>
        <Link to="/claim" className="text-9xl mt-16 animate-bounce self-end">
          🥥
        </Link>
      </div>
    </div>
  </div>
);

export default About;
