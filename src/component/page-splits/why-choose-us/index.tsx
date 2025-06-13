"use client";
import whyUs from "@/static/content/why-choose-us.json";
import { cn } from "@/utils/cn";
import { BadgeCheck, EyeClosed, Shield, TabletSmartphone } from "lucide-react";
import Image from "next/image";
import { useCallback, useState } from "react";

export default function WhyChooseUs() {
  const [currentSelection, setCurrentSelection] = useState(whyUs[0]);

  const handleSelection = useCallback(
    (id: string) => {
      const indexOf = whyUs.findIndex((item) => item?.id === id);
      setCurrentSelection(whyUs[indexOf]);
    },
    [whyUs]
  );
  return (
    <div className=" w-full flex flex-col justify-center items-center gap-10">
      <span className="w-fit font-bold p-4 px-6 shadow-2xl text-white shadow-gray-400 border-blue-600 dark:shadow-gray-700 border dark:border-dark-ash-500 rounded-full">
        Why Choose AnonymizeCare?
      </span>
      <div className=" grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-10">
        {whyUs.map((item) => (
          <div
            key={item.id}
            className=" flex flex-col gap-2 items-center text-white"
          >
            <button
              onClick={() => handleSelection(item?.id)}
              className={cn(
                "p-8 rounded-xl bg-primary/30 shadow hover:scale-110  hover:shadow-2xl transition-all cursor-pointer shadow-gray-400 dark:shadow-gray-700",
                currentSelection?.id === item?.id &&
                  "bg-dark-ash-500 dark:bg-secondary text-white dark:text-white"
              )}
            >
              {item?.id === "1" && (
                <EyeClosed className=" size-10 text-dark-ash-900" />
              )}
              {item?.id === "2" && (
                <BadgeCheck className=" size-10 text-green-500" />
              )}
              {item?.id === "3" && <TabletSmartphone className=" size-10" />}
              {item?.id === "4" && <Shield className=" size-10" />}
            </button>
            <span className=" font-bold">{item?.id}.</span>
            <p>{item?.title}</p>
          </div>
        ))}
      </div>
      <div className=" grid grid-cols-1 lg:grid-cols-4 gap-5 lg:gap-10">
        {whyUs.map((item) => (
          <button
            onClick={() => handleSelection(item?.id)}
            key={item.id}
            className={cn(
              " rounded-xl bg-primary/30 shadow hover:scale-110  hover:shadow-2xl transition-all cursor-pointer shadow-gray-400 dark:shadow-gray-700 opacity-30 hover:opacity-100",
              currentSelection?.id === item?.id &&
                "bg-dark-ash-500 dark:bg-secondary text-white dark:text-white opacity-100"
            )}
          >
            <div className=" w-full rounded-b-lg">
              <Image
                src={item?.image}
                alt={item?.title}
                height={300}
                width={300}
                className=" w-full h-full object-cover"
              />
            </div>
            <div className=" text-left  p-3">
              <h6 className=" font-bold text-lg lg:text-xl">{item?.title}</h6>
              <p>{item?.content}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
