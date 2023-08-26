import { DownloadResume } from "@/components/downloadResume";
import {
  GitHubIcon,
  LinkedInIcon,
  PaintbrushIcon,
  ProfileIcon,
  SpeechIcon,
  SuitcaseIcon,
} from "@/components/icons";
import { DownloadIcon } from "@/components/icons/DownloadIcon";
import Head from "next/head";
import Image from "next/image";
import {
  useEffect,
  type ReactNode,
  useState,
  createContext,
  useContext,
} from "react";
import { twMerge } from "tailwind-merge";

const LayoutContext = createContext<{
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}>({
  isOpen: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setIsOpen: () => {},
});

export function Layout({
  children,
  title,
}: {
  children: ReactNode;
  title?: string;
}) {
  const [hasLoaded, setHasLoaded] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setHasLoaded(true);
    setTimeout(() => {
      setIsOpen(true);
    }, 300);
  }, []);

  return (
    <LayoutContext.Provider value={{ isOpen, setIsOpen }}>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="Ryan Byrne is software engineer who prides himself on developing impactful solutions to extraordinary problems."
        />
        <meta property="og:title" content="Ryan Byrne's Resume" />
        <meta
          property="og:description"
          content="Ryan Byrne is software engineer who prides himself on developing impactful solutions to extraordinary problems."
        />
        <meta
          property="og:image"
          content="https://www.ryanbyrne.work/images/headshot.webp"
        />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <main className="flex h-[100dvh] w-full flex-col items-center bg-main-900 sm:p-16">
        <div className="grid h-full w-full sm:max-w-6xl sm:grid-cols-[208px_auto] lg:grid-cols-[384px_auto]">
          <Headshot />
          <div className="w-full overflow-hidden sm:rounded-r-xl sm:py-8">
            <div
              className={twMerge(
                "hidden h-full -translate-x-full overflow-hidden bg-main-800 text-white shadow-md shadow-main-950 transition-all duration-300 sm:rounded-r-xl",
                isOpen ? "translate-x-0" : "-translate-x-full",
                hasLoaded ? "block" : ""
              )}
            >
              <Nav />
              <div className="scrollbar-hide h-[calc(100%-56px)] w-full overflow-y-scroll p-4 py-8 pl-16 sm:p-8 sm:pl-8">
                {children}
              </div>
            </div>
          </div>
        </div>
      </main>
    </LayoutContext.Provider>
  );
}

function Headshot() {
  return (
    <div className="relative z-30 hidden h-full w-0 flex-col justify-end bg-gradient-to-b from-main-900 to-main-700 shadow-xl shadow-main-950 sm:flex sm:w-52 lg:w-96">
      <div className=" h-full w-full">
        <Image
          src="/images/headshot.webp"
          loading="eager"
          priority
          fill
          className="object-cover"
          alt="Heashot"
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0 flex h-40 flex-col justify-center gap-4 bg-gradient-to-t from-main-950 to-transparent p-4 text-center">
        <div>
          <h1 className="text-3xl font-bold text-white">Ryan Byrne</h1>
          <p className="text-primary-500">Full Stack Engineer</p>
        </div>
        <ul className="flex flex-row flex-wrap items-center justify-center gap-4">
          <a
            href="https://github.com/ryanbyrne30"
            target="_blank"
            className="flex w-fit flex-row items-center gap-1 fill-white stroke-white hover:fill-main-300 hover:stroke-main-300"
          >
            <GitHubIcon className="h-6 w-6" />
          </a>
          <a
            href="https://github.com/ryanbyrne30"
            target="_blank"
            className="flex w-fit flex-row items-center gap-1 fill-white stroke-white hover:fill-main-300 hover:stroke-main-300"
          >
            <LinkedInIcon className="h-6 w-6" />
          </a>
          <DownloadResume>
            <DownloadIcon className="h-8 w-8 rounded-full border border-transparent bg-primary-500 fill-primary-500 stroke-white p-1 transition-colors hover:border-primary-500 hover:bg-transparent hover:fill-transparent hover:stroke-primary-500 hover:text-primary-500" />
          </DownloadResume>
        </ul>
      </div>
    </div>
  );
}

function Nav() {
  return (
    <nav className="fixed bottom-0 left-0 top-0 flex w-14 flex-col items-center justify-between fill-main-300 stroke-main-300 p-4 text-main-300 sm:relative sm:bottom-auto sm:left-auto sm:top-auto sm:w-full sm:flex-row">
      <NavButton link="/" className="sm:hidden">
        <span className="text-2xl font-bold">RB</span>
      </NavButton>
      <ul className="flex w-full flex-col items-center justify-start gap-8 sm:flex-row sm:justify-evenly">
        <li>
          <NavButton link="/">
            <ProfileIcon className="h-6 w-6 bg-transparent" />
          </NavButton>
        </li>
        <li>
          <NavButton link="/experience">
            <SuitcaseIcon className="h-6 w-6" />
          </NavButton>
        </li>
        <li>
          <NavButton link="/skills">
            <PaintbrushIcon className="h-6 w-6" />
          </NavButton>
        </li>
        <li>
          <NavButton link="/contact">
            <SpeechIcon className="h-6 w-6 fill-inherit stroke-inherit" />
          </NavButton>
        </li>
      </ul>
      <DownloadResume className="sm:hidden">
        <div className="flex h-10 w-10 flex-col items-center justify-center rounded-full bg-primary-500 p-1">
          <DownloadIcon className="h-6 w-6 fill-none stroke-main-50" />
        </div>
      </DownloadResume>
    </nav>
  );
}

function NavButton({
  children,
  className,
  link,
}: {
  children: ReactNode;
  className?: string;
  link: string;
}) {
  const [isCurrent, setIsCurrent] = useState(false);

  const ctx = useContext(LayoutContext);

  useEffect(() => {
    setIsCurrent(location.pathname === link);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <span
      className={twMerge(
        "cursor-pointer fill-main-300 stroke-main-300 text-main-300 hover:fill-main-100 hover:stroke-main-100 hover:text-main-100",
        className,
        isCurrent ? "fill-primary-500 stroke-primary-500 text-primary-500" : ""
      )}
      onClick={(e) => {
        e.preventDefault();
        ctx.setIsOpen(false);
        setTimeout(() => {
          location.href = link;
        }, 300);
      }}
    >
      {children}
    </span>
  );
}
