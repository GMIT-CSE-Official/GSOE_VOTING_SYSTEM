import Carousel from "@/components/ui/carousel";
import DashedSeparator from "@/components/ui/dashed-separator";
import Marquee from "@/components/ui/marquee";
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
        <p className=" text-white font-bold font-lg merriWeather">
          Check Out our Official Instagram Page
        </p>
        <div className="relative">
          <EmbedInsta />
        </div>
      </div>
      <div className="relative">
        <div className="bg-yellow-400 p-4 mx-5 rounded-xl relative shadow-logo">
          <div id="texture-yellow" />
          <div className="border border-orange-900  p-4 rounded-xl relative space-y-2">
            <h1 className="text-3xl font-bold text-center text-orange-900 edosz">
              GSOE AWARDS 2024
            </h1>
            <h4 className="text-center text-orange-900 font-bold text-lg merriWeather">
              Share with others..
            </h4>
            <div className="flex justify-center items-center space-x-2 mt-2">
              <SharedBtn />
            </div>
          </div>
        </div>
        <div
          className="relative mt-6 p-3 pt-6 pb-8 rounded-lg mx-5 mb-5"
          id="ticketComponent"
        >
          <div className="border rounded-lg px-1 py-2 border-orange-900 text-center relative">
            <h4 className="text-center text-orange-900 font-bold text-base merriWeather">
              Participate and stand a chance to win a
            </h4>
            <span
              className="text-white text-center text-lg font-semibold mt-1 block"
              id="ticketTitleText"
            >
              3-Night, 4-Day Dream Getaway to
            </span>
            <p className="text-center text-2xl font-bold edosz text-orange-900 mt-2">
              Bali, Indonesia
            </p>
            <DashedSeparator />
            <div className="overflow-hidden p-5 flex justify-center items-center scale-[1.2]">
              <Carousel />
            </div>
          </div>
        </div>
        <SponsorSection />
      </div>
    </section>
  );
};

export default ThankYou;
