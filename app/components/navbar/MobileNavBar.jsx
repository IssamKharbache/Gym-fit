"use client";
import { links } from "@/app/data";
import useModalStore from "@/app/store/modalStore";
import Image from "next/image";

import { useState } from "react";
//icons
import { HiMenuAlt1 } from "react-icons/hi";
import { IoCloseOutline } from "react-icons/io5";
import { Link } from "react-scroll";

const MobileNavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const modal = useModalStore();

  if (isOpen) {
    document.body.classList.add("overflow-y-hidden");
  } else {
    document.body.classList.remove("overflow-y-hidden");
  }
  return (
    <div className="flex justify-between items-center p-8 text-2xl   h-24 ">
      <Image
        src="/logo.png"
        className="w-16"
        width={250}
        height={250}
        alt="logo"
      />

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
        className={`absolute z-10 top-24 flex flex-col items-center justify-center gap-16 bg-primary w-full h-full duration-700 ${
          isOpen ? "right-0" : "right-[100%]"
        }`}
      >
        {links.map((link, idx) => (
          <Link
            key={idx}
            onClick={() => setIsOpen(false)}
            className="text-black text-3xl"
            spy={true}
            smooth={true}
            hashSpy={true}
            offset={-50}
            duration={500}
            isDynamic={true}
            to={link.path}
          >
            {link.title}
          </Link>
        ))}
        <button
          onClick={() => {
            setIsOpen(false);
            modal.open();
          }}
          className=" bg-black text-primary py-2 px-6 hover:rounded-2xl hover:opacity-90 duration-300 items-center text-center"
        >
          Become a member
        </button>
      </div>
    </div>
  );
};

export default MobileNavBar;
