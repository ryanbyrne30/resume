import ContactForm from "@/components/ContactForm";
import Hero from "@/components/Hero";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div>
      <Hero />
      <div id="about"></div>

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
