import { type ReactNode } from "react";

export function DownloadResume({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <a
      href="/assets/Ryan_Byrne-Resume.pdf"
      download
      aria-label="Download resume"
      className={className}
    >
      {children}
    </a>
  );
}
