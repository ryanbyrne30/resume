import observerAppear from "@/utils/observer";
import { useEffect } from "react";

function Job({
  date,
  role,
  company,
  description,
  href,
}: {
  date: string;
  role: string;
  company: string;
  description: string;
  href?: string;
}) {
  return (
    <li className="hide column group">
      <label className="date">{date}</label>
      <h3 className="text-xl font-bold">{role}</h3>
      {href !== undefined ? (
        <a href={href} target="_blank">
          <label className="cursor-pointer underline">{company}</label>
        </a>
      ) : (
        <label>{company}</label>
      )}
      <p className="font-thin">{description}</p>
    </li>
  );
}

export default function Employment() {
  useEffect(() => {
    observerAppear();
  }, []);

  return (
    <div className="w-full relative">
      <h1 className="sectionTitle">Work</h1>
      <ul>
        <Job
          date="January 2023 - Current"
          role="Full Stack Engineer"
          company="Swift Events"
          description="Brought event registration platform for small organizations from concept to production (beta) serverless application"
          href="https://www.swiftevents.app"
        />
        {/* <Job
          date="December 2023 - February 2023"
          role="Full Stack Engineer"
          company="Empower On LLC"
          description="Designed and built a full stack serverless web application to allow teams to pay and register for Empower On events."
          href="https://empoweron.app"
        /> */}
        <Job
          date="June 2021 - October 2022"
          role="Cyber Architect II"
          company="Northrop Grumman"
          description="Architecting, developing and deploying custom, scalable
            cybersecurity tools to maintain infrastructure and satisfy
            requirements."
        />
        <Job
          date="June 2020 - June 2021"
          role="Full Stack Developer"
          company="Northrop Grumman"
          description="Developed full stack .Net Core web application and worked with other
            teams to integrate our product into their workflow."
        />
        <Job
          date="August 2020 - May 2021"
          role="Full Stack Developer"
          company="Fundfish"
          description="Brought a concept for startup from design all the way to fully
            functional MVP where it was presented to venture capitalists."
        />
      </ul>
    </div>
  );
}
