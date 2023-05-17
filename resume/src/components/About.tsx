import Link from "next/link";

export default function About() {
  return (
    <div className="column items-center sm:items-end gap-4">
      <h1 className="sectionTitle w-full text-start">About Me</h1>
      <p className="text-xl">
        I&apos;m a work horse from Chandler, Arizona. I hold a bachelor&apos;s
        of science in computer science from{" "}
        <Link href="https://www.stevens.edu/" target="_blank">
          <span className="underline cursor-pointer">
            Stevens Institute of Technology
          </span>
        </Link>
        .
      </p>
      <p className="text-xl">
        I am looking to work with excellence in an environment where taking
        risks is encouraged and tackling the impossible is an every day
        challenge; where progress is valued more than being right.
      </p>
      <p className="text-xl font-bold">
        At the end of the day I will either be working with you or against you.
      </p>

      <Link href="/assets/Ryan_Byrne_Resume.pdf" download={true}>
        <button className="bg-white text-black font-bold my-8">Resume</button>
      </Link>
    </div>
  );
}
