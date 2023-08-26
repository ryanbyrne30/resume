import { DownloadResume } from "./downloadResume";
import { GitHubIcon, LinkedInIcon } from "./icons";
import { DownloadIcon } from "./icons/DownloadIcon";

export function Socials({ hideDownload }: { hideDownload?: boolean }) {
  return (
    <ul className="flex flex-row flex-wrap items-center justify-center gap-4">
      <a
        href="https://github.com/ryanbyrne30"
        target="_blank"
        className="flex w-fit flex-row items-center gap-1 fill-white stroke-white hover:fill-main-300 hover:stroke-main-300"
      >
        <GitHubIcon className="h-6 w-6" />
      </a>
      <a
        href="https://www.linkedin.com/in/ryan-byrne-3878b5196/"
        target="_blank"
        className="flex w-fit flex-row items-center gap-1 fill-white stroke-white hover:fill-main-300 hover:stroke-main-300"
      >
        <LinkedInIcon className="h-6 w-6" />
      </a>
      {!hideDownload && (
        <DownloadResume>
          <DownloadIcon className="h-8 w-8 rounded-full border border-transparent bg-primary-500 fill-primary-500 stroke-white p-1 transition-colors hover:border-primary-500 hover:bg-transparent hover:fill-transparent hover:stroke-primary-500 hover:text-primary-500" />
        </DownloadResume>
      )}
    </ul>
  );
}
