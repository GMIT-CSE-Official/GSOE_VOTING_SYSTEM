import Image from "next/image";
import React from "react";
import Marquee from "./marquee";

const mainSponsorLogos = [
  {
    image: "Sponsor-fortune.png",
    tagline: "Title Sponsor",
  },
  {
    image: "Sponsor-motovolt.jpg",
    tagline: "Eco Partner",
  },
  {
    image: "Sponsor-kotak.png",
    tagline: "Banking Partner",
  },
  {
    image: "Sponsor-TheGsoe.png",
    tagline: "Travel Partner",
  },
];

const associateLogos = [
  {
    src: "/assets/Sponsor-yancha.png",
    alt: "Logo 1",
  },
  {
    src: "/assets/Sponsor-GMIT.png",
    alt: "Logo 2",
  },
  {
    src: "/assets/Sponsor-pathfinder.jpg",
    alt: "Logo 3",
  },
  {
    src: "/assets/Sponsor-lux.png",
    alt: "Logo 5",
  },
];

export type AssociateLogo = {
  src: string;
  alt: string;
};

const SponsorSection = () => {
  return (
    <div className="relative overflow-x-hidden" id="grundge">
      <Image
        src="/assets/Break-Line.png"
        alt="Break Line"
        width={0}
        height={0}
        sizes="auto"
        className="w-full h-4 mb-8"
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
      <div className="py-4">
        <h4 className="text-center text-white mb-4 font-bold text-lg mt-4 merriWeather">
          In Association With
        </h4>
        <Marquee associateLogos={associateLogos} />
      </div>
    </div>
  );
};

export default SponsorSection;
