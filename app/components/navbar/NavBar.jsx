"use client";
import MobileNavBar from "./MobileNavBar";

import { links } from "@/app/data";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import Modal from "../modal/Modal";
import useModalStore from "@/app/store/modalStore";
import Image from "next/image";

const NavBar = () => {
  const [navColor, setNavColor] = useState(false);

  const modal = useModalStore();

  useEffect(() => {
    const changeNavColor = () => {
      if (window.scrollY >= 80) {
        setNavColor(true);
      } else {
        setNavColor(false);
      }
    };

    window.addEventListener("scroll", changeNavColor);
  }, []);

  return (
    <>
      <nav
        className={`sticky top-0 z-10 flex justify-between items-center p-8 text-2xl   h-24   ${
          navColor
            ? "bg-primary hidden md:flex   "
            : "bg-black max-w-[1400px] mx-auto hidden md:flex"
        }`}
      >
        {navColor ? (
          <Image
            src="/logo2.png"
            width={250}
            height={250}
            className="w-16"
            alt="logo"
          />
        ) : (
          <Image
            src="/logo.png"
            className="w-16"
            width={250}
            height={250}
            alt="logo"
          />
        )}

        {/* dektop navbar */}
        <div className="flex gap-8">
          <Link
            to={"/"}
            spy={true}
            smooth={true}
            hashSpy={true}
            offset={-150}
            duration={500}
            isDynamic={true}
            className={`${
              navColor ? "text-black" : "text-primary"
            } hover:scale-110 duration-300  uppercase cursor-pointer`}
          >
            Home
          </Link>
          {links.map((link, idx) => (
            <Link
              to={link.path}
              spy={true}
              smooth={true}
              hashSpy={true}
              offset={-50}
              duration={500}
              isDynamic={true}
              key={idx}
              className={`${
                navColor ? "text-black" : "text-primary"
              } hover:scale-110 duration-300  uppercase cursor-pointer`}
            >
              {link.title}
            </Link>
          ))}
        </div>

        <button
          onClick={modal.open}
          className={`hidden md:block ${
            navColor ? "bg-black text-primary" : "bg-primary text-black"
          }   py-2 px-6 hover:rounded-2xl hover:opacity-90 duration-300 items-center text-center`}
        >
          Become a member
        </button>
      </nav>
      {/* mobile nav */}
      <div className="block md:hidden">
        <MobileNavBar />
      </div>
    </>
  );
};

export default NavBar;
