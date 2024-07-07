"use client";
import { motion } from "framer-motion";
import React from "react";

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
const Classes = () => {
  return (
    <div className="relative mb-16">
      <motion.h1
        variants={variants}
        initial="hidden"
        animate="show"
        className="text-[80px] lg:text-[200px] text-gray-200 opacity-10"
      >
        Featured classes
      </motion.h1>
      <div className="absolute -bottom-1 sm:bottom-2 lg:bottom-4 right-0">
        <motion.h1
          variants={variants}
          initial="fromRight"
          animate="show"
          className="text-primary text-center text-5xl lg:text-8xl"
        >
          Classes
        </motion.h1>
      </div>
    </div>
  );
};

export default Classes;
