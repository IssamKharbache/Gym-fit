"use client";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import Cards from "./Cards";

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

const MemberShip = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "0px 600px -50px 600px" });
  return (
    <motion.div
      animate={isInView && "show"}
      initial="hidden"
      ref={ref}
      variants={variants}
      className="p-4 md:p-0"
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
            Memberships
          </motion.h1>
          <div className="absolute -bottom-1 sm:bottom-2 lg:bottom-4 right-0">
            <motion.h1
              variants={variants}
              initial="fromRight"
              animate="show"
              className="text-primary text-center text-5xl lg:text-8xl"
            >
              Memberships
            </motion.h1>
          </div>
        </div>
        {/*  */}
      </div>
      <Cards />
    </motion.div>
  );
};

export default MemberShip;
