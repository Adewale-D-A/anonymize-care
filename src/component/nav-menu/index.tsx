import { Logo } from "../logo";
import CustomLink from "../button/link";
import NavItems from "./nav-items";

export default function NavMenu() {
  return (
    <nav className="w-full flex justify-center ">
      <div className=" flex w-[90%] justify-between items-center gap-4 p-3 px-10 fixed top-3 z-50 transition-all dark:bg-dark-ash-500 bg-white rounded-full shadow-sm shadow-primary overflow-x-clip nav-into">
        <Logo />
        <div className="w-full hidden text-sm lg:flex max-w-lg items-center justify-between font-semibold text-dark-ash-900 dark:text-white">
          <NavItems />
        </div>
        <div className=" flex items-center gap-5">
          <CustomLink
            variant={"transparent"}
            href="/waitlist"
            className=" hidden lg:block"
          >
            Sign in
          </CustomLink>
          <CustomLink href="#contact">Let&apos;s Talk</CustomLink>
        </div>
      </div>
    </nav>
  );
}
