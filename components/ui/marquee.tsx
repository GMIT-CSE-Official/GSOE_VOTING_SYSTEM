import { AssociateLogo } from "@/app/(pages)/page";
import Image from "next/image";
import React from "react";
import ReactMarquee from "react-fast-marquee";

const Marquee = ({ associateLogos }: { associateLogos: AssociateLogo[] }) => {
  return (
    <div className="marquee-bg relative py-4">
      <div className="marquee-placeholder absolute top-0 bottom-0 -left-5 right-0"></div>
      <ReactMarquee className="bg-white p-4 flex justify-between text-black gap-6">
        {associateLogos.map((logo, i) => (
          <Image
            src={logo.src}
            alt={logo.alt}
            className="h-16 w-16 object-contain object-center shadow-lg rounded-full p-2"
            width={0}
            height={0}
            sizes="auto"
            key={i}
          />
        ))}
      </ReactMarquee>
    </div>
  );
};

export default Marquee;
