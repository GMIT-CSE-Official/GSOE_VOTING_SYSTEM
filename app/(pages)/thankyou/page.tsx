import Carousel from "@/components/ui/carousel";
import DashedSeparator from "@/components/ui/dashed-separator";
import Marquee from "@/components/ui/marquee";
import Image from "next/image";
import React from "react";
import EmbedInsta from "./components/embed-insta";
import SharedBtn from "./components/shared-btn";

const mainSponsorLogos = [
  {
    image: "Sponsor-motovolt.jpg",
  },
  {
    image: "Sponsor-kotak.png",
    tagline: "Kotak",
  },
  {
    image: "Sponsor-TheGsoe.jpg",
    tagline: "The GSOE",
  },
  {
    image: "Logo-4.png",
    tagline: "Sponsor",
  },
];

const associateLogos = [
  {
    src: "/assets/Sponsor-motovolt.jpg",
    alt: "Logo 1",
  },
  {
    src: "/assets/Sponsor-kotak.png",
    alt: "Logo 2",
  },
  {
    src: "/assets/Sponsor-TheGsoe.jpg",
    alt: "Logo 3",
  },
  {
    src: "/assets/Logo-4.png",
    alt: "Logo 4",
  },
];

export type AssociateLogo = {
  src: string;
  alt: string;
};

const ThankYou = () => {
  return (
    <section className="min-h-screen pt-12 " id="home-bg">
      <div className="flex flex-col justify-center items-center py-4 space-y-3 relative">
        <p className="text-yellow-400">
          <strong>Thank You</strong> for participation!
        </p>
        <div className="w-24 h-24 rounded-full relative">
          <Image
            src={"/gif/Right-Decision.gif"}
            alt="right decision"
            width={0}
            height={0}
            sizes="auto"
            className="w-full h-full object-cover object-center rounded-full"
          />
        </div>
        <p className="mt-4 text-white font-bold font-lg merriWeather">
          Check Out our Official Instagram Page
        </p>
        <div className="relative rounded-lg">
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
          className="relative mt-6 p-3 pt-6 pb-8 rounded-lg mx-5"
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
        <div className="relative overflow-x-hidden">
          <Image
            src="/assets/Break-Line.png"
            alt="Break Line"
            width={0}
            height={0}
            sizes="auto"
            className="w-full h-4"
          />
          <div className="mx-5 relative pb-4">
            <h4 className="text-center text-white mb-4 font-bold text-lg mt-4 merriWeather">
              Powered By
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {mainSponsorLogos.map((logo, index) => (
                <div
                  key={index}
                  className="flex justify-center items-center bg-white rounded-md overflow-hidden shadow-logo p-3"
                >
                  <div className="border border-orange-900 rounded-md flex justify-center items-center relative overflow-hidden">
                    <Image
                      src={`/assets/${logo.image}`}
                      alt="Sponsor Logo"
                      width={0}
                      height={0}
                      sizes="auto"
                      className="w-[80%] h-full rounded-md object-contain object-center"
                    />
                    {logo.tagline && (
                      <div className="absolute  bg-orange-900 text-white w-full text-center font-semibold left-0 right-0 bottom-0">
                        {logo.tagline}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <h4 className="text-center text-white mb-4 font-bold text-lg mt-4 merriWeather">
            Associated With
          </h4>
          <div className="py-4">
            <Marquee associateLogos={associateLogos} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThankYou;
