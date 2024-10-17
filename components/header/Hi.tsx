import Image from "next/image";
import { PiHandWavingLight } from "react-icons/pi";

function Hi() {
  return (
    <div className="border border-slate-300 rounded-xl py-2 px-4 flex items-center gap-3 text-sm">
      <Image
        className="rounded-full"
        height={35}
        width={35}
        src="/me.jpg"
        alt=""
      />
      Hi, everybody
      <PiHandWavingLight className="text-lg" />
    </div>
  );
}

export default Hi;
