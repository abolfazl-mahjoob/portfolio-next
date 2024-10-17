import Aside from "@/template/Aside";
import Header from "@/template/Header";
import Image from "next/image";
import Link from "next/link";
import { ReactElement } from "react";
import { BiLogoGmail } from "react-icons/bi";
import { BsLinkedin, BsGithub } from "react-icons/bs";

const Template = ({ children }: { children: ReactElement }) => {
  return (
    <div className="max-w-[1300px] w-full my-0 mx-auto px-0 py-5 flex flex-col gap-4 h-full">
      <Header />
      <div className="flex gap-5 h-0 grow">
        <Aside />
        <div className="template-grid">
          <div className="template-item-1">
            <Image
              src={"/abolfazl.JPG"}
              width={500}
              height={450}
              alt="abolfazl mahjoob"
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>
          <div className="template-item-2 flex items-center justify-between">
            <h2 className="text-xl font-thin">Social Media</h2>
            <div className="social flex gap-3">
              <a href="https://www.linkedin.com/in/abolfazl-mahjoob">
                <BsLinkedin />
              </a>
              <a href="https://github.com/abolfazl-mahjoob/">
                <BsGithub />
              </a>
              <a href="mailto:abolfazlmahjoobravesh@gmail.com">
                <BiLogoGmail />
              </a>
            </div>
          </div>
          <div className="template-item-3">
            <div className="overflow-auto h-full  flex flex-col">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">testimonial</h2>
                <div className="bg-third rounded-md flex flex-col p-1 leading-6 text-white text-2xl font-black">
                  5
                  <span className="font-normal text-2xs leading-3 capitalize">
                    rate
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-4 flex-grow  mt-5">
                <p className="text-sm text-justify">
                  Looking for a developer who delivers quality solutions on
                  time? Let’s turn your ideas into reality! Click button to get
                  started and see how I can help your business grow.
                </p>
                <Link
                  className="h-10 rounded-lg bg-main mt-auto text-sm font-bold flex justify-center items-center text-white"
                  href={"/contact"}
                >
                  Hire me
                </Link>
              </div>
            </div>
          </div>
          <div className="template-item-4">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Template;
