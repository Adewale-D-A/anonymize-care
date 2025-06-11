"use client";
import { cn } from "@/utils/cn";
import React, { AnchorHTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import Link, { LinkProps } from "next/link";
const linkVariants = cva(
  "inline-flex items-center justify-center font-semibold whitespace-nowrap rounded-md text-sm  transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 cursor-pointer bg-primary text-black shadow  w-full text-center border-2 border-primary-dull hover:scale-105 px-2 py-3",
  {
    variants: {
      variant: {
        default:
          "bg-secondary h-fit text-white border rounded-full w-fit p-3 lg:p-4 px-10 lg:px-18",
        transparent:
          "bg-transparent h-fit text-secondary border border-secondary rounded-full w-fit p-4 px-14",
        urgent: "bg-red-500 border-0 text-white hover:bg-red-500/80",
        file: "bg-white text-gray-900 border border-[#E5E5E7] border-l-0 py-[14px]  md:py-[14px] ",
        unstyled: "text-gray-900 dark:text-dark-ash-900",
      },
      size: {
        default: "text-sm",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
        file: "px-4 lg:px-6",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);
interface LinkProp
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof linkVariants> {
  href: string; // required
  as?: string;
  replace?: boolean;
  scroll?: boolean;
  shallow?: boolean;
  prefetch?: boolean;
  locale?: string | false;
  passHref?: boolean;
  legacyBehavior?: boolean;
}

export default function CustomLink({
  children,
  variant,
  size,
  className,
  ...rest
}: LinkProp) {
  return (
    <Link {...rest} className={cn(linkVariants({ variant, size, className }))}>
      {children}
    </Link>
  );
}
