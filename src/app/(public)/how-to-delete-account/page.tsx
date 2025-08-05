import { Logo } from "@/component/app-reusables/logo";
import Image from "next/image";

export default function DeleteAccount() {
  return (
    <div className="w-full flex items-center bg-gradient flex-col gap-10 pb-24 pt-16 text-dark-ash-700 dark:text-white">
      <Logo />
      <h5 className=" text-2xl text-center">
        Delete My AnonimizeCare Mobile Account Guide
      </h5>

      <div className="w-full flex flex-col gap-16 max-w-screen-xl px-5 md:px-10">
        {/* section 1 */}
        <section className="w-full grid grid-cols-1 md:grid-cols-3 gap-10 items-stretch">
          {[
            {
              id: 1,
              name: "Home screen",
              image: "/delete-account-screens/step_1.jpg",
              step: "Step 1",
              description:
                "Click on the profile menu at the bottom right corner of the Mobile Application's screen.",
            },
            {
              id: 2,
              name: "Settings Screen",
              image: "/delete-account-screens/step_2.jpg",
              step: "Step 2",
              description:
                "Click on the button at the bottom of the profile screen labelled 'Delete Account'.",
            },
            {
              id: 3,
              name: "Confirm Action Prompt",
              image: "/delete-account-screens/step_3.jpg",
              step: "Step 3",
              description:
                "Once step 2 is completed, a prompt confirming your delete action comes up.",
            },
            {
              id: 4,
              name: "Confirm Action Screen",
              image: "/delete-account-screens/step_3.jpg",
              step: "Step 4",
              description:
                "Click on 'delete' button on the prompt confirm action.",
            },
          ].map((item) => (
            <div
              key={item?.id}
              className="rounded-md flex flex-col items-start justify-start gap-2"
            >
              <div className="w-full p-3 min-h-36 shadow-md ">
                <h5 className=" text-lg font-semibold">{item?.step}</h5>
                <p>{item?.description}</p>
              </div>
              <Image
                src={item?.image}
                alt={item?.name}
                className=" w-full h-auto rounded-md"
                height={500}
                width={500}
              />
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
