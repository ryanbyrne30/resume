import HeroImage from "@/assets/images/hero.webp";
import BlobImage from "@/assets/svgs/blob.webp";
import Image from "next/image";
import Link from "next/link";
import { BsFillTriangleFill } from "react-icons/bs";
import ContactButton from "./ContactButton";

export default function Hero() {
  return (
    <div className="flex flex-col items-center sm:items-start p-10 h-screen relative md:p-40 overflow-hidden">
      <div className="">
        <div className="flex flex-col items-start">
          <span className="opacity-50 md:text-xl font-light italic">
            - Hey there!
          </span>
          <span className="text-4xl font-bold py-3 md:text-6xl md:py-5">
            I&apos;m Ryan Byrne
          </span>
          <span className="text-xl md:text-3xl">
            Full Stack Engineer & Technology Enthusiast
          </span>
        </div>
        <p className="my-10 w-full max-w-sm hidden sm:flex font-light md:py-10">
          Hi, my name is Ryan and I turn ideas into reality using the power of
          the internet.
        </p>
        <div className="flex flex-col items-end sm:items-start w-full py-10 sm:p-0">
          <div className="flex flex-col items-center sm:flex-row">
            <ContactButton />
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
        <div className="w-full h-full absolute bottom-0 left-0 -translate-x-1/4 translate-y-1/3 -z-10 opacity-50 sm:translate-x-1/4 sm:translate-y-1/4 rotate-12">
          <Image
            src={BlobImage}
            alt="hero-image"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="h-10 w-32 bg-primary rounded-full opacity-10 absolute left-1/2 origin-top-left top-1/3 -z-10 translate-x-1/2 rotate-3 hidden sm:flex" />
        <div className="h-16 w-16 bg-primary rounded-full opacity-10 absolute left-2/3 origin-top-left top-2/3 -z-10 translate-x-1/2 rotate-3 hidden sm:flex" />
        <div className="h-10 w-10 bg-primary rounded-full opacity-10 absolute left-3/4 origin-top-left top-1/4 -z-10 translate-x-3/4 -translate-y-full rotate-3 hidden sm:flex" />
        <div className="h-44 w-44 bg-primary rounded-full opacity-10 absolute left-1/2 origin-top-left top-3/4 -z-10 translate-x-1/4 translate-y-1/2 rotate-3 hidden sm:flex" />
        <div className="h-8 w-8 bg-white rounded-full opacity-20 absolute left-1/2 origin-top-left top-1/3 -z-10 translate-x-0 rotate-3 hidden sm:flex" />
        <div className="h-32 w-full bg-white rounded-full opacity-20 absolute left-0 origin-top-left top-1/2 -z-10 translate-x-1/2 -rotate-12 sm:flex" />
        <div className="absolute bottom-0 left-0 right-0 w-full h-1/2 sm:h-3/4 -translate-x-1/4 -z-10 sm:translate-x-1/3 sm:translate-y-0">
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
