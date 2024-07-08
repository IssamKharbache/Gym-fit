"use client";
import { links } from "@/app/data";
import Link from "next/link";
import { useState } from "react";
//icons
import { HiMenuAlt1 } from "react-icons/hi";
import { IoCloseOutline } from "react-icons/io5";

const MobileNavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="">
      {/* icons */}
      {isOpen ? (
        <IoCloseOutline
          onClick={() => setIsOpen(false)}
          className="text-3xl sm:text-4xl text-primary"
        />
      ) : (
        <HiMenuAlt1
          onClick={() => setIsOpen(true)}
          className="text-3xl sm:text-4xl text-primary"
        />
      )}
      <div
        className={`absolute right-0 top-24  flex flex-col items-center justify-center gap-16 bg-primary w-full h-full duration-700 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        {links.map((link, idx) => (
          <Link key={idx} className="text-black text-3xl" href={link.path}>
            {link.title}
          </Link>
        ))}
        <button className=" bg-black text-primary py-2 px-6 hover:rounded-2xl hover:opacity-90 duration-300 items-center text-center">
          Become a member
        </button>
      </div>
    </div>
  );
};

export default MobileNavBar;
