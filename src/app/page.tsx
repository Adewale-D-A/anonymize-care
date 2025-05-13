import WaitlistForm from "./waitlist-form";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Waitlist",
  description: "Get latest updates of our AnonymizeCare app.",
};

export default function Home() {
  return (
    <main className=" w-full h-screen flex justify-center items-center px-3 bg-[url('/images/medic-bg.png')] bg-right bg-no-repeat bg-blend-darken bg-black/60 bg-cover ">
      <WaitlistForm />
    </main>
  );
}
