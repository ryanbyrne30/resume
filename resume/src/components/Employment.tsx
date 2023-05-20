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
        <a href={href} target="_blank" rel="noreferrer">
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
          date="October 2023 - Current"
          role="Full Stack Engineer"
          company="Swift Events"
          description="Took an unpolished concept for an event management application and brought it to production while minimizing development costs and maximizing profit margin"
          href="https://www.swiftevents.app"
        />
        <Job
          date="June 2021 - October 2022"
          role="Cyber Architect"
          company="Northrop Grumman"
          description="Revolutionized company operations by working with my team to architect and build a DOD-compliant software factory which will be foundational in future software development processes"
        />
        <Job
          date="June 2020 - June 2021"
          role="Full Stack Developer"
          company="Northrop Grumman"
          description="Worked with my team to develop a solution for tracking career trajectories of internal employees to display patterns of career development within the organization"
        />
        <Job
          date="August 2020 - May 2021"
          role="Full Stack Developer"
          company="Fundfish"
          description="Collaborated with a small team to bring a startup idea from concept to MVP where it was presented to venture capitalists for future funding"
        />
      </ul>
    </div>
  );
}
