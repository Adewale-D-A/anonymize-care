"use client";
import { cn } from "@/utils/cn";
import { Activity, DockIcon } from "lucide-react";
import Image from "next/image";
import { useCallback, useState } from "react";
export default function MenuSections({
  content,
  title,
}: {
  content: {
    id: string;
    label: string;
    value: string;
    content: {
      image: string;
      title: string;
      description: string;
    };
  }[];
  title: string;
}) {
  const [currentSelection, setCurrentSelection] = useState(content[0]);

  const handleSelection = useCallback(
    (value: string) => {
      const indexOf = content.findIndex((item) => item?.value === value);
      setCurrentSelection(content[indexOf]);
    },
    [content]
  );
  return (
    <section className="w-full flex justify-center flex-col items-center text-dark-ash-900 dark:text-white py-24 gap-10">
      <div className="w-full max-w-screen-xl text-center">
        <h3 className=" text-4xl font-bold">{title}</h3>
      </div>
      <div className=" w-full  max-w-screen-xl px-5 lg:px-10 flex flex-col lg:flex-row items-center gap-12">
        <div className=" flex flex-col gap-4 flex-1 lg:flex-[0.3]">
          {content.map((item) => (
            <button
              key={item?.id}
              className={cn(
                " rounded-4xl flex items-center gap-2 justify-start p-3 py-5 px-8 w-full border border-gray-200 dark:border-dark-ash-900 hover:bg-primary hover:text-white transition-all cursor-pointer shadow-2xl dark:shadow-gray-700 font-bold",
                currentSelection.id === item.id && "bg-primary text-white"
              )}
              onClick={() => handleSelection(item?.value)}
            >
              <Activity />
              {item?.label}
            </button>
          ))}
        </div>
        <div className=" w-full flex-1 lg:flex-[0.4]">
          <Image
            src={currentSelection?.content?.image}
            width={1000}
            height={1000}
            alt="mobile-app"
            className=" w-full h-auto rounded-4xl"
          />
        </div>
        <div className=" flex flex-col gap-5 flex-1 lg:flex-[0.3]">
          <Activity className=" text-primary" />
          <h5 className=" text-2xl font-bold">
            {currentSelection?.content?.title}
          </h5>
          <p>{currentSelection?.content?.description}</p>
        </div>
      </div>
    </section>
  );
}
