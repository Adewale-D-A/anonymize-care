"use client";

import CheckIcon from "@/static/icons/check";
import CopyIcon from "@/static/icons/copy";
import { useState } from "react";

export default function CopyContent({ content }: { content: string }) {
  const [isCopied, setIsCopied] = useState(false);
  return (
    <button
      onClick={() => {
        navigator?.clipboard?.writeText(content);
        setIsCopied(true);
        // toast({
        //   title: "Copied!",
        //   duration: 3000,
        // });
      }}
      title="copy"
      className=" hover:scale-125 transition-all cursor-pointer"
    >
      {!isCopied && <CopyIcon className=" size-7 text-primary" />}
      {isCopied && <CheckIcon className=" size-7 text-primary" />}
    </button>
  );
}
