"use client";
import { classes } from "@/app/data";
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

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
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-300px" });
  return (
    <motion.div
      animate={isInView && "show"}
      initial="hidden"
      ref={ref}
      variants={variants}
      className="flex flex-col items-center justify-center"
    >
      {/* text container*/}
      <div className="relative mb-24">
        <motion.h1
          variants={variants}
          initial="hidden"
          animate="show"
          className="text-[60px] xl:text-[200px] text-gray-200 opacity-10 text-center"
        >
          Featured classes
        </motion.h1>
        <div className="absolute -bottom-1 sm:bottom-1 xl:bottom-4 right-0">
          <motion.h1
            variants={variants}
            initial="fromRight"
            animate="show"
            className="text-primary text-center text-5xl xl:text-8xl"
          >
            Classes
          </motion.h1>
        </div>
      </div>
      {/*  */}
      <motion.div
        variants={variants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 xl:grid-cols-2  gap-12 mb-6"
      >
        {classes.map((item, idx) => (
          <div
            key={idx}
            style={{
              background: `url(${item.img})`,
              backgroundRepeat: "no-repeat",
            }}
            className="flex flex-col justify-end h-[400px] w-[400px]  md:w-[600px] relative"
          >
            <div className="absolute top-0 right-0 bottom-0 left-0 bg-[rgba(0,0,0,0.6)] opacity-70"></div>
            <div className="py-4 px-6 flex flex-col gap-4  relative">
              <h1 className="text-5xl text-white font-semibold  ">
                {item.title}
              </h1>
              <button className="bg-primary p-4 text-xl font-bold hover:bg-primary-hover hover:rounded-2xl duration-300">
                Book now
              </button>
            </div>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Classes;
