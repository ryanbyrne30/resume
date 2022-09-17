import Link from "next/link";

export default function About() {
  return (
    <div className="column items-center sm:items-end">
      <h1 className="sectionTitle w-full text-start">About Me</h1>
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
      <Link href="/assets/Ryan_Byrne_Resume.pdf" download={true}>
        <button className="bg-white text-black font-bold my-8">Resume</button>
      </Link>
    </div>
  );
}
