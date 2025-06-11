import WaitlistForm from "./waitlist-form";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "AnonymizeCare Waitlist",
  description:
    "Be the first to experience the future of secure, anonymous healthcare. Sign up now to join the AnonymizeCare waitlist and get early access to exclusive features and updates.",
};

export default function Home() {
  return (
    <div className="w-full bg-[url('/images/medic-bg.png')] bg-right bg-no-repeat bg-blend-darken bg-black/60 bg-cover">
      <main className=" w-full h-screen flex justify-center items-center px-3 ">
        <WaitlistForm />
      </main>
    </div>
  );
}
