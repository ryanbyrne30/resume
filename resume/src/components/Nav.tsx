// import Link from "next/link";
import { useEffect, useState } from "react";
import { BiMenu } from "react-icons/bi";
import ContactButton from "./ContactButton";
import { Link, animateScroll as scroll } from "react-scroll";

function PrimaryMenu() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) document.body.classList.add("freeze");
    else document.body.classList.remove("freeze");
  }, [isOpen]);

  return (
    <div className="bg-gray-50">
      <BiMenu
        className="text-2xl sm:hidden bg-white cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      />
      <div
        className={`absolute top-full right-0 w-screen transition-all overflow-hidden sm:relative sm:h-fit sm:w-fit z-10 ${
          isOpen ? "h-screen" : "h-0"
        }`}
      >
        <ul
          className="flex flex-col items-center justify-center h-full w-full
        sm:flex-row bg-white text-left"
        >
          <li className="p-2 cursor-pointer">
            <Link smooth={true} to="/" onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li>
          <li className="p-2 cursor-pointer">
            <Link smooth={true} to="about" onClick={() => setIsOpen(false)}>
              About Me
            </Link>
          </li>
          <li className="p-2 cursor-pointer">
            <Link smooth={true} to="skills" onClick={() => setIsOpen(false)}>
              Skills
            </Link>
          </li>
          <li className="p-2 cursor-pointer">
            <Link
              smooth={true}
              to="employment"
              onClick={() => setIsOpen(false)}
            >
              Employment
            </Link>
          </li>
          <li className="p-2 cursor-pointer">
            <ContactButton onClick={() => setIsOpen(false)} />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default function Nav() {
  return (
    <div className="relative flex flex-row items-center justify-between w-full px-4 py-2 md:px-8">
      <Link smooth={true} to="/">
        <span className="font-cursive text-2xl cursor-pointer">Ryan Byrne</span>
      </Link>
      <PrimaryMenu />
    </div>
  );
}
