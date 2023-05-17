import About from "@/components/About";
import ContactForm from "@/components/ContactForm";
import Employment from "@/components/Employment";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import type { NextPage } from "next";
import { useEffect } from "react";

const Home: NextPage = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });

    const hiddenElements = document.querySelectorAll(".hide");
    hiddenElements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <div id="hero" className="overflow-x-hidden pt-12">
      <Hero />
      <section
        id="about"
        className="hide relative column center w-full bg-primary text-white mb-20"
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

      <section id="skills" className="hide p-10 w-screen column center">
        <div className="w-full max-w-lg">
          <Skills />
        </div>
      </section>

      <section id="employment" className="hide">
        <div className="w-full max-w-lg">
          <Employment />
        </div>
      </section>

      <section id="contact" className="hide bg-primary relative mt-20 py-20">
        <span
          className="w-screen h-0 absolute top-0 left-0 -translate-y-full"
          style={{
            borderTop: "5vw solid transparent",
            borderRight: "100vw solid rgb(var(--bg-primary))",
          }}
        />
        <div className="w-full max-w-lg">
          <div className="rounded-xl bg-white w-full p-3 sm:p-10">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
