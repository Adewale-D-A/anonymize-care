"use client";

import React, { useCallback, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import TextInput from "@/component/app-reusables/input/text";
import TextAreaInput from "@/component/app-reusables/input/textarea";
import Button from "@/component/app-reusables/button";
import AlertModal from "@/component/app-reusables/infoModal/alert-modal";

export default function ContactForm() {
  const form = useRef(null) as any;
  const [openAlert, setOpenAlert] = useState(false);
  const [infoMssg, setInfoMssg] = useState("");
  const [isError, setIsError] = useState(false);

  const service_id = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
  const template_id = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";
  const public_key = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";

  const [fullname, setFullname] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = useCallback(
    async (e: React.SyntheticEvent) => {
      e.preventDefault();
      setIsSubmitting(true);
      // const payload = {
      //   fullname: fullname,
      //   company: company,
      //   phone_number: phone,
      //   email: email,
      //   message: message,
      // };
      setInfoMssg("");
      setIsError(false);
      setIsSubmitting(true);
      try {
        await emailjs.sendForm(
          service_id,
          template_id,
          form.current || "",
          public_key
        );
        setFullname("");
        setCompany("");
        setPhone("");
        setEmail("");
        setMessage("");
        setInfoMssg("Message successfully sent.");
        setOpenAlert(true);
      } catch (error: any) {
        const mssg =
          error?.response?.data?.message ||
          "Unable to send request, please try again later.";
        setIsError(true);
        setInfoMssg(mssg);
        setOpenAlert(true);
      } finally {
        setIsSubmitting(false);
      }
    },
    [service_id, template_id, public_key, form]
  );

  return (
    <>
      <form ref={form} className=" flex flex-col gap-5" onSubmit={submit}>
        <div className=" w-full grid grid-cols-1 md:grid-cols-2 gap-5">
          {[
            {
              id: "fullname",
              label: "Full name",
              placeholder: "John Doe",
              type: "text",
              isRequired: true,
              state: fullname,
              setState: setFullname,
            },
            {
              id: "company",
              label: "Company name (optional)",
              placeholder: "John inc.",
              type: "text",
              isRequired: false,
              state: company,
              setState: setCompany,
            },
            {
              id: "phone_number",
              label: "Phone",
              placeholder: "000000000000000",
              type: "number",
              isRequired: true,
              state: phone,
              setState: setPhone,
            },
            {
              id: "email",
              label: "email",
              placeholder: "example@example.com",
              type: "email",
              isRequired: true,
              state: email,
              setState: setEmail,
            },
          ].map((item) => (
            <TextInput
              key={item?.id}
              name={item?.id}
              type={item?.type}
              value={item?.state}
              onChange={(e) => item?.setState(e.target.value)}
              label={item?.label}
              placeholder={item?.placeholder}
              required={item?.isRequired}
              id={item?.id}
            />
          ))}
        </div>
        <div className="w-full">
          <TextAreaInput
            value={message}
            name="message"
            onChange={(e) => setMessage(e.target.value)}
            required={true}
            id="message"
            label="Message"
            placeholder="Type message here"
          />
        </div>
        <Button
          type="submit"
          title="submit"
          className=" w-full"
          isLoading={isSubmitting}
        >
          Submit
        </Button>
        <p>
          <span className=" font-bold">For Inquiries:</span> Do you have
          questions about how AnonymizeCare can help you? Send us an email and
          we’ll get in touch, or phone +234 (0) 809 000 1111 between 08:00 and
          17:00 Monday to Friday — we would be delighted to speak.
        </p>
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
