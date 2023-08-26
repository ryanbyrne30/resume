import { Experience } from "@/components/experience";
import { Layout } from "@/layouts/Layout";

export default function ExperiencePage() {
  return (
    <Layout>
      <div className="flex flex-col gap-8">
        <header>
          <h1>Experience</h1>
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
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 ">
          <article className="flex flex-col gap-8">
            <h2>Work</h2>
            <Experience
              date="Oct 2022 - Current"
              title="Swift Events"
              link="https://swiftevents.app"
              subtitle="Full Stack Engineer (contract)"
              description="Identified and responded to a niche market demand by developing a SaaS event management platform tailored for small to medium sized organizations resulting in over 60 successful event registrations within the first month after launch"
              stack={[
                "ReactJS",
                "NodeJS",
                "ExpressJS",
                "NextJS",
                "TypeScript",
                "MySQL",
                "AWS",
                "Docker",
                "TailwindCSS",
                "GitHub",
                "Figma",
                "Adobe CC",
              ]}
            />
            <Experience
              date="Jun 2021 - Oct 2022"
              title="Northrop Grumman"
              link="https://www.northropgrumman.com/"
              subtitle="Cyber Architect"
              description="Revolutionized company operations by working with my team to design and build a DOD-compliant software factory to increase development efficiencies"
              stack={[
                "Python",
                "GitLab",
                "Terraform",
                "Ansible",
                "Cybersecurity",
                "DevSecOps",
                "Agile",
                "Kanban",
                "Scrum",
                "Documentation",
              ]}
            />
            <Experience
              date="Jun 2020 - Jun 2021"
              title="Northrop Grumman"
              link="https://www.northropgrumman.com/"
              subtitle="Full Stack Engineer (contract)"
              description="Spearheaded the development efforts in building an internal .Net Core application to track employee career paths and received the Bravo Award for Operational Efficiency"
              stack={[
                ".Net Core",
                "C#",
                "MSQL",
                "Razor Pages",
                "JavaScript",
                "CSS",
                "REST API",
                "Agile",
                "Scrum",
                "Documentation",
              ]}
            />

            <Experience
              date="Aug 2020 - May 2021"
              title="Fundfish"
              subtitle="Full Stack Engineer (contract)"
              description="Brought client's idea for a startup from ideation to full stack MERN MVP web application where it was presented to Venture Capitalists to obtain additional funding."
              stack={[
                "NodeJS",
                "ReactJS",
                "Google Firebase",
                "AWS",
                "TypeScript",
                "Docker",
                "GitHub Workflows",
                "Figma",
                "Adobe CC",
              ]}
            />
          </article>
          <article className="flex flex-col gap-8">
            <h2>Projects</h2>
            <Experience
              date="Sep 2022 - Current"
              title="Website & Digital Marketing"
              link="https://www.empoweron.app"
              subtitle="Freelance, as-needed - Empower On"
              description="Increased client's internet presence by developing a full stack website allowing for posting info about upcoming events and produce eye-catching marketing promotions for social media using Adobe Photoshop."
              stack={[
                "Marketing",
                "Branding",
                "ReactJS",
                "NodeJS",
                "TypeScript",
                "NextJS",
                "TailwindCSS",
                "MySQL",
                "Adobe Photoshop",
                "Figma",
              ]}
            />
            <Experience
              date="Jun 2023"
              title="Jobs In Sports Webscraper"
              link="https://www.sportsbusinessventures.com"
              subtitle="Freelance - Sports Business Ventures"
              description="Consulted with client and developed a web scraper to collect job postings from target websites, convert listings to a PDF, and automatically email to client on a weekly basis."
              stack={[
                "Python",
                "Selenium",
                "Beautiful Soup",
                "GitHub Workflow",
                "Cronjob",
                "Automation",
                "Consulting",
              ]}
            />
            <Experience
              date="Jan 2023"
              title="Curriculum Textbook Finder"
              link="https://github.com/ryanbyrne30/textbook_finder"
              subtitle="Personal"
              description="A webscraper for gathering materials for college curriculums, based on major, in a cost effective way."
              stack={["Python", "Selenium", "Beautiful Soup"]}
            />
            <Experience
              date="July 2022"
              title="Wurdee"
              link="https://www.wurdee.com"
              subtitle="Personal"
              description="Built and integrated a website for displaying random thought provoking quotes and words with Twilio to allow users to interact with the website over SMS."
              stack={[
                "Twilio SMS",
                "ReactJS",
                "NextJS",
                "NodeJS",
                "TypeScript",
                "TailwindCSS",
                "MySQL",
              ]}
            />
            <Experience
              date="February 2018"
              title="Volleyball Scouting Tool"
              link="https://github.com/ryanbyrne30/volleyball-scouting-reporter"
              subtitle="For Stevens Insitute of Technology Men's Volleyball"
              description="Analytics tracker built in Python to generate detailed and data driven, live scouting reports resulting in a massive competitive advantage and leading to the team finishing 2nd and 3rd in NCAA DIII Men's Volleyball."
              stack={[
                "Python",
                "Data ETL",
                "Data Analysis",
                "Statistics",
                "Google APIs",
              ]}
            />
          </article>
          <article className="flex flex-col gap-8">
            <h2>Education</h2>
            <Experience
              date="May 2021"
              title="Stevens Institute of Technology"
              link="https://www.stevens.edu/"
              subtitle="Hoboken, NJ"
              description="Bachelors of Science in Computer Science with a minor in cybersecurity; Dean's List; Varsity Men's Volleyball"
            />
          </article>
        </div>
      </div>
    </Layout>
  );
}
