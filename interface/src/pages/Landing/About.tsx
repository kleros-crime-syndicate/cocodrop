import React from "react";
import cn from "classnames";
import Parachute from "assets/parachute-coconut.webp";
import CocoMap from "assets/coco-plan.png";
import CocoAnime from "assets/coco-anime.jpeg";
import { Link } from "react-router-dom";

const About: React.FC = () => (
  <div className={cn("bg-white flex flex-col items-start justify-between gap-36 px-8 py-4 lg:px-24 lg:py-8 xl:px-32 xl:py-12 2xl:px-60 2xl:py-32")}>
    <div className="m-auto w-4/5 flex flex-col items-center sm:items-start">
      <h1 className="text-5xl font-display m-4">Struggling with airdrops?</h1>
      <h1 className="text-5xl font-display m-4 sm:self-end">
        Are you <strong className="underline">COCONUTZ</strong>?
      </h1>
    </div>
    <div className="flex flex-col md:flex-row md:items-center">
      <img src={Parachute} className="w-full rounded-3xl md:w-2/5" />
      <div className="flex flex-col">
        <h1 className="text-5xl font-display m-4 md:text-center">Lens, POAP, POH, Sismo, what do they have in common?</h1>
        <h1 className="text-5xl font-display m-4 md:text-center">C🥥C🥥drops!</h1>
      </div>
    </div>
    <div className="flex flex-col md:flex-row md:items-center">
      <h1 className="m-4 text-5xl font-display text-center">
        They said money doesn't grow in trees... but Cocodrops grow in Merkle trees!
      </h1>
      <img src={CocoMap} className="w-full rounded-3xl md:w-2/5" />
    </div>
    <div className="flex flex-col md:flex-row md:items-center">
      <img src={CocoAnime} className="w-full rounded-3xl md:w-2/5" />
      <div className="flex flex-col text-center">
        <h1 className="text-5xl font-display m-4">A Cocodrop a day keeps the community engaged.</h1>
        <Link to="/claim" className="text-9xl mt-16 animate-bounce self-center">
          🥥
        </Link>
      </div>
    </div>
  </div>
);

export default About;
