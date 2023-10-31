import React from "react";

import ImageCarousel from "./carousel/ImageCarousel";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="text-center mt-20 space-y-3 p-5">
      <div>
        <h2 className="uppercase text-sm font-bold text-[#DC0D0D] tracking-wide">
          What We Do
        </h2>
      </div>
      <div>
        <h1 className="text-2xl uppercase mb-5 tracking-wide">
          <span className="font-bold">Here At Chamba Valley Farms</span>
          <br />
          we are not just farming
        </h1>
      </div>
      <div>
        <p className="text-sm w-72 mx-auto tracking-wide">
          we&apos;re sowing seeds of opportunity and nurturing a brighter future
          for our neighbors
        </p>
      </div>
      <div className="flex flex-col mx-auto py-10 h-96 w-full md:w-[600px] md:object-fit">
        <ImageCarousel />
      </div>
      <div>
        <Link href="/about">
          <button className="bg-[#DC0D0D] px-3 py-1 rounded-xl text-white text-xs -mt-20">
            Learn More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
