import Image from "next/image";
import React from "react";
import EmbedInsta from "./components/embed-insta";
import SharedBtn from "./components/shared-btn";
import SponsorSection from "@/components/ui/sponsor-section";

const ThankYou = () => {
  return (
    <section className="min-h-screen pt-12 " id="home-bg">
      <div className="flex flex-col justify-center items-center py-4 space-y-5 relative">
        <p className="text-yellow-400 text-xl mb-4">
          <strong>Thank You</strong> for participation!
        </p>
        <div className="w-24 h-24 rounded-full relative shadow-md">
          <Image
            src={"/gif/Right-Decision.gif"}
            alt="right decision"
            width={0}
            height={0}
            sizes="auto"
            className="w-full h-full object-cover object-center rounded-full"
          />
        </div>
        <div className="">
          <Image
            src="/assets/Images/instagram.png"
            alt="Instagram"
            width={0}
            height={0}
            sizes="auto"
            className="w-full aspect-square object-cover object-center rounded-md shadow-lg"
          />
        </div>
        <p className=" text-white font-bold font-lg merriWeather">
          Check Out our Official Instagram Page
        </p>

        <div className="relative">
          <EmbedInsta />
        </div>
      </div>
      <div className=" relative flex justify-center items-center space-x-2 mt-2 mb-8">
        <SharedBtn />
      </div>
      <SponsorSection />
    </section>
  );
};

export default ThankYou;
