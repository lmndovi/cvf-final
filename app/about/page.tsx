import Image from "next/image";
import Link from "next/link";
import React from "react";
import veg from "@/assets/veg-2.jpg";

const about = () => {
  return (
    <div className="mb-10">
      <div className="grid grid-cols-1 md:grid-cols-2 p-6 md:pt-28 md:gap-2 pb-5">
        <div className="p-4 col-span-1 md:max-w-[600px]">
          <div className="flex flex-col  p-5 space-y-5">
            <div className="">
              <h2 className="font-bold uppercase text-xs">About Us</h2>
              <h1 className="uppercase text-xl font-light">See What We Sell</h1>
              <h1 className="text-[#DC0D0D] uppercase font-bold text-xl -ml-1">
                &ldquo;Healthy Tomatoes&rdquo;
              </h1>
            </div>
            <div className="space-y-6">
              <p className="text-sm tracking-wider">
                When you visit our farm, you witness the journey from field to
                shop, ensuring that what you see is precisely what you get -
                fresh, wholesome, and locally grown produce.
              </p>
              <p className="text-xs tracking-widest">
                Chamba Valley Farms, nestled in the picturesque Chamba Valley of
                Lusaka, Zambia, is a longstanding family-owned agricultural
                haven. Our story dates back to the 1970s when the visionary
                Kelvin Siwale, former President of the Agricultural and
                Commercial Cooperative Society of Zambia Limited, laid the
                foundation for what is now a flourishing local farm.
              </p>
              <p className="text-xs tracking-widest">
                At Chamba Valley Farms, we take pride in providing our community
                with the freshest produce, specializing in succulent tomatoes.
                But we don&apos;t stop there; our fields also yield a bounty of
                cabbage, spinach, carrots, and an array of other quality crops.
              </p>
            </div>
            <Link href="/shop">
              <button className="bg-[#DC0D0D] px-3 py-1 rounded-xl text-white text-xs font-bold">
                Shop
              </button>
            </Link>
          </div>
        </div>
        <div className="p-4 col-span-1 md:max-w-[550px]">
          <Image
            src={veg}
            alt="Vegetables"
            className="rounded-lg h-96 md:h-full w-fit"
          />
        </div>
      </div>
      <div className="flex flex-col py-10 h-96 w-fit md:w-[600px] mx-auto border-t-2 border-[#dc0d0d] mb-12">
        <section className="mx-auto w-96 flex-col space-y-6">
          <h1 className="uppercase text-xl font-medium text-center tracking-widest">
            Community Service
          </h1>
          <p className="text-sm tracking-wider">
            Education is at the heart of our community initiatives. We believe
            that every child deserves access to quality education, and
            that&apos;s why we provide books and uniforms to local children. Our
            support helps remove barriers to learning and empowers the youth to
            reach for their dreams.
          </p>
          <p className="text-sm tracking-wider">
            Furthermore, we actively encourage and support our dedicated
            workforce to broaden their horizons. Two of our former employees
            have achieved remarkable success, one becoming a police officer and
            the other a nurse. Their achievements inspire us to continue
            fostering growth and development within our community.
          </p>
        </section>
      </div>
    </div>
  );
};

export default about;
