import { useState } from "react";
import { LinkIcon } from "./icons";

interface Props {
  date: string;
  title: string;
  subtitle: string;
  description: string;
  link?: string;
}

export function Experience({
  date,
  title,
  subtitle,
  description,
  link,
}: Props) {
  const [isFocus, setIsFocus] = useState(false);

  return (
    <section className="flex flex-col gap-4">
      <header>
        <p className="font-bold text-primary-500">{date}</p>
        {link ? (
          <a
            href={link}
            target="_blank"
            className="flex w-fit flex-row items-center gap-1 fill-white stroke-transparent hover:fill-main-300 hover:text-main-300"
          >
            <h3>{title}</h3> <LinkIcon className="h-3 w-3" />
          </a>
        ) : (
          <h3>{title}</h3>
        )}
        <p className="muted">{subtitle}</p>
      </header>
      <p
        onClick={() => setIsFocus(!isFocus)}
        className={`cursor-pointer ${
          isFocus ? "line-clamp-none" : "line-clamp-2"
        }`}
      >
        {description}
      </p>
    </section>
  );
}
