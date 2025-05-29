import CopyContent from "@/component/button/copy";
import CheckIcon from "@/static/icons/check";
import CopyIcon from "@/static/icons/copy";
import Link from "next/link";

type Params = Promise<{ slug: string[] }>;
export default async function RegisteredSuccesssfully(props: {
  params: Params;
}) {
  const params = await props.params;
  return (
    <main className=" w-full h-screen flex flex-col justify-center items-center px-3 ">
      <div className=" max-w-xl w-full flex flex-col gap-10">
        <div className="w-full mt-10 bg-gray-800 text-white shadow-lg rounded-2xl p-6 space-y-4 ">
          <h2 className="text-2xl font-bold text-green-600">
            You&apos;re in — quietly
          </h2>

          <p>
            Your nickname{" "}
            <span className="font-semibold text-secondary text-lg">
              {params?.slug?.[0]}
            </span>{" "}
            is now your username.
          </p>

          <div className="bg-gray-100 p-4 rounded-lg">
            <p className="text-sm text-gray-600 mb-1">Your passcode:</p>
            <p className="text-xl font-mono font-bold text-gray-900 flex items-center gap-3">
              {params?.slug?.[1]} <CopyContent content={params?.slug?.[1]} />
            </p>
          </div>

          <p>
            Download the app and login with these details when we go live on{" "}
            <span className="font-semibold text-secondary text-2xl">
              June 14
            </span>
            .
          </p>

          <p className="text-sm text-gray-300 italic">
            Thanks for joining early — you&apos;re one of the first.
          </p>
          <Link
            href={"/"}
            className="inline-flex items-center justify-center font-semibold whitespace-nowrap rounded-md text-sm  transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 cursor-pointer bg-primary text-black shadow  w-full text-center border-2 border-primary-dull hover:scale-105 px-2 py-3"
          >
            Okay
          </Link>
        </div>
      </div>
    </main>
  );
}
