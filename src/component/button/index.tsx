"use client";
import LoadingIcon from "@/static/icons/loading";
import React, { ButtonHTMLAttributes } from "react";
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  isLoading?: boolean;
}

export default function Button({
  children,
  isLoading,
  disabled,
  className,
  ...rest
}: ButtonProps) {
  return (
    <button
      {...rest}
      disabled={isLoading || disabled}
      className={`${
        className ? className : ""
      } inline-flex items-center justify-center font-semibold whitespace-nowrap rounded-md text-sm  transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 cursor-pointer bg-primary text-black shadow  w-full text-center border-2 border-primary-dull hover:scale-105 px-2 py-3`}
    >
      {" "}
      {isLoading ? <LoadingIcon className=" h-4 w-4 animate-spin" /> : children}
    </button>
  );
}
