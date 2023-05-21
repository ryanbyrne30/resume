import Link from "next/link";

export default function About() {
  return (
    <div className="column items-center sm:items-end gap-4">
      <h1 className="sectionTitle w-full text-start">About Me</h1>
      <p className="text-xl">
        As someone who has worked at every point in the software development
        cycle, I will adapt to any environment and offer creative solutions from
        a wide breadth of knowledge.
      </p>
      <p className="text-xl">
        I am looking to work with excellence in an environment where taking
        risks is encouraged and tackling the impossible is an every day
        challenge; where progress is valued more than being right.
      </p>

      <Link href="/assets/Ryan_Byrne_Resume.pdf" download={true}>
        <button className="bg-white text-black font-bold my-8">Resume</button>
      </Link>
    </div>
  );
}
