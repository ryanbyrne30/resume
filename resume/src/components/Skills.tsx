export default function Skills() {
  return (
    <div>
      <h1 className="sectionTitle">Skills</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 ">
        <div className="group">
          <h3 className="text-xl font-bold">Design & Create</h3>
          <ul className="text-sm font-thin">
            <li>Figma</li>
            <li>Adobe XD</li>
            <li>Adobe Illustrator</li>
            <li>Adobe Photoshop</li>
            <li>Adobe Lightroom</li>
            <li>Adobe Premiere</li>
          </ul>
        </div>
        <div className="group">
          <h3 className="text-xl font-bold">Frontend</h3>
          <ul className="text-sm font-thin">
            <li>React</li>
            <li>TypeScript</li>
            <li>HTML5</li>
            <li>CSS</li>
            <li>Tailwind CSS</li>
          </ul>
        </div>
        <div className="group">
          <h3 className="text-xl font-bold">Backend</h3>
          <ul className="text-sm font-thin">
            <li>NextJS</li>
            <li>NodeJS</li>
            <li>Express</li>
            <li>REST, GraphQL, tRPC</li>
            <li>AWS</li>
            <li>Python</li>
            <li>SQL & MongoDB</li>
          </ul>
        </div>
        <div className="group">
          <h3 className="text-xl font-bold">Source Code</h3>
          <ul className="text-sm font-thin">
            <li>GitLab</li>
            <li>GitHub</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
