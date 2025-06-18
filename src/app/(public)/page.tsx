import HeroInfoContent from "@/component/page-splits/hero-info-content";
import { ArrowRight } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import features from "@/static/content/features.json";
import Link from "next/link";
import PricingOptions from "@/component/page-splits/pricing-options";
import CustomLink from "@/component/app-reusables/button/link";
import { cn } from "@/utils/cn";
import ContactForm from "@/component/page-splits/contactForm";
import PageDelayLoader from "@/component/app-reusables/loader/intro-animation";
import HowItWorks from "@/component/page-splits/how-it-works";
import WhyChooseUs from "@/component/page-splits/why-choose-us";

export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to anonymizeCare.",
};

export default function Home() {
  return (
    <PageDelayLoader>
      <div className=" w-full">
        <section className="w-full flex items-center justify-center py-5 px-3 styled-gradient">
          <div className="  max-w-screen-xl w-full flex items-center justify-between px-3">
            <h5 className=" text-md lg:text-2xl text-dark-ash-900 ">
              <span className=" font-bold">CareChampions:</span> community
              healthcare.. one door, one community at a time.
            </h5>
            <CustomLink
              href="#contact"
              className=" bg-white text-primary border-none"
            >
              Get Started
            </CustomLink>
          </div>
        </section>
        {/* hero section */}
        <section className="w-full h-screen relative flex justify-center  bg-[url('/images/hero-gif.gif')] bg-right bg-no-repeat bg-cover">
          <div className=" w-full h-full absolute top-0 left-0 bg-[url('/images/hero-banner.png')] bg-center bg-no-repeat bg-cover"></div>
          <div className="h-full max-w-screen-xl w-full flex justify-center items-center lg:justify-end lg:items-end z-10  py-0 px-5 lg:py-16">
            <HeroInfoContent />
          </div>
        </section>
        {/* features section */}
        <section className="w-full flex justify-center bg-white dark:bg-dark-ash-500 text-dark-ash-900 dark:text-white">
          <div className=" w-full  max-w-screen-xl px-5 lg:px-10 my-24 flex flex-col gap-12">
            <div className="w-full text-center text-3xl">
              <h2>
                From everyday
                <span className=" text-primary"> Urgent Care</span> to
                <span className=" text-primary"> Mental Wellness </span>to
                <span className=" text-primary">
                  {" "}
                  Sexual and Reproductive Healthcare
                </span>
                .
              </h2>
              <h2>
                From our CareChampions to Consultants, everything you need,
                <span className=" text-primary"> all in one place</span>.
              </h2>
              <h2>Personalized & Privatized healthcare for you.</h2>
            </div>
            <div className=" w-full grid grid-cols-1 lg:grid-cols-3 gap-5 text-primary">
              {features.map((item) => (
                <div
                  key={item?.id}
                  className=" w-full shadow-2xl rounded-4xl min-h-96 h-full overflow-hidden bg-transparent dark:bg-dark-ash-700 "
                >
                  <div className=" p-4 flex flex-col gap-5 ">
                    <h6 className=" uppercase">{item?.header}</h6>
                    <div>
                      <p className=" font-bold text-xl max-w-80">
                        {item?.content}
                      </p>
                      <p className=" font-bold text-xl max-w-80">
                        {item?.content_2}
                      </p>
                    </div>
                    <Link
                      href={item?.url}
                      className=" flex items-center gap-2 my-5 hover:px-5 transition-all"
                    >
                      <div className="h-8 w-8 p-2 flex justify-center items-center rounded-full bg-primary text-white">
                        <ArrowRight className=" size-5" />
                      </div>
                      <p>{item?.url_label}</p>
                    </Link>
                  </div>
                  <div
                    className={cn(
                      " max-h-[500px] h-full flex justify-end",
                      !(item?.id === "1") && " lg:pl-24"
                    )}
                  >
                    <Image
                      src={item?.image}
                      alt="features"
                      height={1000}
                      width={800}
                      className=" h-full w-full object-cover object-top rounded-l-2xl"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* book an apaointment section */}
        <section className="w-full flex justify-center flex-col items-center bg-primary/25 text-dark-ash-900 dark:text-white">
          <div className=" w-full  max-w-screen-xl px-5 lg:px-10 my-24 flex flex-col items-center gap-12">
            <div className="w-full max-w-5xl text-center flex flex-col items-center gap-5">
              <p>Consultation</p>
              <h2 className=" text-center text-3xl font-bold">
                See a doctor with or without insurance
              </h2>
              <p className=" max-w-xl">
                We partner with leading health plans to serve millions of
                members around the country. <br /> Your AnonymizeCare visit may
                be as low as ₦0/visit.
              </p>
            </div>
            <PricingOptions />
          </div>
        </section>
        {/* why choose us */}
        <section className="w-full flex justify-center flex-col items-center transition-all styled-gradient-2 dark:bg-dark-ash-900 text-dark-ash-900 dark:text-white px-5 lg:px-10 py-24">
          {/* <div className=" w-full px-5 lg:px-10 my-24"> */}
          <WhyChooseUs />
          {/* </div> */}
        </section>
        {/* introduction section */}
        <section className="w-full flex justify-center flex-col items-center transition-all bg-white dark:bg-dark-ash-500 text-dark-ash-900 dark:text-white">
          <HowItWorks />
        </section>
        {/* request form */}
        <section
          id="contact"
          className="w-full flex justify-center flex-col items-center transition-all bg-dark-ash-500 text-white"
        >
          <div className=" w-full  max-w-screen-xl px-5 lg:px-10 my-24 grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className=" w-full h-full">
              <Image
                src={"/images/request-a-call.jpg"}
                alt="request-a-call"
                height={500}
                width={500}
                className=" w-full h-full object-cover"
              />
            </div>
            <div className=" text-left flex flex-col gap-5">
              <p className=" text-primary">Want to Speak to us Directly?</p>
              <h2 className="text-3xl font-bold">Request a Call Back</h2>
              <p className=" max-w-xl">
                Would you like to speak to one of our technology specialist over
                the phone? Just submit your details and we’ll be in touch
                shortly.You can also
                <Link
                  target="_blank"
                  rel="noreferrer"
                  href={"mailto:info@7thcare.com"}
                  className=" underline text-primary lowercase"
                >
                  SEND AN EMAIL
                </Link>
                if you would prefer.
              </p>
              <ContactForm />
            </div>
          </div>
        </section>
      </div>
    </PageDelayLoader>
  );
}
