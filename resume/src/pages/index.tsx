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
      <section
        id="about"
        className="relative column center w-full bg-primary text-white mb-20"
        style={{ marginBottom: "10vw" }}
      >
        <span
          className="w-screen h-0 absolute top-0 left-0 -translate-y-full"
          style={{
            borderTop: "5vw solid transparent",
            borderRight: "100vw solid rgb(var(--bg-primary))",
          }}
        />
        <div className="max-w-lg">
          <About />
        </div>
        <span
          className="w-screen h-0 absolute bottom-0 left-0 translate-y-full"
          style={{
            borderBottom: "5vw solid transparent",
            borderRight: "100vw solid rgb(var(--bg-primary))",
          }}
        />
      </section>

      <section id="skills" className="p-10 w-screen column center">
        <div className="w-full max-w-lg">
          <Skills />
        </div>
      </section>

      <section id="employment">
        <div className="w-full max-w-lg">
          <Employment />
        </div>
      </section>

      <section id="contact" className="bg-primary relative mt-20 py-20">
        <span
          className="w-screen h-0 absolute top-0 left-0 -translate-y-full"
          style={{
            borderTop: "5vw solid transparent",
            borderRight: "100vw solid rgb(var(--bg-primary))",
          }}
        />
        <div className="w-full max-w-lg">
          <div className="rounded-xl bg-white w-full p-3">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
