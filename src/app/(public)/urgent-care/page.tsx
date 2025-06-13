import HowItWorks from "@/component/page-splits/how-it-works";
import MenuSections from "@/component/page-splits/menu-sections";
import { Metadata } from "next";
import urgentCareContent from "@/static/content/urgent-care.json";
import StoreBadges from "@/component/app-reusables/store";

export const metadata: Metadata = {
  title: "Urgent Care",
  description: "Urgent Care.",
};

export default function UrgentCare() {
  return (
    <div className="w-full">
      <MenuSections title="Urgent Care" content={urgentCareContent} />
      <section className="w-full flex justify-center flex-col items-center bg-primary/25 text-dark-ash-900 dark:text-white">
        <div className=" w-full  max-w-screen-xl px-5 lg:px-10 my-24 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className=" w-full h-full">
            <h2 className="text-3xl font-bold">
              AnonymizeCare online doctor visit costs between $0- $99
            </h2>
          </div>
          <div className=" text-left flex flex-col gap-5">
            <p className=" max-w-xl">
              Figma ipsum component variant main layer. Plugin device overflow
              comment move link blur. Device background link duplicate italic
              align ipsum distribute figma. Component align vector shadow
              outline. Font distribute rectangle stroke polygon pixel font layer
              layout.
            </p>
            <StoreBadges />
          </div>
        </div>
      </section>

      <section className="w-full flex justify-center flex-col items-center transition-all bg-white dark:bg-dark-ash-500 text-dark-ash-900 dark:text-white">
        <HowItWorks />
      </section>
    </div>
  );
}
