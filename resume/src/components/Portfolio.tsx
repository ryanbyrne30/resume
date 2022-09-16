import Link from "next/link";
import { AiOutlineLink } from "react-icons/ai";

export default function Portfolio() {
  return (
    <div className="w-full">
      <h1 className="sectionTitle">Portfolio</h1>
      <ul>
        <li className="column group">
          <div className="flex flex-row items-center w-fit">
            <h3 className="text-xl font-bold">My Resume Website</h3>
          </div>
          <p className="py-4">
            This website was built using the T3 stack (TypeScript, Tailwind CSS,
            and tRPC).
          </p>
          <ul className="flex flex-row items-center flex-wrap">
            <li className="tag">NextJS</li>
            <li className="tag">React</li>
            <li className="tag">Lambda Functions</li>
            <li className="tag">Serverless</li>
            <li className="tag">MySQL</li>
            <li className="tag">AWS S3</li>
            <li className="tag">Tailwind CSS</li>
            <li className="tag">TypeScript</li>
            <li className="tag">tRPC</li>
            <li className="tag">GitHub</li>
            <li className="tag"></li>
            <li className="tag"></li>
            <li className="tag"></li>
          </ul>
        </li>
        <li className="column group">
          <Link
            href="https://volevents.app"
            target="_blank"
            referrerPolicy="no-referrer"
          >
            <div className="cursor-pointer flex flex-row items-center w-fit">
              <h3 className="text-xl font-bold">Volevents</h3>
              <AiOutlineLink className="text-xl m-1" />
            </div>
          </Link>
          <p className="py-4">
            Volevents is a project I am working on to join together and unify
            the volleyball community in the Phoenix area. This web app is being
            built using modern technologies in a serverless infrastructure.
          </p>
          <ul className="flex flex-row items-center flex-wrap">
            <li className="tag">NextJS</li>
            <li className="tag">React</li>
            <li className="tag">Lambda Functions</li>
            <li className="tag">Serverless</li>
            <li className="tag">MySQL</li>
            <li className="tag">AWS S3</li>
            <li className="tag">Tailwind CSS</li>
            <li className="tag">TypeScript</li>
            <li className="tag">tRPC</li>
            <li className="tag">Twilio</li>
            <li className="tag">GitHub</li>
            <li className="tag"></li>
            <li className="tag"></li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
