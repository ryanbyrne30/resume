export default function Employment() {
  return (
    <div className="w-full relative">
      <h1 className="sectionTitle">Employment</h1>
      <ul>
        <li className="column group">
          <label className="date">June 2021 - Current</label>
          <h3 className="text-xl font-bold">Cyber Architect II</h3>
          <label>Northrop Grumman</label>
          <p className="font-thin">
            Architecting, developing and deploying custom, scalable
            cybersecurity tools to maintain infrastructure and satisfy
            requirements.
          </p>
        </li>
        <li className="column group">
          <label className="date">June 2020 - June 2021</label>
          <h3 className="text-xl font-bold">Full Stack Developer</h3>
          <label>Northrop Grumman</label>
          <p className="font-thin">
            Developed full stack .Net Core web application and worked with other
            teams to integrate our product into their workflow.
          </p>
        </li>
        <li className="column group">
          <label className="date">August 2020 - May 2021</label>
          <h3 className="text-xl font-bold">Full Stack Developer</h3>
          <label>Fundfish</label>
          <p className="font-thin">
            Brought a concept for startup from design all the way to fully
            functional MVP where it was presented to venture capitalists.
          </p>
        </li>
      </ul>
    </div>
  );
}
