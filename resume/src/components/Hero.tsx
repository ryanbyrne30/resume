import HeroImage from "@/assets/images/hero.webp";
import BlobImage from "@/assets/svgs/blob.webp";
import Image from "next/image";
import Link from "next/link";
import { BsFillTriangleFill } from "react-icons/bs";

export default function Hero() {
  return (
    <div className="flex flex-col items-center md:items-start p-10 h-screen relative md:p-40">
      <div className="">
        <div className="flex flex-col items-start">
          <span className="opacity-50 md:text-xl">Hello!</span>
          <span className="text-4xl font-bold py-3 md:text-6xl">
            I&apos;m Ryan Byrne
          </span>
          <span className="text-xl md:text-3xl">
            Full Stack Engineer & Computerphile
          </span>
        </div>
        <p className="my-10 w-full max-w-sm hidden sm:flex">
          Hi, my name is Ryan and my passion is turning ideas into reality using
          the power of the internet.
        </p>
        <div className="flex flex-col items-end md:items-start w-full py-10 sm:p-0">
          <div className="flex flex-col items-center md:flex-row">
            <Link href="/contact">
              <button className="primary">Contact Me</button>
            </Link>
            <Link href="/about">
              <div className=" cursor-pointer flex flex-row items-center whitespace-nowrap p-4">
                <span className="p-1 rounded-full border-2 border-gray-300">
                  <BsFillTriangleFill
                    className="text-xs"
                    style={{ transform: "translateX(1.5px) rotate(90deg)" }}
                  />
                </span>
                <span className="pl-2">Start Tour</span>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 h-full w-full -z-10">
        <div className="w-full h-full absolute bottom-0 left-0 -translate-x-1/4 translate-y-1/3 -z-10 opacity-50 md:translate-x-1/4 md:translate-y-1/4 rotate-12">
          <Image
            src={BlobImage}
            alt="hero-image"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="absolute bottom-0 left-0 w-full h-full -translate-x-1/4 translate-y-1/4 -z-10 md:translate-x-1/3 md:translate-y-0">
          <Image
            src={HeroImage}
            alt="hero-image"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
    </div>
  );
}
