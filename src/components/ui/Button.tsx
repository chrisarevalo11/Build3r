import { DetailedHTMLProps } from "react";
import { cn } from "@/utils";

type TButton = DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {};

export function Button(props: TButton): JSX.Element {
  const { children, className, ...rest } = props;

  return (
    <button className={cn("btn btn-primary", className)} {...rest}>
      {children}
    </button>
  );
}
