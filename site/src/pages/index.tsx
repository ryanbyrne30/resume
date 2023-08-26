import { PrimaryButton } from "@/components/buttons/PrimaryButton";
import { DownloadResume } from "@/components/downloadResume";
import { Socials } from "@/components/socials";
import { Layout } from "@/layouts/Layout";

export default function Home() {
  return (
    <Layout>
      <div className="flex flex-col gap-8">
        <header>
          <h1>About Me</h1>
          <p className="subtitle">
            Phoenix, AZ <span className="subtitle-divider">/</span> Swift Events
          </p>
        </header>
        <p>
          Pragmatic and hungry full stack engineer with a passion for
          continuously pushing the limits of what is possible. Proven track
          record of initiating and delivering impactful solutions to complex
          problems in fast paced environments. Received the Bravo Award for
          Operational Efficiency from Northrop Grumman.
        </p>
        <DownloadResume className="flex flex-col items-center sm:items-start">
          <PrimaryButton>Download Resume</PrimaryButton>
        </DownloadResume>
        <div className="sm:hidden">
          <Socials />
        </div>
      </div>
    </Layout>
  );
}
