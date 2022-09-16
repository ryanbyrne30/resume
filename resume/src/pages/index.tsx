import ContactForm from "@/components/ContactForm";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <div id="about"></div>

      <div
        id="experience"
        className="w-full column center bg-primary text-white relative p-2"
      >
        <span
          className="absolute top-0 left-0 w-full -translate-y-full"
          style={{
            borderRight: "100vw solid rgb(var(--bg-primary))",
            borderTop: "8vw solid transparent",
          }}
        />
        <Experience />
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
