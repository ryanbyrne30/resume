import { PrimaryButton } from "@/components/buttons/PrimaryButton";
import { DownloadResume } from "@/components/downloadResume";
import { Layout } from "@/layouts/Layout";

export default function Home() {
  return (
    <Layout>
      <div className="flex flex-col gap-8">
        <header>
          <h1>about me</h1>
          <p className="subtitle">
            Phoenix, AZ <span className="subtitle-divider">/</span> Swift Events
          </p>
        </header>
        <p>
          Pragmatic and hungry full stack engineer with a passion for
          continuously pushing the limits of what is possible. Developed
          automated cybersecurity tools which reduced security and compliance
          scanning time from days/weeks down to minutes resulting in significant
          cost savings for the company. Received the Bravo Award for Operational
          Efficiency from Northrop Grumman.
        </p>
        <DownloadResume>
          <PrimaryButton>Download Resume</PrimaryButton>
        </DownloadResume>
      </div>
    </Layout>
  );
}
