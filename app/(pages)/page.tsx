import AnimateLogo from "@/components/ui/animated-logo";
import Carousel from "@/components/ui/carousel";
import DashedSeparator from "@/components/ui/dashed-separator";
import SponsorSection from "@/components/ui/sponsor-section";
import React from "react";
import VoteHere from "./components/vote-here";

const page = () => {
  return (
    <section className="min-h-screen pt-12 " id="home-bg">
      <div id="fog" />
      <div className="flex justify-center items-center">
        <div className="py-6 w-[300px] h-[335px]">
          <AnimateLogo />
        </div>
      </div>
      <div className="relative">
        {/* Ticket Section */}
        <div
          className="relative  p-3 pt-6 pb-8 rounded-lg mx-5 mb-5"
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
              {/* create a eye catching framer motion animation for the text */}
              Bali, Indonesia
            </p>
            <DashedSeparator />
            <div className="overflow-hidden p-5 flex justify-center items-center scale-[1.2]">
              <Carousel />
            </div>
          </div>
        </div>

        {/* Vote Here Section */}
        <VoteHere />

        {/* Sponsor Section */}
        <SponsorSection />
      </div>
    </section>
  );
};

export default page;
