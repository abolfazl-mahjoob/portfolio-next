"use client";

import { useEffect, useState } from "react";
import { useFormState } from "react-dom";
import "./style.css";
import contactForm from "@/utility/action";
import SubmitContactForm from "@/components/submitForm/SubmitContactForm";

const initialState = {
  status: 0,
  message: "",
  error: "",
};

const Page = () => {
  const [state, formAction] = useFormState(contactForm, initialState);
  const [messageStatus, setMessageStatus] = useState<boolean>(false);

  useEffect(() => {
    if (state.status > 0) {
      setMessageStatus(true);
    }
    if (state.status === 200) {
      document.querySelectorAll("input").forEach((el) => {
        el.value = "";
      });
      document.querySelectorAll("textarea").forEach((el) => {
        el.value = "";
      });
    }
    const timer = setTimeout(() => {
      setMessageStatus(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, [state, state.status]);

  return (
    <div className="contact">
      <div className="text-lg font-bold border-b-2 border-main w-fit py-1">
        Contact Me
      </div>
      <p className="text-sm text-justify my-5">
        Employers are invited to reach out for potential collaborations, project
        inquiries, or any professional opportunities. I am eager to connect and
        discuss how I can contribute to your projects and help achieve your
        goals. Please fill out the contact form below with your details, and I
        will respond as soon as possible. I look forward to hearing from you!
      </p>
      <form className="flex flex-col gap-4 contact" action={formAction}>
        <div className="flex gap-4">
          <input
            name="fullname"
            type="text"
            placeholder="Fullname *"
            className={`border ${
              state.error === "fullname" ? "border-red-500" : "border-slate-200"
            }`}
          />
          <input
            name="company"
            type="text"
            placeholder="Company"
            className="border border-slate-200"
          />
        </div>
        <input
          name="email"
          type="email"
          placeholder="Email *"
          className={`border ${
            state.error === "email" ? "border-red-500" : "border-slate-200"
          }`}
        />
        <input
          name="phone"
          type="tel"
          placeholder="Phone"
          className="border border-slate-200"
        />
        <textarea
          name="message"
          placeholder="Message *"
          className={`border ${
            state.error === "message" ? "border-red-500" : "border-slate-200"
          }`}
        ></textarea>
        {messageStatus && (
          <p
            className={`text-sm text-center p-2 font-bold rounded-md ${
              state.status === 200
                ? "bg-green-200 text-green-600"
                : "bg-red-200 text-red-500"
            }`}
          >
            {state.message}
          </p>
        )}
        <SubmitContactForm />
      </form>
    </div>
  );
};

export default Page;
