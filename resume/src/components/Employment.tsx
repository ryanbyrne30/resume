import useAppear from "@/hooks/useAppear";
import observerAppear from "@/utils/observer";
import { useEffect, useRef } from "react";

function Job({
  date,
  role,
  company,
  description,
}: {
  date: string;
  role: string;
  company: string;
  description: string;
}) {
  return (
    <li className="hide column group">
      <label className="date">{date}</label>
      <h3 className="text-xl font-bold">{role}</h3>
      <label>{company}</label>
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
      <h1 className="sectionTitle">Employment</h1>
      <ul>
        <Job
          date="June 2021 - Current"
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
