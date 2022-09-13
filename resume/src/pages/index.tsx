import Hero from "@/components/Hero";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div>
      <Hero />
      <div className="bg-primary h-screen text-white">hello</div>
    </div>
  );
};

export default Home;
