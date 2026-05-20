import * as React from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        ref={ref}
        className={cn(
          "flex h-12 w-full rounded-lg border border-charcoal/15 bg-cream-soft/60 px-4 py-2 text-base text-charcoal placeholder:text-charcoal/40 transition-colors focus:border-tomato focus:bg-cream-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tomato/20 disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
