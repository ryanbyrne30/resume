import Link from "next/link";
import { AiOutlineLink } from "react-icons/ai";

export default function Experience() {
  return (
    <div className="w-full relative">
      <h1 className="text-4xl font-bold my-2 opacity-50">Experience</h1>
      <ul>
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
            <li className="tag"></li>
            <li className="tag"></li>
            <li className="tag"></li>
            <li className="tag"></li>
            <li className="tag"></li>
          </ul>
        </li>
        <li className="column group">
          <h3 className="text-xl font-bold">Cyber Architect II</h3>
          <label>Northrop Grumman</label>
          <span className="text-sm italic opacity-80">June 2021 - Current</span>
          <p className="py-4">
            As a cyber architect I have gotten the opportunity to work with many
            teams to develop secure and reliable infrastructure to enable all
            development teams to work efficiently. This includes collaborating
            with systems, security, network and software engineers, building and
            integrating custom and scalable security tools across multiple
            domains, and automating report generation to present to leadership.
          </p>
          <ul className="flex flex-row items-center flex-wrap">
            <li className="tag">Python</li>
            <li className="tag">GitLab</li>
            <li className="tag">Pipelines</li>
            <li className="tag">Infrastructure</li>
            <li className="tag">Cybersecurity</li>
            <li className="tag">Automation</li>
          </ul>
        </li>
        <li className="column group">
          <h3 className="text-xl font-bold">Backend Developer</h3>
          <label>Northrop Grumman</label>
          <span className="text-sm italic opacity-80">
            June 2020 - June 2021
          </span>
          <p className="py-4">
            I worked with my team to develop a web application that would be
            used internally by Northrop Grumman to model the career paths of
            current and former employees. My primary responsibilities were
            developing the backend API and creating and maintaining the database
            in which the application was built upon. I would also frequently
            help with the creation of the frontend web pages.
          </p>
          <ul className="flex flex-row items-center flex-wrap">
            <li className="tag">.Net Core</li>
            <li className="tag">C#</li>
            <li className="tag">MS SQL</li>
            <li className="tag">Razor Pages</li>
            <li className="tag">GitLab</li>
          </ul>
        </li>
        <li className="column group">
          <h3 className="text-xl font-bold">Full Stack Developer</h3>
          <label>Fundfish</label>
          <span className="text-sm italic opacity-80">
            August 2020 - May 2021
          </span>
          <p className="py-4">
            As a new startup, my team and I were tasked to turn a concept into a
            fully functioning MVP to be shown off to venture capitalists. I
            worked across the stack using tools like Figma and Adobe XD to
            collaborate with my team on designing the application. Other tools
            such as Adobe Illustrator and Adobe Photoshop were used to generate
            digital assets for the application. We developed with the MERN stack
            and deployed to AWS and integrated with cloud technologies such as
            Google Firebase and AWS DynamoDB.
          </p>
          <ul className="flex flex-row items-center flex-wrap">
            <li className="tag">MongoDB</li>
            <li className="tag">Express</li>
            <li className="tag">React</li>
            <li className="tag">NodeJS</li>
            <li className="tag">AWS</li>
            <li className="tag">Firebase</li>
            <li className="tag">Figma</li>
            <li className="tag">Adobe Suite</li>
            <li className="tag">JavaScript</li>
            <li className="tag">GitHub</li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
