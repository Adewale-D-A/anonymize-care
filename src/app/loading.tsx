import Image from "next/image";

export default function Loading() {
  return (
    <div className="w-full h-screen z-[999] overflow-hidden flex justify-center items-center absolute top-0 left-0 bg-white dark:bg-dark-ash-500">
      <div className=" flex flex-col items-center gap-2">
        <Image
          src="/logo.png"
          alt="AnonimizeCare"
          height={500}
          width={500}
          className=" w-20 lg:w-40 h-auto animate-pulse"
        />
      </div>
      <div className=" absolute top-0 left-0 w-full h-screen bg-primary loader-ctn"></div>
      <div className=" absolute top-0 left-0 w-full h-screen bg-secondary loader-ctn-2"></div>
    </div>
  );
}
