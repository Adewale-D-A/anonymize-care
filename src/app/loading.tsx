import Image from "next/image";

export default function Loading() {
  return (
    <div className="w-full h-screen z-50 overflow-hidden flex justify-center items-center absolute top-0 left-0 bg-white">
      <div className=" flex flex-col gap-2">
        <Image
          src="/logo.png"
          alt="AnonimizeCare"
          height={500}
          width={500}
          className=" w-20 h-auto"
        />
        <h6 className=" font-bold text-lg">
          Anonymize
          <span className=" font-normal">Care</span>
        </h6>
      </div>
      <div className=" absolute top-0 left-0 w-full h-screen bg-primary-500 loader-ctn"></div>
      <div className=" absolute top-0 left-0 w-full h-screen bg-[#f4d048] loader-ctn-2"></div>
    </div>
  );
}
