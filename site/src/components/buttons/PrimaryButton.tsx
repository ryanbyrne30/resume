import { twMerge } from "tailwind-merge";

export function PrimaryButton(props: JSX.IntrinsicElements["button"]) {
  const { children, className, ...rest } = props;
  return (
    <button
      {...rest}
      className={twMerge(
        "w-fit rounded-sm border-2 border-primary-500 px-4  py-2 font-bold text-primary-500 transition-colors hover:bg-primary-500 hover:text-main-50",
        className
      )}
    >
      {children}
    </button>
  );
}
