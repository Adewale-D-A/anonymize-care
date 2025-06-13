"use client";

import { Logo } from "../logo";
import CustomLink from "../button/link";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/utils/cn";

export default function NavMenu() {
  const pathname = usePathname();
  return (
    <nav className="w-full blurry flex justify-center sticky webkit-sticky top-0 left-0 z-50 transition-all shadow-sm shadow-primary overflow-x-clip nav-into">
      <div className="flex w-full max-w-screen-xl justify-between items-center gap-4 px-3 py-2">
        <Logo />
        <div className="w-full hidden text-sm lg:flex max-w-lg items-center justify-between font-semibold text-dark-ash-900 dark:text-white">
          {[
            {
              id: "1",
              label: "Urgent Care",
              url: "/urgent-care",
            },
            {
              id: "2",
              label: "Mental Health",
              url: "/mental-health",
            },
            {
              id: "3",
              label: "Sexual & Reproductive Health",
              url: "/sexual-and-reproductive-health",
            },
          ].map((item) => (
            <Link
              href={item?.url}
              key={item?.id}
              className={cn(
                " hover:text-primary transition-all",
                pathname.includes(item?.url) && "text-primary"
              )}
            >
              {item?.label}
            </Link>
          ))}
        </div>
        <div className=" flex items-center gap-5">
          <CustomLink
            variant={"transparent"}
            href="https://www.7thcare.com/"
            target="_blank"
            className=" hidden lg:block"
          >
            For Hospitals
          </CustomLink>
          <CustomLink href="/#contact">Talk To Us</CustomLink>
        </div>
      </div>
    </nav>
  );
}
