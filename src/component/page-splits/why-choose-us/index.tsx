"use client";
import { BadgeCheck, EyeClosed, TabletSmartphone } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import useInView from "@/hook/use-in-view";
import whyUs from "@/static/content/why-choose-us.json";
import { cn } from "@/utils/cn";

export default function WhyChooseUs() {
  const [ref, isInView] = useInView();
  const boxRef = useRef(null) as any;
  const [currentSelection, setCurrentSelection] = useState(whyUs[0]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const initialMargin = window.innerWidth / 2;

  const handleSelection = useCallback(
    (index: number) => {
      setCurrentIndex(index);
      setCurrentSelection(whyUs[index]);
    },
    [whyUs]
  );

  useEffect(() => {
    if (isInView) {
      const item = boxRef?.current?.childNodes[currentIndex];
      item?.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  }, [isInView, currentIndex]);

  return (
    <div
      ref={ref}
      className="w-full flex flex-col justify-center items-center gap-10"
    >
      <span className="w-fit font-bold p-4 px-6 border-blue-600 border dark:border-dark-ash-500 rounded-full">
        Why Choose AnonymizeCare?
      </span>
      <div className=" grid grid-cols-3 gap-5 lg:gap-10">
        {whyUs.map((item, index) => (
          <div
            key={item.id}
            className=" flex flex-col gap-2 items-center text-center"
          >
            <button
              onClick={() => handleSelection(index)}
              className={cn(
                "p-8 rounded-xl bg-primary/30 dark:text-white opacity-30  hover:scale-110  hover:-2xl transition-all cursor-pointer -gray-400 dark:-gray-700",
                currentSelection?.id === item?.id &&
                  "bg-primary dark:bg-primary/30 text-white opacity-100"
              )}
            >
              {item?.id === "1" && <EyeClosed className=" size-10" />}
              {item?.id === "2" && <BadgeCheck className=" size-10" />}
              {item?.id === "3" && <TabletSmartphone className=" size-10" />}
              {/* {item?.id === "4" && <Shield className=" size-10" />} */}
            </button>
            <span className=" font-bold">{item?.id}.</span>
            <p>{item?.title}</p>
          </div>
        ))}
      </div>
      <div className=" w-full overflow-x-auto hide-scroll ">
        <div
          ref={boxRef}
          style={{
            marginLeft: initialMargin,
          }}
          className="w-full flex flex-row items-stretch gap-5 lg:gap-10 transition-all overflow-x-auto hide-scroll "
        >
          {whyUs.map((item, index) => (
            <button
              onClick={() => handleSelection(index)}
              key={item.id}
              className={cn(
                " rounded-xl min-w-full lg:min-w-xl w-full pt-4 pb-12 text-dark-ash-900 border flex flex-col dark:text-white justify-between border-gray-400  transition-all cursor-pointer opacity-30 hover:opacity-100",
                currentSelection?.id === item?.id &&
                  "styled-gradient-2 dark:bg-primary/30 text-dark-ash-900 dark:text-white opacity-100"
              )}
            >
              <div className=" w-full p-4 rounded-b-xl flex justify-center">
                <Image
                  src={item?.image}
                  alt={item?.title}
                  height={600}
                  width={600}
                  className=" w-[70%] h-full object-cover"
                />
              </div>
              <div className="w-full text-left  px-5 flex flex-col gap-3 ">
                <h6 className=" text-3xl lg:text-4xl">{item?.title}</h6>
                <p className=" text-lg">{item?.content}</p>
              </div>
            </button>
          ))}
          <button
            className={cn(
              "opacity-0 min-w-full lg:min-w-xl w-full hidden lg:block"
            )}
          ></button>
        </div>
      </div>
    </div>
  );
}
