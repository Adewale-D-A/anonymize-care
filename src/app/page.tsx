import ThemeModeToggle from "@/component/button/theme-mode-toggle";
import HeroInfoContent from "@/component/hero-info-content";
import NavMenu from "@/component/nav-menu";
import {
  ArrowRight,
  BatteryCharging,
  SignalMedium,
  WifiHigh,
} from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import features from "@/static/content/features.json";
import Link from "next/link";
import PricingOptions from "@/component/pricing-options";
import howToGuide from "@/static/content/how-to-guide.json";
import anonymizeCarePathway from "@/static/content/anonymize-care-pathway.json";
import CustomLink from "@/component/button/link";
import { cn } from "@/utils/cn";
import ContactForm from "@/component/contactForm";
import SubscribeToNewsletter from "@/component/contactForm/subscribe";
import FooterMenu from "@/component/footer";

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
      {/* introduction section */}{" "}
      <section className="w-full flex justify-center flex-col items-center transition-all bg-white dark:bg-dark-ash-500 text-dark-ash-900 dark:text-white">
        <div className=" w-full max-w-7xl px-5 lg:px-10 my-24 flex flex-col items-center gap-12">
          <div className="w-full max-w-5xl text-center flex flex-col items-center gap-5">
            <p>Introducing</p>
            <h2 className=" text-center text-3xl font-bold">
              How Anonymize works
            </h2>
          </div>
          <div className=" w-full grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className=" lg:pr-36 h-full">
              <div className=" bg-gray-100 rounded-lg overflow-clip h-full text-center flex flex-col items-center justify-between gap-10 text-dark-ash-900">
                <div className=" flex justify-between w-full p-4">
                  <span className=" font-bold">9:41</span>
                  <div className=" flex items-center gap-2">
                    <SignalMedium /> <WifiHigh />
                    <BatteryCharging />
                  </div>
                </div>
                <div className=" flex flex-col gap-2">
                  <h5 className=" font-bold text-2xl max-w-sm">
                    Choose your AnonymizeCare Pathway
                  </h5>
                  <p className=" text-gray-500">Whom do you identify as?</p>
                </div>
                <div className=" w-full grid grid-cols-2 gap-2 z-10">
                  {anonymizeCarePathway.map((item) => (
                    <div
                      key={item?.id}
                      className=" w-full h-full min-h-[500px] relative "
                    >
                      <Image
                        src={item?.image}
                        alt={item?.title}
                        height={300}
                        width={300}
                        className=" w-full h-full object-cover"
                      />
                      <div
                        className={cn(
                          " bottom-flare absolute h-full p-3 px-10 py-10 bottom-0 right-0 w-full flex flex-col items-center justify-end text-white gap-5",
                          item?.id === "1"
                            ? "bottom-flare-green"
                            : "bottom-flare-blue"
                        )}
                      >
                        <h5 className=" text-3xl font-bold">{item?.title}</h5>
                        <div
                          className={cn(
                            " aspect-square  rounded-full p-2 shadow shadow-white",
                            item?.id === "1" ? "bg-primary" : "bg-secondary"
                          )}
                        >
                          <ArrowRight />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className=" flex flex-col gap-16 lg:gap-28">
              <div className=" flex flex-col gap-10">
                {howToGuide.map((item) => (
                  <div key={item?.id} className=" flex flex-col gap-3">
                    <div className=" font-bold">
                      <span className=" text-lg">{item?.id}.</span>
                      <h6 className=" text-2xl">{item?.title}</h6>
                    </div>
                    <p>{item?.description}</p>
                  </div>
                ))}
              </div>
              <CustomLink href="/waitlist" className=" w-full">
                Get Started Now
              </CustomLink>
            </div>
          </div>
        </div>
      </section>
      {/* request form */}
      <section
        id="contact"
        className="w-full flex justify-center flex-col items-center transition-all bg-white dark:bg-dark-ash-500 text-dark-ash-900 dark:text-white"
      >
        <div className=" w-full max-w-7xl px-5 lg:px-10 my-24 grid grid-cols-1 lg:grid-cols-2 gap-12">
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
            <p className=" text-secondary">Want to Speak to us Directly?</p>
            <h2 className="text-3xl font-bold">Request a Call Back</h2>
            <p className=" max-w-xl">
              Would you like to speak to one of our technology specialist over
              the phone? Just submit your details and we’ll be in touch
              shortly.You can also SEND AN EMAIL if you would prefer.
            </p>
            <ContactForm />
          </div>
        </div>
      </section>
      {/* subscribe section */}
      <section className="w-full flex justify-center flex-col items-center transition-all bg-secondary text-white">
        <div className=" w-full max-w-7xl px-5 lg:px-10 my-24 flex flex-col items-center gap-12">
          <div className="w-full max-w-5xl text-center flex flex-col items-center gap-5">
            <h2 className=" text-center text-3xl font-bold">
              Subscribe to our newsletter
            </h2>
            <p>Be the first to get the latest updates from AnonymizeCare</p>
          </div>
          <SubscribeToNewsletter />
        </div>
      </section>
      {/* footer  */}
      <FooterMenu />
      <div className=" fixed bottom-10 right-16 z-50">
        <ThemeModeToggle />
      </div>
    </main>
  );
}
