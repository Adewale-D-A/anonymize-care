"use client";

import axios from "axios";
import { SyntheticEvent, useCallback, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import ReCAPTCHA from "react-google-recaptcha";
import Button from "@/component/app-reusables/button";
import AlertModal from "@/component/app-reusables/infoModal/alert-modal";
import { Logo } from "@/component/app-reusables/logo";
import CheckNicknameAvailability from "@/component/app-reusables/input/check-nickname-availability";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASEURL;
const header = {
  headers: {
    "Content-Type": "application/json",
  },
};
export default function WaitlistForm() {
  const captchaRef = useRef<any>(null);
  const router = useRouter();
  const [openAlert, setOpenAlert] = useState(false);
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const [enableSubmit, setEnableSubmit] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");

  function onChange(value: any) {
    setEnableSubmit(value ? true : false);
  }

  const handleSubmit = useCallback(
    async (e: SyntheticEvent) => {
      e.preventDefault();
      setMessage("");
      setIsError(false);
      setIsSubmitting(true);
      const token = captchaRef?.current?.getValue();
      if (!token) {
        setMessage("recaptcha failed");
        setIsError(true);
        setOpenAlert(true);
        setIsSubmitting(false);
        return;
      }
      try {
        setIsSubmitting(true);
        const response = await axios.post(
          `${BASE_URL}/anonymous-signup`,
          {
            nickname,
          },
          header
        );
        const result = response?.data as {
          message: string;
          userId: string;
          password: string;
          email: string;
          nickname: string;
          token: string;
        };
        await axios.post(
          `${BASE_URL}/waitlist`,
          {
            email: result?.email,
            nickname: nickname,
          },
          header
        );
        captchaRef?.current?.reset();
        setEnableSubmit(false);
        router.push(`/registered/${nickname}/${result?.password}`);
        // setMessage("Successfully added to the waitlist.");
        // setOpenAlert(true);
        // setNickname("");
        // setEmail("");
      } catch (error: any) {
        const mssg =
          error?.response?.data?.message || "Unable to add to waitlist.";
        setIsError(true);
        setMessage(mssg);
        setOpenAlert(true);
      } finally {
        setIsSubmitting(false);
      }
    },
    [nickname, email]
  );
  return (
    <>
      <div
        className={`max-w-xl w-full font-century h-fit overflow-y-auto p-5 py-10 rounded-lg flex flex-col items-center gap-10 ${
          false && "bg-gradient-to-tr from-[#007CD7] via-[#63BEB1] to-[#A4ED8E]"
        }`}
      >
        <div className="w-full flex flex-col gap-2 items-center justify-center">
          <Logo />
          <div className=" text-center">
            <h4 className=" text-3xl font-bold">
              Reserve your AnonymizeCare nickname
            </h4>
            <div className=" w-full flex justify-center">
              <p className=" text-sm text-gray-500  max-w-sm">
                Be among the first to explore exclusive features and updates
                from the upcoming AnonymizeCare App. Sign up now to reserve your
                spot on our early access list!
              </p>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-5">
          <CheckNicknameAvailability
            {...{ value: nickname, setValue: setNickname }}
          />
          {/* <TextInput
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Email"
            type="email"
            label="Email"
            id="email"
          /> */}
          <div className="pb-2">
            <ReCAPTCHA
              sitekey={process.env.NEXT_PUBLIC_SITE_KEY || ""}
              ref={captchaRef}
              onChange={onChange}
            />
          </div>
          <div className="flex justify-center">
            <Button
              disabled={!enableSubmit}
              type="submit"
              isLoading={isSubmitting}
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
      <AlertModal
        open={openAlert}
        onClose={setOpenAlert}
        message={message}
        isError={isError}
      />
    </>
  );
}
