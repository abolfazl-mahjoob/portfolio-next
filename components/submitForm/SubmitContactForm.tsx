"use client";

import { useFormStatus } from "react-dom";
import { TbLoader2 } from "react-icons/tb";

const SubmitContactForm = () => {
  const { pending } = useFormStatus();
  return (
    <button
      className="h-10 text-sm flex justify-center items-center gap-3 bg-second transition-all hover:bg-main rounded-md text-white font-semibold capitalize"
      type="submit"
    >
      {pending && <TbLoader2 className="animate-spin text-xl" />}
      send
    </button>
  );
};

export default SubmitContactForm;
