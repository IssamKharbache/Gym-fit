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
    <div className="block md:hidden">
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
        className={`absolute right-0 top-24 flex flex-col items-center justify-center gap-16 bg-black w-full h-full duration-700 ${
          isOpen ? "mr-0" : "-mr-[100%]"
        }`}
      >
        {links.map((link, idx) => (
          <Link key={idx} className="text-primary text-3xl" href={link.path}>
            {link.title}
          </Link>
        ))}
        <button className="block md:hidden bg-primary  py-2 px-6 hover:rounded-2xl hover:opacity-90 duration-300 items-center text-center">
          Contact
        </button>
      </div>
    </div>
  );
};

export default MobileNavBar;