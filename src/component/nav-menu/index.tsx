import Link from "next/link";
import Button from "../button";
import { Logo } from "../logo";
import CustomLink from "../button/link";

export default function NavMenu() {
  return (
    <nav className="w-full flex justify-center">
      <div className=" flex w-[90%] justify-between items-center gap-4 p-3 px-10 fixed top-3 transition-all dark:bg-dark-ash-500 bg-white rounded-full shadow-sm shadow-primary overflow-x-clip nav-into">
        <Logo />
        <div className="w-full hidden text-sm lg:flex max-w-lg items-center justify-between font-semibold text-dark-ash-900 dark:text-white">
          {[
            {
              id: "1",
              label: "Urgent Care",
              url: "#",
            },
            {
              id: "2",
              label: "Mental Health",
              url: "#",
            },
            {
              id: "3",
              label: "Individual",
              url: "#",
            },
          ].map((item) => (
            <Link key={item?.id} href={item?.url}>
              {item?.label}
            </Link>
          ))}
        </div>
        <div className=" flex items-center gap-5">
          <CustomLink
            variant={"transparent"}
            href="/waitlist"
            className=" hidden lg:block"
          >
            Sign in
          </CustomLink>
          <CustomLink href="#">Let&apos;s Talk</CustomLink>
        </div>
      </div>
    </nav>
  );
}
