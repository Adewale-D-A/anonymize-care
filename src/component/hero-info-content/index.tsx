import Image from "next/image";
import Button from "../button";
import Link from "next/link";
import StoreBadges from "../store";

export default function HeroInfoContent() {
  return (
    <div className=" dark:bg-dark-ash-500 bg-white text-dark-ash-900 transition-all dark:text-white p-6 py-10 rounded-2xl w-full max-w-xl flex flex-col gap-5 text-center">
      <h3 className=" font-bold text-primary text-2xl lg:text-3xl">
        Health Should Always Be Within Reach
      </h3>
      <p className=" text-left">
        Figma ipsum component variant main layer. Plugin device overflow comment
        move link blur. Device background link duplicate italic align ipsum
        distribute figma. Component align vector shadow outline. Font distribute
        rectangle stroke polygon pixel font layer layout.
      </p>

      <StoreBadges />
    </div>
  );
}
