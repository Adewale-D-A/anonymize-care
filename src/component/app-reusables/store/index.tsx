import Image from "next/image";
import Link from "next/link";

export default function StoreBadges() {
  return (
    <div className=" flex items-center gap-5">
      <Link href={"/waitlist"} className=" hover:scale-125 transition-all">
        <Image
          src={"/images/google-play-badge.png"}
          alt="google-store"
          height={100}
          width={300}
          className=" w-full lg:w-auto h-auto lg:h-12 rounded-lg"
        />
      </Link>
      <Link href={"/waitlist"} className=" hover:scale-125 transition-all">
        <Image
          src={"/images/app-store-badge.png"}
          alt="google-store"
          height={100}
          width={300}
          className=" w-full lg:w-auto h-auto lg:h-12 rounded-lg"
        />
      </Link>
    </div>
  );
}
