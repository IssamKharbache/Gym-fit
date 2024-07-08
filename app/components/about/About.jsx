"use client";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const variants = {
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 2,
      staggerChildren: 0.1,
      type: "spring",
    },
  },
  hidden: {
    x: -500,
    opacity: 0,
  },
  fromRight: {
    x: 800,
    transition: {
      duration: 2,
      type: "spring",
    },
  },
};
const About = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "0px 600px -450px 600px" });
  return (
    <motion.div
      animate={isInView && "show"}
      initial="hidden"
      ref={ref}
      variants={variants}
    >
      <div className="flex flex-col items-center justify-center">
        {/* text container*/}
        <div className="relative mb-16">
          <motion.h1
            variants={variants}
            initial="hidden"
            animate="show"
            className="text-[80px] lg:text-[200px] text-gray-200 opacity-40"
          >
            Who we are
          </motion.h1>
          <div className="absolute -bottom-1 sm:bottom-2 lg:bottom-4 right-0">
            <motion.h1
              variants={variants}
              initial="fromRight"
              animate="show"
              className="text-primary text-center text-5xl lg:text-8xl"
            >
              Who we are
            </motion.h1>
          </div>
        </div>
        {/*  */}
        <div className="flex flex-col lg:flex-row gap-8 px-8 xl:px-0">
          {/* image */}
          <Image
            src="/aboutgym.png"
            height={1500}
            width={1500}
            alt="whoarewe"
            className="w-full lg:w-[50%]  object-cover"
          />
          <p className="text-gray-400 text-xl  lg:text-4xl mb-6">
            Welcome to Fit Gym, where your fitness journey begins! At Fit Gym,
            we provide state-of-the-art equipment, a variety of group classes,
            and personalized training to help you achieve your fitness goals.
            Our expert trainers and supportive community are here to guide and
            motivate you every step of the way. Join us today and become the
            best version of yourself at Fit Gym!
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
