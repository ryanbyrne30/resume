import HeroImage from "@/assets/images/hero.webp";
import BlobImage from "@/assets/svgs/blob.webp";
import Image from "next/image";
import { BsFillTriangleFill } from "react-icons/bs";
import ContactButton from "./ContactButton";
import { Link as ScrollLink } from "react-scroll";
import { randChoice, randInt, randNorm, randPct } from "@/utils/data";

function Decor({ size }: { size: number }) {
  const color = randChoice([
    "bg-primary",
    "bg-primary",
    "bg-primary",
    "bg-white",
  ]);
  const direction = randChoice(["reverse", ""]);
  const height = randNorm() * 50 * size;
  const width = height * randInt(1, 2);
  const rotation = randPct() * 180;
  const delay = randInt(0, 10);
  const duration = randInt(8, 30);

  return (
    <div
      className={`${color} rounded-full absolute -z-10 opacity-0 decor`}
      style={{
        height,
        width,
        top: `${randInt(-5, 100)}%`,
        left: `${randInt(-5, 100)}%`,
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
        animationDirection: direction,
      }}
    />
  );
}

export default function Hero() {
  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 items-start sm:items-start p-10 h-full relative md:p-40 overflow-hidden"
      style={{ paddingBottom: 0 }}
    >
      <div>
        <div className="flex flex-col items-start">
          <span className="opacity-50 md:text-xl font-light italic">
            - Hey there!
          </span>
          <span className="text-4xl font-bold py-3 md:text-6xl md:py-5">
            I&apos;m Ryan Byrne
          </span>
          <span className="text-xl md:text-3xl pb-10">
            Software Engineer & Technology Enthusiast
          </span>
        </div>
        <p className="pb-10 w-full max-w-sm sm:flex font-light">
          Give me the impossible, I&apos;ll show you where you&apos;re wrong.
        </p>
        <div className="flex flex-col items-end sm:items-center sm:flex-row sm:pb-20">
          <ContactButton />
          <ScrollLink to="about" smooth>
            <div className=" cursor-pointer flex flex-row items-center whitespace-nowrap p-4">
              <span className="p-1 rounded-full border-2 border-gray-300">
                <BsFillTriangleFill
                  className="text-xs"
                  style={{ transform: "translateX(1.5px) rotate(90deg)" }}
                />
              </span>
              <span className="pl-2">Start Tour</span>
            </div>
          </ScrollLink>
        </div>
      </div>

      <div className="relative flex flex-col items-start justify-end w-full h-full">
        <div className="relative w-72 h-72 sm:w-96 sm:h-96 xl:h-full xl:w-full">
          <Image
            src={HeroImage}
            alt="hero-image"
            layout="fill"
            objectFit="contain"
            priority
            loading="eager"
          />
        </div>
      </div>
    </div>
  );
}

// export default function Hero() {
//   return (
//     <div className="flex flex-col items-center sm:items-start p-10 h-full relative md:p-40 overflow-hidden">
//       <div className="">
//         <div className="flex flex-col items-start">
//           <span className="opacity-50 md:text-xl font-light italic">
//             - Hey there!
//           </span>
//           <span className="text-4xl font-bold py-3 md:text-6xl md:py-5">
//             I&apos;m Ryan Byrne
//           </span>
//           <span className="text-xl md:text-3xl">
//             Full Stack Developer & Technology Enthusiast
//           </span>
//         </div>
//         <p className="my-10 w-full max-w-sm hidden sm:flex font-light md:py-10">
//           Hi, my name is Ryan and I turn ideas into reality using the power of
//           the internet.
//         </p>
//         <div className="flex flex-col items-end sm:items-start w-full py-10 sm:p-0">
//           <div className="flex flex-col items-center sm:flex-row">
//             <ContactButton />
//             <ScrollLink to="about" smooth>
//               <div className=" cursor-pointer flex flex-row items-center whitespace-nowrap p-4">
//                 <span className="p-1 rounded-full border-2 border-gray-300">
//                   <BsFillTriangleFill
//                     className="text-xs"
//                     style={{ transform: "translateX(1.5px) rotate(90deg)" }}
//                   />
//                 </span>
//                 <span className="pl-2">Start Tour</span>
//               </div>
//             </ScrollLink>
//           </div>
//         </div>
//       </div>

//       <div className="absolute bottom-0 left-0 right-0 w-full h-1/2 sm:h-3/4 -translate-x-1/4 -z-10 sm:translate-x-1/4 sm:translate-y-1/3">
//         <div className="relative w-full h-full">
//           <Image
//             src={HeroImage}
//             alt="hero-image"
//             layout="fill"
//             objectFit="contain"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }
