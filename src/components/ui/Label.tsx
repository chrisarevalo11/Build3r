import { DetailedHTMLProps } from "react";
import { cn } from "@/utils";

type TLabel = DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLLabelElement>,
  HTMLLabelElement
> & {};

export function Label(props: TLabel): JSX.Element {
  const { children, className, ...rest } = props;

  return (
    <label className={cn("form-control", className)} {...rest}>
      {children}
    </label>
  );
}
