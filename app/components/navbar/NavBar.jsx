"use client";
import Link from "next/link";
import React, { useState } from "react";
import MobileNavBar from "./MobileNavBar";
import { IoCloseOutline } from "react-icons/io5";
import { HiMenuAlt1 } from "react-icons/hi";
import { links } from "@/app/data";

const NavBar = () => {
  return (
    <nav className="flex justify-between items-center p-8 text-2xl bg-black h-24 max-w-[1400px] mx-auto">
      <h1 className="text-primary">Logo</h1>
      {/* dektop navbar */}
      <div className="hidden md:flex gap-8">
        {links.map((link, idx) => (
          <Link
            key={idx}
            className="hover:scale-110 duration-300 text-primary"
            href={link.path}
          >
            {link.title}
          </Link>
        ))}
      </div>
      {/* mobile nav */}
      <div className="block md:hidden">
        <MobileNavBar />
      </div>
      <button className="hidden md:block bg-primary text-black py-2 px-6 hover:rounded-2xl hover:opacity-90 duration-300 items-center text-center">
        Become a member
      </button>
    </nav>
  );
};

export default NavBar;
