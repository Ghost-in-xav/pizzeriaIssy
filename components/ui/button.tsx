import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium tracking-wide transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tomato focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
  {
    variants: {
      variant: {
        default:
          "bg-tomato text-cream-soft hover:bg-tomato-deep shadow-[0_8px_24px_-12px_rgba(179,58,58,0.6)] hover:shadow-[0_12px_32px_-12px_rgba(179,58,58,0.8)]",
        gold:
          "bg-gold text-charcoal hover:bg-gold-soft shadow-[0_8px_24px_-12px_rgba(201,162,75,0.5)]",
        outline:
          "border border-charcoal/20 bg-transparent text-charcoal hover:bg-charcoal hover:text-cream-soft",
        ghost: "text-charcoal hover:bg-charcoal/5",
        whatsapp:
          "bg-[#25D366] text-white hover:bg-[#1ebe57] shadow-[0_8px_24px_-12px_rgba(37,211,102,0.6)]",
      },
      size: {
        default: "h-11 px-6 py-2.5",
        sm: "h-9 px-4 text-xs",
        lg: "h-14 px-9 text-base",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
