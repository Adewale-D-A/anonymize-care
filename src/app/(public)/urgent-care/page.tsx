import HowItWorks from "@/component/page-splits/how-it-works";
import MenuSections from "@/component/page-splits/menu-sections";
import { Metadata } from "next";
import urgentCareContent from "@/static/content/urgent-care.json";
import PriceRange from "@/component/page-splits/price-range";

export const metadata: Metadata = {
  title: "Urgent Care",
  description: "Urgent Care.",
};

export default function UrgentCare() {
  return (
    <div className="w-full">
      <MenuSections title="Urgent Care" content={urgentCareContent} />
      <PriceRange />
      <section className="w-full flex justify-center flex-col items-center transition-all bg-white dark:bg-dark-ash-500 text-dark-ash-900 dark:text-white">
        <HowItWorks />
      </section>
    </div>
  );
}
