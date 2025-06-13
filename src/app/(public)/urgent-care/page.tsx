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
              AnonymizeCare online doctor visit costs between ₦0- ₦30,000
            </h2>
          </div>
          <div className=" text-left flex flex-col gap-5">
            <p className=" max-w-xl">
              AnonymizeCare connects you to certified medical
              professionals—without ever revealing your identity. No names. No
              faces. Just care. Register in seconds, choose a nickname, and
              start receiving real medical advice and prescriptions from
              licensed consultants. Completely private. 100% secure.
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
