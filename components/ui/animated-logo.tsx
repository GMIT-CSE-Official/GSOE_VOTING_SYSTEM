"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const filterStyle = {
  filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.55))",
};

const AnimateLogo = () => {
  return (
    <>
      <div className="w-full flex justify-center relative items-center h-full">
        <motion.div
          className="mix-blend-soft-light absolute top-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            delay: 1,
            ease: "linear",
            repeat: Infinity,
            repeatDelay: 1,
          }}
        >
          <Image
            src={"/assets/Hero-Mandala.png"}
            alt="Mandala"
            width={300}
            height={300}
            loading="lazy"
          />
        </motion.div>
        <div className="relative flex justify-center items-center w-full h-full">
          <motion.div
            className="absolute top-1 z-20"
            initial={{ height: "80%", width: "80%" }}
            animate={{ height: "100px", width: "100px" }}
            transition={{
              duration: 3,
              delay: 1,
              stiffness: 260,
              damping: 20,
              ease: "backOut",
              repeat: Infinity,
              repeatDelay: 1,
            }}
          >
            <Image
              src={"/assets/Hero-Durga-Face.png"}
              alt="Logo"
              height={0}
              width={0}
              sizes="auto"
              className="w-full h-full"
              style={filterStyle}
              loading="eager"
            />
          </motion.div>
          <motion.div
            className="relative flex justify-center items-center w-full h-full"
            style={{ height: "180px", width: "180px" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 3,
              delay: 1,
              repeat: Infinity,
              repeatDelay: 1,
            }}
          >
            <div className="absolute left-0 -translate-x-1/2">
              <Image
                src={"/assets/Hero-Wing-Left.png"}
                alt="Logo"
                width={70}
                height={100}
                style={filterStyle}
                loading="eager"
              />
            </div>
            <div className="mt-3 shadow-slate-900/50  shadow-logo relative z-10">
              <Image
                src={"/assets/Hero-GSOE-Logo.png"}
                alt="GSOE Logo"
                width={150}
                height={150}
                loading="eager"
              />
            </div>
            <div className="absolute right-0 translate-x-1/2">
              <Image
                src={"/assets/Hero-Wing-Right.png"}
                alt="Logo"
                width={70}
                height={100}
                style={filterStyle}
                loading="eager"
              />
            </div>
          </motion.div>
        </div>
        <motion.div
          className="absolute bottom-7"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            delay: 3,
            repeat: Infinity,
            repeatDelay: 1,
          }}
        >
          <Image
            src={"/assets/Hero-Tag-line.png"}
            alt="Tag Line"
            width={240}
            height={50}
            style={filterStyle}
            loading="eager"
          />
        </motion.div>
      </div>
    </>
  );
};

export default AnimateLogo;
