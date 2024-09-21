import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="absolute top-6 left-5 z-10">
      <Image
        src={"/assets/Main-GSOE-Logo.png"}
        alt="GSOE Logo"
        width={52}
        height={35}
      />
    </div>
  );
};

export default Header;
