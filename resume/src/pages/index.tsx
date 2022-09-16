import About from "@/components/About";
import ContactForm from "@/components/ContactForm";
import Hero from "@/components/Hero";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <div id="about"></div>

      <div
        id="about"
        className="w-full column center sm:p-8 bg-primary text-white relative p-2"
      >
        <span
          className="origin-top-left absolute h-full bg-red-500 -top-1/4 -rotate-3 -z-10 bg-inherit"
          style={{ width: "150%", left: "-25%" }}
        />
        <About />
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
