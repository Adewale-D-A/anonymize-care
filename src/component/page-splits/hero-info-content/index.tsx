import StoreBadges from "@/component/app-reusables/store";

export default function HeroInfoContent() {
  return (
    <div className=" bg-dark-ash-500  transition-all text-white p-5 lg:p-10 rounded-2xl w-full max-w-2xl flex flex-col items-center gap-5 text-center">
      <h3 className=" font-bold text-primary text-2xl lg:text-3xl">
        Your Health. Your Privacy. <br />
        Our Priority
      </h3>
      <p className=" text-center">
        AnonymizeCare connects you to certified medical professionals—without
        ever revealing your identity. No names. No faces. Just care. Register in
        seconds, choose a nickname, and start receiving real medical advice and
        prescriptions from licensed consultants.
        <br /> Completely private. 100% secure.
      </p>

      <StoreBadges />
    </div>
  );
}
