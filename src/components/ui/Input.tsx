import { DetailedHTMLProps } from "react";
import { cn } from "@/utils";

type TInput = DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {};

export function Input(props: TInput): JSX.Element {
  const { className, ...rest } = props;

  return (
    <input
      className={cn("input input-bordered w-full bg-gray-600", className)}
      {...rest}
    />
  );
}
