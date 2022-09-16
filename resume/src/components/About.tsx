import Painting from "@/assets/images/Painting.webp";
import Image from "next/image";

export default function About() {
  return (
    <div>
      <h1 className="sectionTitle">About Me</h1>
      <p>
        My current title is cyber architect, but I am a problem solver and an
        artist at heart.
      </p>
      <div className="w-full h-32 relative">
        <Image src={Painting} alt="painting" layout="fill" objectFit="cover" />
      </div>
    </div>
  );
}
