import observerAppear from "@/utils/observer";
import { ReactNode, useEffect } from "react";

function SkillBlock({ title, skills }: { title: string; skills: string[] }) {
  return (
    <div className="hide group">
      <h3 className="text-xl font-bold">{title}</h3>
      <ul className="text-sm font-thin">
        {skills.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ul>
    </div>
  );
}

export default function Skills() {
  useEffect(() => {
    observerAppear();
  }, []);

  return (
    <div>
      <h1 className="sectionTitle">Skills</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2">
        <SkillBlock
          title="Design & Create"
          skills={[
            "Figma",
            "Adobe XD",
            "Adobe Illustrator",
            "Adobe Photoshop",
            "Adobe Premiere",
            "Adobe Lightroom",
          ]}
        />
        <SkillBlock
          title="Frontend"
          skills={["React", "TypeScript", "HTML5", "CSS", "Tailwind CSS"]}
        />
        <SkillBlock
          title="Backend"
          skills={[
            "NextJS",
            "NodeJS",
            "Express",
            "REST, GraphQL, tRPC",
            "AWS",
            "Python",
            "SQL & MongoDB",
          ]}
        />
        <SkillBlock title="Source Code" skills={["GitLab", "GitHub"]} />
      </div>
    </div>
  );
}
