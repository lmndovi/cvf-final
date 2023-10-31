import Link from "next/link";
import React from "react";

const Headline = () => {
  return (
    <section className="p-5 text-left space-y-2">
      <div>
        <p className="text-[#DC0D0D] text-sm font-bold uppercase tracking-wide">
          The Home of Fresh Produce
        </p>
      </div>
      <header className="w-[400px]">
        <h1 className="uppercase tracking-tight text-2xl">
          We Locally Grow
          <span className="font-bold">
            <br /> Healthy Tomatoes
          </span>
        </h1>
      </header>
      <div>
        <Link href="/stock">
          <button className="bg-[#DC0D0D] px-3 py-1 rounded-xl text-white text-xs">
            This Week&apos;s Stock
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Headline;
