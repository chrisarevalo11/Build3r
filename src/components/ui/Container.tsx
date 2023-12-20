import { cn } from "@/utils";
import { DetailedHTMLProps } from "react";

type TContainer = DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {};

export default function Container(props: TContainer): JSX.Element {
  const { className, children, ...rest } = props;

  return (
    <div
      className={cn("w-full p-2 max-w-[1200px] mx-auto", className)}
      {...rest}
    >
      {children}
    </div>
  );
}
