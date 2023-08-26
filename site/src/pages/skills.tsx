import { Layout } from "@/layouts/Layout";

export default function SkillsPage() {
  return (
    <Layout>
      <div className="flex flex-col gap-8">
        <header>
          <h1>Skills</h1>
        </header>
        <article className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <section className="flex flex-col gap-2">
            <h2>Intangible</h2>
            <ul>
              <li>Work horse</li>
              <li>Innovator</li>
              <li>Observant</li>
              <li>Creative</li>
              <li>Great communicator, better listener</li>
            </ul>
          </section>
          <section className="flex flex-col gap-2">
            <h2>Frontend</h2>
            <ul>
              <li>ReactJS</li>
              <li>Svelte</li>
              <li>AstroJS</li>
              <li>JavaScript / TypeScript</li>
              <li>HTML / CSS</li>
              <li>TailwindCSS</li>
              <li>Razor Pages</li>
            </ul>
          </section>
          <section className="flex flex-col gap-2">
            <h2>Backend</h2>
            <ul>
              <li>NodeJS / Express</li>
              <li>NextJS</li>
              <li>SvelteKit</li>
              <li>REST, GraphQL</li>
              <li>JavaScript / TypeScript</li>
              <li>Python</li>
              <li>C#</li>
              <li>C / C++</li>
            </ul>
          </section>
          <section className="flex flex-col gap-2">
            <h2>Infrastructure</h2>
            <ul>
              <li>Ansible</li>
              <li>Terraform</li>
              <li>Docker</li>
              <li>Kubernetes</li>
              <li>AWS</li>
              <li>CICD - GitHub, GitLab</li>
            </ul>
          </section>
          <section className="flex flex-col gap-2">
            <h2>Database</h2>
            <ul>
              <li>SQL - PostgreSQL, MySQL, ...</li>
              <li>MongoDB</li>
            </ul>
          </section>
          <section className="flex flex-col gap-2">
            <h2>Design</h2>
            <ul>
              <li>Adobe Creative Cloud Suite</li>
              <li>Figma</li>
            </ul>
          </section>
        </article>
      </div>
    </Layout>
  );
}
