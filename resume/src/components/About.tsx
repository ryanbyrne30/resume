import Link from "next/link";
import { useRef } from "react";

export default function About() {
  return (
    <div>
      <h1 className="sectionTitle">About Me</h1>
      <p className="text-xl py-4">
        I&apos;m a full stack developer from Chandler, Arizona. I hold a
        bachelor&apos;s of science in computer science from{" "}
        <Link href="https://www.stevens.edu/" target="_blank">
          <span className="underline cursor-pointer">
            Stevens Institute of Technology
          </span>
        </Link>
        .
      </p>
      <p className="font-thin">
        Worked with project teams to create secure and user friendly
        applications. Met and presented products to leadership and clients to
        ensure expected quality and requirements have been met.
      </p>
    </div>
  );
}
