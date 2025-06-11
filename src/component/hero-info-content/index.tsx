import Image from "next/image";
import Button from "../button";
import Link from "next/link";

export default function HeroInfoContent() {
  return (
    <div className=" dark:bg-dark-ash-500 bg-white text-dark-ash-900 transition-all dark:text-white p-6 py-10 rounded-2xl w-full max-w-xl flex flex-col gap-5 text-center">
      <h3 className=" font-bold text-secondary text-2xl lg:text-3xl">
        Health Should Always Be Within Reach
      </h3>
      <p className=" text-left">
        Figma ipsum component variant main layer. Plugin device overflow comment
        move link blur. Device background link duplicate italic align ipsum
        distribute figma. Component align vector shadow outline. Font distribute
        rectangle stroke polygon pixel font layer layout.
      </p>

      <div className=" flex items-center gap-5">
        <Link
          href={"/waitlist"}
          className=" hover:scale-125 transition-all flex-1"
        >
          <Image
            src={"/images/google-play-badge.png"}
            alt="google-store"
            height={100}
            width={300}
            className=" w-full h-auto"
          />
        </Link>
        <Link
          href={"/waitlist"}
          className=" hover:scale-125 transition-all flex-1"
        >
          <Image
            src={"/images/app-store-badge.png"}
            alt="google-store"
            height={100}
            width={300}
            className=" w-full h-auto"
          />
        </Link>
      </div>
    </div>
  );
}
