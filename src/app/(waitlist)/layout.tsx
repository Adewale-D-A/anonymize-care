import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Your club's dashboard.",
};

export default function WaitlistLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full bg-black text-white">
      <div className="w-full bg-[url('/images/medic-bg.png')] bg-right bg-no-repeat bg-blend-darken bg-black/60 bg-cover">
        {children}
      </div>
    </div>
  );
}
