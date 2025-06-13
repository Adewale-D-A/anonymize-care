import howToGuide from "@/static/content/how-to-guide.json";
import {
  ArrowRight,
  BatteryCharging,
  SignalMedium,
  WifiHigh,
} from "lucide-react";
import anonymizeCarePathway from "@/static/content/anonymize-care-pathway.json";
import CustomLink from "@/component/app-reusables/button/link";
import { cn } from "@/utils/cn";
import Image from "next/image";

export default function HowItWorks() {
  return (
    <div className=" w-full  max-w-screen-xl px-5 lg:px-10 my-24 flex flex-col items-center gap-12">
      <div className="w-full max-w-5xl text-center flex flex-col items-center gap-5">
        <p>Introducing</p>
        <h2 className=" text-center text-3xl font-bold">How Anonymize works</h2>
      </div>
      <div className=" w-full grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className=" lg:pr-36 h-full">
          <div className=" bg-gray-100 dark:bg-dark-ash-700 dark:text-white rounded-sm overflow-clip h-full text-center flex flex-col items-center justify-between gap-10 text-dark-ash-900">
            <div className=" flex justify-between w-full p-4">
              <span className=" font-bold">9:41</span>
              <div className=" flex items-center gap-2">
                <SignalMedium /> <WifiHigh />
                <BatteryCharging />
              </div>
            </div>
            <div className=" flex flex-col gap-2">
              <h5 className=" font-bold text-2xl max-w-sm">
                Choose your AnonymizeCare Pathway
              </h5>
              <p className=" text-gray-500 dark:text-gray-300">
                Whom do you identify as?
              </p>
            </div>
            <div className=" w-full grid grid-cols-2 gap-2 z-10">
              {anonymizeCarePathway.map((item) => (
                <div
                  key={item?.id}
                  className=" w-full h-full min-h-[500px] relative "
                >
                  <Image
                    src={item?.image}
                    alt={item?.title}
                    height={300}
                    width={300}
                    className=" w-full h-full object-cover"
                  />
                  <div
                    className={cn(
                      " bottom-flare absolute h-full p-3 px-10 py-10 bottom-0 right-0 w-full flex flex-col items-center justify-end text-white gap-5",
                      item?.id === "1"
                        ? "bottom-flare-green"
                        : "bottom-flare-blue"
                    )}
                  >
                    <h5 className=" text-3xl font-bold">{item?.title}</h5>
                    <div
                      className={cn(
                        " aspect-square  rounded-full p-2 shadow shadow-white",
                        item?.id === "1" ? "bg-primary" : "bg-secondary"
                      )}
                    >
                      <ArrowRight />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className=" flex flex-col gap-16 lg:gap-28">
          <div className=" flex flex-col gap-10">
            {howToGuide.map((item) => (
              <div key={item?.id} className=" flex flex-col gap-3">
                <div className=" font-bold">
                  <span className=" text-lg">{item?.id}.</span>
                  <h6 className=" text-2xl">{item?.title}</h6>
                </div>
                <p>{item?.description}</p>
              </div>
            ))}
          </div>
          <CustomLink href="/waitlist" className=" w-full">
            Get Started Now
          </CustomLink>
        </div>
      </div>
    </div>
  );
}
