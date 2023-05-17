// import Link from "next/link";
import { useEffect, useState } from "react";
import { BiMenu } from "react-icons/bi";
import ContactButton from "./ContactButton";
import { Link, animateScroll as scroll } from "react-scroll";

function MenuItems({ closeMenu }: { closeMenu: () => void }) {
  return (
    <ul
      className="flex gap-4 flex-col items-center justify-center h-full w-full
sm:flex-row bg-white text-left"
    >
      <li className="cursor-pointer">
        <Link smooth={true} to="hero" onClick={closeMenu}>
          Home
        </Link>
      </li>
      <li className="cursor-pointer">
        <Link smooth={true} to="about" onClick={closeMenu}>
          About Me
        </Link>
      </li>
      <li className="cursor-pointer">
        <Link smooth={true} to="skills" onClick={closeMenu}>
          Skills
        </Link>
      </li>
      <li className="cursor-pointer">
        <Link smooth={true} to="employment" onClick={closeMenu}>
          Work
        </Link>
      </li>
      <li className="cursor-pointer">
        <ContactButton onClick={closeMenu} />
      </li>
    </ul>
  );
}

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="bg-white fixed z-30 top-0 left-0 right-0 flex flex-row items-center justify-between w-full px-4 py-2 md:px-8">
        <Link smooth={true} to="hero">
          <span className="font-cursive text-2xl cursor-pointer">
            Ryan Byrne
          </span>
        </Link>
        <div className="sm:hidden">
          <BiMenu
            className="text-2xl sm:hidden bg-white cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>

        <div className="hidden sm:block">
          <MenuItems closeMenu={() => setIsOpen(false)} />
        </div>
      </div>
      <div
        className={`${
          isOpen ? "top-0" : "-top-full"
        } bg-white z-10 transition-all w-screen h-screen fixed left-0 right-0`}
      >
        <MenuItems closeMenu={() => setIsOpen(false)} />
      </div>
    </>
  );
}
