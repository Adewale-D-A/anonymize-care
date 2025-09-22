import { getDeviceInfo } from "@/utils/user-agent";
import WaitlistForm from "../../../component/page-splits/waitlist-form";
import { Metadata } from "next";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "AnonymizeCare Waitlist",
  description:
    "Be the first to experience the future of secure, anonymous healthcare. Sign up now to join the AnonymizeCare waitlist and get early access to exclusive features and updates.",
};

const PLAY_STORE = process.env.PLAY_STORE || "/";
export default async function Home() {
  const head = await headers();
  const userAgent = head.get("user-agent") || "";
  const { isMobile, isAndroid, isIOS } = getDeviceInfo(userAgent);

  if (isAndroid && isMobile) {
    return redirect(PLAY_STORE);
  }

  return (
    <main className=" w-full h-screen flex justify-center items-center px-3 ">
      <WaitlistForm />
    </main>
  );
}
