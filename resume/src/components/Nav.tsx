import Link from "next/link";
import { useState } from "react";
import { BiMenu } from "react-icons/bi";

function PrimaryMenu() {
  const [isOpen, setIsOpen] = useState(false);

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
        sm:flex-row bg-white"
        >
          <li className="p-4" onClick={() => setIsOpen(false)}>
            <Link href="/">Home</Link>
          </li>
          <li className="p-4" onClick={() => setIsOpen(false)}>
            <Link href="/about">About</Link>
          </li>
          <li className="p-4" onClick={() => setIsOpen(false)}>
            <Link href="/portfolio">Portfolio</Link>
          </li>
          <li className="p-4" onClick={() => setIsOpen(false)}>
            <Link href="/contact">
              <button className="primary">Contact</button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default function Nav() {
  return (
    <div className="relative flex flex-row items-center justify-between w-full px-4 py-2 md:px-8">
      <Link href="/">
        <span className="font-cursive text-2xl cursor-pointer">Ryan Byrne</span>
      </Link>
      <PrimaryMenu />
    </div>
  );
}
