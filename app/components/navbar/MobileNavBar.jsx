"use client";
import Link from "next/link";
import { useState } from "react";
//icons
import { HiMenuAlt1 } from "react-icons/hi";
import { IoCloseOutline } from "react-icons/io5";

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

const MobileNavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="">
      {isOpen ? (
        <IoCloseOutline
          onClick={() => setIsOpen(false)}
          className="text-3xl sm:text-4xl"
        />
      ) : (
        <HiMenuAlt1
          onClick={() => setIsOpen(true)}
          className="text-3xl sm:text-4xl"
        />
      )}

      <div
        className={`absolute right-0 top-24  flex flex-col items-center justify-center gap-16 bg-black w-full h-full duration-700 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        {links.map((link, idx) => (
          <Link key={idx} className="text-primary text-3xl" href={link.path}>
            {link.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MobileNavBar;
