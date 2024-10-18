import Image from "next/image";
import { RiDoubleQuotesL } from "react-icons/ri";
import "./style.css";

const Page = () => {
  return (
    <div className="h-full overflow-auto pr-4 flex flex-col gap-5">
      <div className="flex gap-2 justify-between items-center">
        <div className="flex flex-col text-xl font-bold gap-1">
          Who Am I? <span className="text-sm">and, How It All Started?</span>
        </div>
        <Image
          className="h-20 object-cover rounded-lg"
          height={80}
          width={120}
          src="/kid.jpg"
          alt="abolfazl"
        />
      </div>
      <p className="text-sm text-justify">
        Five years ago, I took my first steps into the world of programming.
        Without any mentor or guidance, I found myself quite lost at the
        beginning. I started learning several languages like C++, Python,
        Kotlin, and PHP, but since I didn’t know how to apply them, they didn’t
        serve me well. Then I discovered HTML, CSS, and JavaScript. The fact
        that I could see the results of my work instantly fascinated me, and
        that’s where my real journey began.
      </p>
      <p className="text-sm text-justify">
        Gradually, I expanded my knowledge of JavaScript, delving deeper into
        React, Next.js, Node, and Express. I eventually returned to PHP and
        Python, but this time with a clear goal in mind. I mastered WordPress
        and Django. Today, I work as a full-stack developer, and right now, I’m
        diving into the world of data science and artificial intelligence. I’ve
        successfully trained a few models for image and text processing, but I’m
        still at the beginning of this journey. I know there’s a long way to go,
        and I’m committed to putting in the effort to reach my goals.
      </p>
      <ul className="grid grid-cols-2 gap-4 my-4 text-sm">
        <li className="flex flex-col gap-1">
          Personality Type:
          <span className="font-bold">INTJ</span>
        </li>
        <li className="flex flex-col gap-1">
          Age:
          <span className="font-bold">25</span>
        </li>
        <li className="flex flex-col gap-1">
          Hobbies:
          <span className="font-bold">
            Reading (novels), working out, and a passion for traveling
          </span>
        </li>
        <li className="flex flex-col gap-1">
          Interest outside of programming:
          <span className="font-bold">Art, Writing poetry</span>
        </li>
      </ul>
      <div className="text-lg font-bold my-1 border-b-2 border-main w-fit py-1">
        Gallery
      </div>
      <div className="gallery">
        <Image height={300} width={200} src="/haji.jpg" alt="" />
        <Image height={300} width={200} src="/b.jpg" alt="" />
        <Image height={300} width={200} src="/boat.jpg" alt="" />
        <Image height={300} width={200} src="/faramouj.jpg" alt="" />
        <Image height={300} width={200} src="/vibe.jpg" alt="" />
      </div>
      <div className="text-lg font-bold my-1 border-b-2 border-main w-fit py-1">
        One of my poems
      </div>
      <div className="poem">
        <RiDoubleQuotesL />
        <p>
          If you&apos;ve decided to leave, I won&apos;t ask you to stay.
          <br /> Go slowly,
          <br /> so I can gaze at you for just a little while longer.
        </p>
        <span>-abolfazl</span>
      </div>
    </div>
  );
};

export default Page;
