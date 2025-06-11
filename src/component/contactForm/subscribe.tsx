"use client";

import { SyntheticEvent, useCallback, useState } from "react";
import Button from "../button";
import AlertModal from "../infoModal/alert-modal";

export default function SubscribeToNewsletter() {
  const [email, setEmail] = useState("");

  const [openAlert, setOpenAlert] = useState(false);
  const [infoMssg, setInfoMssg] = useState("");
  const [isError, setIsError] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = useCallback(
    (e: SyntheticEvent) => {
      e.preventDefault();
      setInfoMssg("");
      setIsError(false);
      setIsSubmitting(true);
      try {
        setInfoMssg("Newsletter subscription successful.");
        setOpenAlert(true);
      } catch (error: any) {
        const mssg =
          error?.response?.data?.message ||
          "Newsletter subscription failed, please try again later.";
        setIsError(true);
        setInfoMssg(mssg);
        setOpenAlert(true);
      } finally {
        setIsSubmitting(false);
      }
    },
    [email]
  );
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className=" bg-white rounded-full p-1 pl-6 lg:pl-16 flex items-center justify-between w-full max-w-2xl"
      >
        <input
          placeholder="Example@example.com"
          value={email}
          required
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          className=" bg-white focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-ring w-full text-dark-ash-900 placeholder:text-gray-400 focus:ring-0 focus:border-0"
        />
        <Button
          isLoading={isSubmitting}
          variant={"unstyled"}
          className=" bg-dark-ash-900 text-white rounded-full w-fit px-8"
        >
          Subscribe
        </Button>
      </form>

      <AlertModal
        open={openAlert}
        onClose={setOpenAlert}
        message={infoMssg}
        isError={isError}
      />
    </>
  );
}
