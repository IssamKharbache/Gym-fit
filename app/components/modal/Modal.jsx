"use client";
import { motion } from "framer-motion";
import React from "react";
import { IoIosCloseCircle } from "react-icons/io";

const Modal = ({ isModalOpen, open, close }) => {
  if (!isModalOpen) {
    return null;
  }
  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-md flex justify-center items-center duration-300 px-6 lg:px-0">
      <div className="bg-primary w-[600px] flex flex-col rounded-md relative">
        {/* TITLE */}
        <div className="flex justify-between  items-center p-4 mt-6">
          <h1 className="text-center text-4xl uppercase">Become a member</h1>
          <IoIosCloseCircle
            className="absolute -top-5 -right-5 text-5xl text-red-500 cursor-pointer"
            onClick={close}
          />
        </div>
        {/* FORM */}
        <form className="flex flex-col gap-8 px-6 py-4">
          <input
            placeholder="Full name"
            type="text"
            className="p-6 bg-black/30 rounded-sm outline-none border-black focus:border-2 placeholder:text-black/70 "
          />
          <input
            placeholder="Email Address"
            type="email"
            className="p-6 bg-black/30 rounded-sm outline-none border-black focus:border-2 placeholder:text-black/70 "
          />
          <input
            placeholder="Phone number"
            type="text"
            className="p-6 bg-black/30 rounded-sm outline-none border-black focus:border-2 placeholder:text-black/70 "
          />
          <button className="bg-black text-primary mt-4 p-4 hover:opacity-90 duration-200">
            Become a member
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
