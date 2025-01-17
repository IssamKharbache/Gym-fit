"use client";
import { classes } from "@/app/data";
import useModalStore from "@/app/store/modalStore";
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

const variants = {
  show: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 2,
      delay: 0.8 * i,
      staggerChildren: 0.1,
      type: "spring",
    },
  }),
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
  const isInView = useInView(ref, { margin: "0px 600px -50px 600px" });
  const modal = useModalStore();
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
          className="text-[50px] xl:text-[200px] text-gray-200 opacity-10 text-center"
        >
          Featured classes
        </motion.h1>
        <div className="absolute -bottom-1 sm:bottom-1 xl:bottom-4 right-0">
          <motion.h1
            variants={variants}
            initial="fromRight"
            animate="show"
            className="text-primary text-center text-4xl xl:text-8xl"
          >
            Classes
          </motion.h1>
        </div>
      </div>
      {/*  */}
      <motion.div className="grid grid-cols-1 xl:grid-cols-2   gap-12 mb-6">
        {classes.map((item, idx) => (
          <motion.div
            custom={idx}
            variants={variants}
            initial="hidden"
            animate="show"
            key={idx}
            style={{
              background: `url(${item.img})`,
              backgroundRepeat: "no-repeat",
            }}
            className="flex flex-col justify-end h-[400px] w-[300px] px-4 md:px-0  md:w-[600px] relative"
          >
            <div className="absolute top-0 right-0 bottom-0 left-0 bg-[rgba(0,0,0,0.6)] opacity-70"></div>
            <div className="py-4 px-6 flex flex-col gap-4  relative">
              <h1 className="text-3xl md:text-5xl text-white font-semibold  ">
                {item.title}
              </h1>
              <button
                onClick={modal.open}
                className="bg-primary p-4 text-xl font-bold hover:bg-primary-hover hover:rounded-2xl duration-300"
              >
                Book now
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Classes;
