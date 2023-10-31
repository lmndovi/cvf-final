import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import { CropsForHarvest, Vegetable } from "@/types";
import Image from "next/image";
import React from "react";

export default async function Shop() {
  const vegetables = await client.fetch<Vegetable[]>(`*[_type == "crops"]`);
  const harvests = await client.fetch<CropsForHarvest[]>(
    `*[_type == "harvestCrops"]`
  );

  return (
    <div className="container flex flex-col space-y-10 mx-auto p-4 mt-20 mb-36 bg-black-board bg-cover  pt-16 pb-20 rounded-lg border-4 border-solid border-[#CAA472] w-[360px] md:w-[700px] text-white">
      <h1 className="text-center text-3xl font-semibold underline underline-offset-4">
        Shop
      </h1>
      <section>
        <h2 className=" text-center mb-5 text-xl font-semibold italic ">
          In Stock
        </h2>
        <div className="flex justify-center items-center">
          {
            <ul className="flex-col space-y-2">
              {vegetables?.map((vegetable) => {
                console.log(vegetable);
                return (
                  <li key={vegetable?._id}>
                    <div className="flex items-center space-x-20">
                      <div className="flex space-x-5 items-center">
                        <span>{vegetable?.name}</span>
                        <Image
                          src={urlForImage(vegetable?.image).url()}
                          alt={vegetable?.name}
                          width={20}
                          height={20}
                        />
                      </div>
                      <span className="text-sm tracking-wide flex">
                        <p className="mr-2">ZMW </p>{" "}
                        {vegetable.price.toFixed(2)}
                      </span>
                    </div>
                  </li>
                );
              })}
            </ul>
          }
        </div>
      </section>
      <section>
        <h2 className=" text-center mb-5 text-xl font-semibold italic ">
          To Be Harvested
        </h2>
        <div className="flex justify-center items-center">
          {
            <ul className="flex-col space-y-2">
              {harvests.map((harvest) => {
                console.log(harvest);
                return (
                  <li key={harvest?._id}>
                    <div className="flex items-center space-x-20">
                      <div className="flex space-x-5 items-center">
                        <span>{harvest?.name}</span>
                        <Image
                          src={urlForImage(harvest?.image).url()}
                          alt={harvest?.name}
                          width={20}
                          height={20}
                        />
                      </div>
                      <span className="text-sm tracking-wide flex">
                        <p>Due: {harvest?.harvestDate}</p>
                      </span>
                    </div>
                  </li>
                );
              })}
            </ul>
          }
        </div>
      </section>
    </div>
  );
}
