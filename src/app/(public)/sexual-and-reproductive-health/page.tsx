import HowItWorks from "@/component/page-splits/how-it-works";
import { Metadata } from "next";
import MenuSections from "@/component/page-splits/menu-sections";
import sexualHealthContent from "@/static/content/sexual-health.json";

export const metadata: Metadata = {
  title: "Sexual And Reporductive Health",
  description: "Sexual And Reporductive Health",
};

export default function SexualAndReproductiveHealth() {
  return (
    <div className="w-full">
      <MenuSections
        title="Sexual and Reproductive Health"
        content={sexualHealthContent}
      />
      <section className="w-full flex justify-center flex-col items-center transition-all bg-white dark:bg-dark-ash-500 text-dark-ash-900 dark:text-white">
        <HowItWorks />
      </section>
    </div>
  );
}
