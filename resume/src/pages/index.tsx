import About from "@/components/About";
import ContactForm from "@/components/ContactForm";
import Employment from "@/components/Employment";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Skills from "@/components/Skills";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="overflow-x-hidden">
      <Hero />

      <div
        id="about"
        className="relative p-2 column center w-full bg-transparent text-white mb-8"
      >
        <span
          className="w-full h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 origin-center -rotate-2 bg-primary -z-10"
          style={{ height: "150%", width: "150%" }}
        />
        <About />
      </div>

      <div id="about">
        <Skills />
      </div>

      <div id="employment" className="w-full column center relative p-2">
        <Employment />
      </div>

      <div id="portfolio">
        <Portfolio />
      </div>

      <div
        id="contact"
        className="text-white w-full column center p-2 sm:p-8 bg-primary"
      >
        <div className="w-full max-w-xl bg-white text-black p-4 rounded-xl">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Home;
