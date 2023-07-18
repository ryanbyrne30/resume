import {
  type ReactNode,
  useEffect,
  useRef,
  useState,
  type MouseEventHandler,
  createContext,
  useContext,
} from "react";
import { type FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { MinusIcon } from "./icons";
import { SquareIcon } from "./icons/SquareIcon";
import { XIcon } from "./icons/XIcon";
import { twMerge } from "tailwind-merge";
import { TerminalIcon } from "./icons/TerminalIcon";

const TerminalContext = createContext<{
  isMin: boolean;
  setIsMin: (isMin: boolean) => void;
  isClosed: boolean;
  setIsClosed: (isClosed: boolean) => void;
  page: ReactNode;
  setPage: (page: ReactNode) => void;
}>({
  isMin: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setIsMin: () => {},
  isClosed: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setIsClosed: () => {},
  page: null,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setPage: () => {},
});

export function TerminalDisplayIcon({
  page,
  setPage,
}: {
  page: ReactNode;
  setPage: (p: ReactNode) => void;
}) {
  const [isMin, setIsMin] = useState(false);
  const [isClosed, setIsClosed] = useState(false);

  function onClick() {
    if (isClosed) {
      setIsMin(false);
      setIsClosed(false);
    } else {
      setIsMin(!isMin);
    }
  }

  return (
    <TerminalContext.Provider
      value={{ isMin, setIsMin, isClosed, setIsClosed, page, setPage }}
    >
      <div
        onClick={onClick}
        className={twMerge(
          "w-fit cursor-pointer rounded-lg border-2 bg-main-100 p-0.5",
          isClosed ? "border-transparent" : "border-primary-500"
        )}
      >
        <TerminalIcon className="h-12 w-16 stroke-white" />
      </div>
      {!isClosed && <Terminal />}
    </TerminalContext.Provider>
  );
}

function Terminal() {
  const ctx = useContext(TerminalContext);
  const terminalRef = useRef<HTMLFormElement>(null);
  const ref = useRef<HTMLDivElement>(null);
  const [output, setOutput] = useState<string[]>([]);
  const [isLarge, setIsLarge] = useState(false);
  const [isGrabbing, setIsGrabbing] = useState(false);
  const { register, handleSubmit, setValue } = useForm({
    defaultValues: {
      input: "",
    },
  });
  const commandMap = new Map<string, () => void>(
    Object.entries({
      ls: () =>
        setOutput(
          output.concat(["$ ls", "about\ncontact\nexperience\nhome\nskills"])
        ),
      "ls -l": () =>
        setOutput(
          output.concat([
            "$ ls -l",
            "-rw-rw-r--  1 user user about\n-rw-rw-r--  1 user user contact\n-rw-rw-r--  1 user user experience\n-rw-rw-r--  1 user user home\n-rw-rw-r--  1 user user skills",
          ])
        ),
      cd: () => setOutput(output.concat(["$ cd"])),
      "cd about": () => (location.href = "/about"),
      "cd contact": () => (location.href = "/contact"),
      "cd experience": () => (location.href = "/experience"),
      "cd home": () => (location.href = "/home"),
      "cd skills": () => (location.href = "/skills"),
      clear: () => {
        setOutput([]);
        setValue("input", "");
      },
    })
  );
  let posX0 = 0;
  let posY0 = 0;
  let posX1 = 0;
  let posY1 = 0;

  const onMouseDown: MouseEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault();
    posX1 = e.clientX;
    posY1 = e.clientY;
    document.onmouseup = onMouseUp;
    document.onmousemove = onMouseDrag;
    setIsGrabbing(true);
  };

  function onMouseDrag(e: MouseEvent) {
    if (!terminalRef.current) return;
    const event = e || window.event;
    e.preventDefault();
    posX0 = posX1 - event.clientX;
    posY0 = posY1 - event.clientY;
    posX1 = event.clientX;
    posY1 = event.clientY;
    terminalRef.current.style.top = `${
      terminalRef.current.offsetTop - posY0
    }px`;
    terminalRef.current.style.left = `${
      terminalRef.current.offsetLeft - posX0
    }px`;
  }

  function onMouseUp() {
    document.onmouseup = null;
    document.onmousemove = null;
    setIsGrabbing(false);
  }

  function onSubmit(data: FieldValues) {
    const parsed = formChecker.parse(data);
    const fn = commandMap.get(parsed.input);
    if (fn !== undefined) {
      fn();
    } else {
      setOutput(
        output.concat([
          `$ ${parsed.input}`,
          `${parsed.input}: command not found`,
        ])
      );
    }
    setValue("input", "");
  }

  useEffect(() => {
    if (ref.current) ref.current.scrollTop = ref.current.scrollHeight;
  }, [output]);

  useEffect(() => {
    if (isLarge && !!terminalRef.current) {
      terminalRef.current.style.top = "50%";
      terminalRef.current.style.left = "50%";
    }
  }, [isLarge]);

  return (
    <form
      ref={terminalRef}
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      onSubmit={handleSubmit(onSubmit)}
      className={twMerge(
        "absolute left-1/2 top-1/2 z-10 h-80 w-full -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-xl bg-black fill-white stroke-white text-white",
        isLarge ? "h-[100dvh] w-[100dvw]" : "max-w-xl",
        ctx.isMin ? "hidden" : ""
      )}
    >
      <div
        onMouseDown={onMouseDown}
        className={twMerge(
          "flex w-full flex-row justify-end bg-main-900 p-2",
          isGrabbing ? "cursor-grabbing" : "cursor-grab"
        )}
      >
        <div className="flex flex-row items-center gap-8">
          <div className="flex flex-row items-center gap-2">
            <TerminalButtonSm onClick={() => ctx.setIsMin(true)}>
              <MinusIcon className="h-3 w-3 translate-y-0.5" />
            </TerminalButtonSm>
            <TerminalButtonSm onClick={() => setIsLarge(!isLarge)}>
              <SquareIcon className="h-3 w-3 fill-none" />
            </TerminalButtonSm>
            <TerminalButtonSm onClick={() => ctx.setIsClosed(true)}>
              <XIcon className="h-3 w-3" />
            </TerminalButtonSm>
          </div>
        </div>
      </div>
      <div
        ref={ref}
        className="scrollbar-hide max-h-[calc(100%-40px)] overflow-y-scroll p-4"
      >
        <ul className="w-full">
          {output.map((o, idx) => (
            <li key={idx} className="w-full">
              <ul>
                {o.split("\n").map((line, i) => (
                  <li key={i}>{line}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        <div>
          <span className="mr-1">$</span>
          <input
            className="w-fit bg-inherit focus:border-none focus:outline-none"
            type="text"
            {...register("input")}
            autoComplete="off"
          />
        </div>
      </div>
    </form>
  );
}

const formChecker = z.object({
  input: z.string().trim(),
});

function TerminalButtonSm({
  children,
  onClick,
}: {
  children: ReactNode;
  onClick?: () => void;
}) {
  return (
    <span
      onClick={onClick}
      className="flex h-6 w-6 cursor-pointer flex-row items-center justify-center rounded-full hover:bg-main-800"
    >
      {children}
    </span>
  );
}
