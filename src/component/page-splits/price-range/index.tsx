import StoreBadges from "@/component/app-reusables/store";

export default function PriceRange() {
  return (
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
            faces. Just care. Register in seconds, choose a nickname, and start
            receiving real medical advice and prescriptions from licensed
            consultants. Completely private. 100% secure.
          </p>
          <StoreBadges />
        </div>
      </div>
    </section>
  );
}
