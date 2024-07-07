"use client";
import Link from "next/link";
import React, { useState } from "react";
import MobileNavBar from "./MobileNavBar";
import { IoCloseOutline } from "react-icons/io5";
import { HiMenuAlt1 } from "react-icons/hi";

const links = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Who we are",
    path: "/",
  },
  {
    title: "classes",
    path: "/",
  },
  {
    title: "Memberships",
    path: "/",
  },
];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="flex justify-between items-center p-8 text-2xl bg-primary h-24">
      <h1>Logo</h1>
      {/* dektop navbar */}
      <div className="hidden md:flex gap-8">
        {links.map((link, idx) => (
          <Link
            key={idx}
            className=" border-black hover:scale-110 duration-300"
            href={link.path}
          >
            {link.title}
          </Link>
        ))}
      </div>
      {/* mobile nav */}
      <MobileNavBar />
      <button className="hidden md:block bg-black text-white py-2 px-6 hover:rounded-2xl hover:opacity-90 duration-300 items-center text-center">
        Contact
      </button>
    </nav>
  );
};

export default NavBar;
