import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const typographyVariants = cva("text-foreground", {
  variants: {
    variant: {
      h1: "scroll-m-20 text-5xl/15 font-extrabold ",
      h2: "scroll-m-20 pb-2 text-3xl font-semibold  first:mt-0",
      h3: "scroll-m-20 text-2xl font-semibold ",
      h4: "scroll-m-20 text-xl font-semibold ",
      h5: "scroll-m-20 text-lg font-semibold ",
      h6: "scroll-m-20 text-base font-semibold ",
      body: "leading-7 ",
      blockquote: "mt-6 border-l-2 pl-6 italic",
      lead: "text-xl text-muted-foreground",
      large: "text-lg font-semibold",
      small: "text-sm font-medium leading-none",
      muted: "text-sm text-muted-foreground",
      link: "text-primary underline underline-offset-4",
    },
    weight: {
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
      extrabold: "font-extrabold",
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
    },
    textColor: {
      default: "text-[var(--black)]",
      primary: "text-primary",
      secondary: "text-secondary-foreground",
      muted: "text-muted-foreground",
      accent: "text-accent-foreground",
      destructive: "text-destructive",
      success: "text-green-600 dark:text-green-500",
      warning: "text-yellow-600 dark:text-yellow-500",
      blue: "text-[var(--primary-blue)]",
      red: "text-[var(--primary-red)]",
    },
  },
  defaultVariants: {
    variant: "body",
    weight: "normal",
    align: "left",
    textColor: "default",
  },
});

export interface TypographyProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof typographyVariants> {
  asChild?: boolean;
  as?: React.ElementType;
}

const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  (
    {
      className,
      variant,
      weight,
      align,
      textColor,
      asChild = false,
      as,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : as || getDefaultElement(variant) || "p";

    return (
      <Comp
        ref={ref}
        className={cn(
          typographyVariants({ variant, weight, align, textColor, className }),
        )}
        {...props}
      />
    );
  },
);

Typography.displayName = "Typography";

// Helper function to determine the default HTML element based on the variant
function getDefaultElement(
  variant: string | null | undefined,
): React.ElementType | undefined {
  if (!variant) return undefined;

  // Map variants to HTML elements
  const elementMap: Record<string, React.ElementType> = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    h6: "h6",
    body: "p",
    blockquote: "blockquote",
    lead: "p",
    large: "div",
    small: "small",
    muted: "p",
    link: "a",
  };

  return elementMap[variant];
}

export { Typography, typographyVariants };
