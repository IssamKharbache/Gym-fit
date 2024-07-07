"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const variants = {
  initial: {
    opacity: 0,
    x: -500,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 2,
      type: "spring",
    },
  },
};

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row gap-8">
      {/* text */}
      <motion.div
        variants={variants}
        animate="animate"
        initial="initial"
        className="text-white px-8 xl:px-0"
      >
        <h1 className="text-5xl lg:text-8xl">EMBRACE THE CHALLENGE,</h1>
        <h1 className="text-5xl lg:text-8xl">RISE ABOVE THE REST,</h1>
        <h1 className="text-5xl lg:text-8xl">IGNITE YOUR POTENTIAL</h1>
        <div className="flex justify-center md:justify-end gap-10">
          <button className="bg-primary hover:bg-primary-hover duration-300 px-6 py-2 text-xl text-black mt-8">
            Getting started
          </button>
          <button className="border-2 border-primary hover:bg-primary hover:text-black duration-300 px-6 py-2 text-xl text-primary mt-8">
            Classes
          </button>
        </div>
      </motion.div>
      {/* image */}
      <motion.div
        variants={{
          initial: {
            opacity: 0,
            y: -500,
          },
          animate: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 2,
              type: "spring",
            },
          },
        }}
        animate="animate"
        initial="initial"
        ial="initial"
        className=""
      >
        <Image
          src="/gym.png"
          width={1200}
          height={1200}
          alt="gym"
          className="h-full object-cover rounded-sm"
        />
      </motion.div>
    </div>
  );
};

export default Hero;
