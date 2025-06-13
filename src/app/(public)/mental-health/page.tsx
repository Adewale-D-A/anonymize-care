import HowItWorks from "@/component/page-splits/how-it-works";
import { Metadata } from "next";
import MenuSections from "@/component/page-splits/menu-sections";
import mentalHealthContent from "@/static/content/mental-health.json";

export const metadata: Metadata = {
  title: "Mental Health",
  description: "Mental Health",
};
export default function MentalHealth() {
  return (
    <div className="w-full">
      <MenuSections title="Mental Health" content={mentalHealthContent} />
      <section className="w-full flex justify-center flex-col items-center transition-all bg-white dark:bg-dark-ash-500 text-dark-ash-900 dark:text-white">
        <HowItWorks />
      </section>
    </div>
  );
}
