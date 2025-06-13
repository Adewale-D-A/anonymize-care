import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link
      href="/"
      className={"flex items-center justify-between rounded-lg overflow-hidden"}
    >
      <Image
        src={"/logo.png"}
        width={200}
        height={200}
        alt="anonymizeCare"
        className="md:h-[60px] h-[40px] w-auto"
      />
    </Link>
  );
};
