"use client";
import { ChevronRight, Plus } from "lucide-react";
import { useState } from "react";
import pricing from "@/static/content/pricing-options.json";
import { cn } from "@/utils/cn";
import StoreBadges from "@/component/app-reusables/store";

export default function PricingOptions() {
  const [options, setOptions] = useState(pricing?.uninsured);
  return (
    <div className="w-full flex flex-col lg:flex-row gap-5 transition-all">
      <div className="w-full flex-1 lg:flex-[0.3] flex flex-row lg:flex-col text-start gap-3 lg:gap-6 justify-center lg:justify-start items-center lg:item-start">
        {[
          {
            id: "1",
            label: "With Insurance",
            value: "insured" as const,
          },
          {
            id: "2",
            label: "Without Insurance",
            value: "uninsured" as const,
          },
        ].map((item) => (
          <button
            key={item?.id}
            className={cn(
              "py-5 px-3 whitespace-nowrap lg:border-b-2 flex items-center gap-4 w-full justify-between hover:border-secondary hover:text-secondary hover:font-bold hover:cursor-pointer",
              options?.id === item?.id &&
                "border-secondary bg-secondary rounded-md lg:rounded-none lg:bg-transparent font-bold"
            )}
            onClick={() => setOptions(pricing[item?.value])}
          >
            {item?.label} <ChevronRight />
          </button>
        ))}
      </div>
      <div className=" w-full flex flex-col gap-4 flex-1 lg:flex-[0.7]">
        <div className=" w-full transition-all rounded-4xl bg-white dark:bg-dark-ash-700 p-5 lg:p-8 flex flex-col gap-16">
          <p>{options?.description}</p>
          <div className="w-full flex flex-col  gap-5">
            {options?.sections.map((item) => (
              <div key={item?.title} className=" flex flex-col gap-3">
                <label className=" text-lg font-semibold">{item?.title}</label>
                <div className=" flex flex-col gap-2">
                  {item?.pricing?.map((item) => (
                    <div key={item?.plan} className="flex flex-col">
                      <span
                        key={item?.plan}
                        className=" flex items-center gap-3"
                      >
                        <Plus className=" text-secondary" /> {item?.plan}
                      </span>
                      <span className=" pl-9">{item?.["extra-text"]}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          {/* <CustomLink href="/waitlist">Choose a nick name</CustomLink> */}
          <StoreBadges />
        </div>
        <p>
          Whether you’re covered or not, AnonymizeCare gives you direct access
          to qualified doctors without the usual barriers.
        </p>
      </div>
    </div>
  );
}
