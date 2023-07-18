import { Layout } from "@/layouts/Layout";

export default function ExperiencePage() {
  return (
    <Layout>
      <div className="flex flex-col gap-8">
        <header>
          <h1>experience</h1>
          <p className="subtitle">
            B.S. Computer Science <span className="subtitle-divider">/</span>{" "}
            Minor Cybersecurity
          </p>
        </header>
        <p>
          Full stack engineer with over 4 years of experience in designing,
          creating and debugging user interfaces, APIs and databases. A
          self-starter who is always looking for more efficient and secure
          solutions.
        </p>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <article className="flex flex-col gap-8">
            <h2>experience</h2>
            <section className="flex flex-col gap-4">
              <header>
                <p className="font-bold text-primary-500">Oct 2022 - Current</p>
                <a href="https://www.swiftevents.app" target="_blank">
                  <h3>Swift Events</h3>
                </a>
                <p className="muted">Full Stack Engineer</p>
              </header>
              <p>
                Developed a SaaS event management platform as a response to
                untapped demand in a niche organization market
              </p>
            </section>
            <section className="flex flex-col gap-4">
              <header>
                <p className="font-bold text-primary-500">Jun 2022</p>
                <a
                  href="https://www.sportsbusinessventures.com/"
                  target="_blank"
                >
                  <h3>Sports Business Ventures</h3>
                </a>
                <p className="muted">Software Engineer</p>
              </header>
              <p>
                Created a web scraper to automate client&apos;s process of
                collecting job postings and converting to a PDF
              </p>
            </section>
            <section className="flex flex-col gap-4">
              <header>
                <p className="font-bold text-primary-500">
                  Jun 2021 - Oct 2022
                </p>
                <a href="https://www.northropgrumman.com/" target="_blank">
                  <h3>Northrop Grumman</h3>
                </a>
                <p className="muted">Cyber Architect</p>
              </header>
              <p>
                Revolutionized company operations by working with my team to
                design and build a DOD-compliant software factory to serve
                multiple programs
              </p>
            </section>
            <section className="flex flex-col gap-4">
              <header>
                <p className="font-bold text-primary-500">
                  Jun 2020 - Jun 2021
                </p>
                <a href="https://www.northropgrumman.com/" target="_blank">
                  <h3>Northrop Grumman</h3>
                </a>
                <p className="muted">Full Stack Engineer</p>
              </header>
              <p>
                Worked with my team to develop a full-stack .NET Core
                application that tracked the career trajectories of internal
                employees
              </p>
            </section>

            <section className="flex flex-col gap-4">
              <header>
                <p className="font-bold text-primary-500">
                  Aug 2020 - May 2021
                </p>
                <h3>FundFish</h3>
                <p className="muted">Full Stack Engineer</p>
              </header>
              <p>
                Brought client&apos;s startup idea (NDA) from ideation phase to
                MVP where it was presented to VCs for funding
              </p>
            </section>
          </article>
          <article className="flex flex-col gap-8">
            <h2>education</h2>
            <section className="flex flex-col gap-4">
              <header>
                <p className="font-bold text-primary-500">2017 - 2021</p>
                <a href="https://www.stevens.edu/" target="_blank">
                  <h3>Stevens Institute of Technology</h3>
                </a>
                <p className="muted">Hoboken, NJ</p>
              </header>
              <p>
                Bachelors of Science in Computer Science with a minor in
                cybersecurity
              </p>
            </section>
          </article>
        </div>
      </div>
    </Layout>
  );
}
