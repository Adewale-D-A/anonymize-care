import ThemeModeToggle from "@/component/button/theme-mode-toggle";
import HeroInfoContent from "@/component/hero-info-content";
import NavMenu from "@/component/nav-menu";
import { ArrowRight } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import features from "@/static/content/features.json";
import Link from "next/link";
import PricingOptions from "@/component/pricing-options";

export const metadata: Metadata = {
  title: "AnonymizeCare",
  description: "Welcome to anonymizeCare.",
};

export default function Home() {
  return (
    <main className=" w-full text-sm  bg-white dark:bg-dark-ash-500">
      <NavMenu />
      {/* hero section */}
      <section className="w-full h-screen flex justify-center items-center px-5 lg:justify-end lg:items-end bg-[url('/images/hero-banner.jpg')] bg-right bg-no-repeat bg-cover rounded-b-3xl">
        <div className=" m-0 lg:m-24">
          <HeroInfoContent />
        </div>
      </section>
      {/* features section */}
      <section className="w-full flex justify-center bg-white dark:bg-dark-ash-500 text-dark-ash-900 dark:text-white">
        <div className=" w-full max-w-7xl px-5 lg:px-10 my-24 flex flex-col gap-12">
          <h2 className=" text-center text-3xl ">
            For your <span className=" text-secondary">everyday health</span>.
            For your{" "}
            <span className=" text-secondary">Psychological health</span>. For{" "}
            <span className=" text-secondary">caregivers</span>. For hospitals.
            For everything, in one place. For life.
          </h2>
          <div className=" w-full grid grid-cols-1 lg:grid-cols-3 gap-5 text-secondary">
            {features.map((item) => (
              <div
                key={item?.id}
                className=" w-full shadow-2xl rounded-4xl min-h-96 h-full overflow-hidden bg-transparent dark:bg-dark-ash-700 "
              >
                <div className=" p-4 flex flex-col gap-5 ">
                  <h6 className=" uppercase">{item?.header}</h6>
                  <p className=" font-bold text-xl max-w-80">{item?.content}</p>
                  <Link
                    href={item?.url}
                    className=" flex items-center gap-2 my-5 hover:px-5 transition-all"
                  >
                    <div className="h-8 w-8 p-2 flex justify-center items-center rounded-full bg-secondary text-white">
                      <ArrowRight className=" size-5" />
                    </div>
                    <p>{item?.url_label}</p>
                  </Link>
                </div>
                <div className=" px-3">
                  <Image
                    src={item?.image}
                    alt="features"
                    height={1000}
                    width={800}
                    className=" w-full h-auto"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* book an apaointment section */}
      <section className="w-full flex justify-center flex-col items-center bg-primary/25 text-dark-ash-900 dark:text-white">
        <div className=" w-full max-w-7xl px-5 lg:px-10 my-24 flex flex-col items-center gap-12">
          <div className="w-full max-w-5xl text-center flex flex-col items-center gap-5">
            <p>Book an appointment</p>
            <h2 className=" text-center text-3xl font-bold">
              See a doctor with or without insurance
            </h2>
            <p className=" max-w-xl">
              We partner with leading health plans to serve millions of members
              around the country. Your AnonymizeCare visit may be as low as
              N0/visit.
            </p>
          </div>{" "}
          <PricingOptions />
        </div>
      </section>
      {/* introduction section */}
      <section></section>
      {/* request form */}
      <section></section>
      {/* subscribe section */}
      <section></section>
      {/* footer  */}
      <footer></footer>
      <div className=" fixed bottom-10 right-16">
        <ThemeModeToggle />
      </div>
    </main>
  );
}
