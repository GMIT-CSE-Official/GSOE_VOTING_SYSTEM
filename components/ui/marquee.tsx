import { AssociateLogo } from "@/components/ui/sponsor-section";
import Image from "next/image";
import React from "react";
import ReactMarquee from "react-fast-marquee";

const Marquee = ({ associateLogos }: { associateLogos: AssociateLogo[] }) => {
  return (
    <div className="marquee-bg relative py-4">
      <div className="marquee-placeholder absolute top-3 bottom-3 -left-5 right-0"></div>
      <ReactMarquee className="bg-white shadow-logo p-4 text-black">
        {associateLogos.map((logo, i) => (
          <Image
            src={logo.src}
            alt={logo.alt}
            className="h-20 w-20 object-contain object-center shadow-lg rounded-full p-2 mr-12"
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
