"use client";

import { GoGoal, GoHome, GoMention, GoPerson } from "react-icons/go";
import { ReactElement, useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type ListNav = {
  title: string;
  icon: ReactElement;
  link: string;
}[];

const listNav: ListNav = [
  {
    title: "home",
    icon: <GoHome />,
    link: "/",
  },
  {
    title: "about",
    icon: <GoPerson />,
    link: "/about",
  },
  {
    title: "contact",
    icon: <GoMention />,
    link: "/contact",
  },
  {
    title: "experts",
    icon: <GoGoal />,
    link: "/experts",
  },
];

function Navbar() {
  const [currentPage, setCurrentPage] = useState("");

  useEffect(() => {
    const pathname = usePathname;
    setCurrentPage(pathname);
  }, [currentPage]);

  return (
    <ul>
      {listNav.map((el) => (
        <li className="mb-1 nav-link" key={el.link}>
          <Link
            className={`${
              currentPage == el.link ? "text-main active-menu" : "text-white"
            } flex text-xs items-center gap-3 py-2 px-7 transition-all duration-300 capitalize relative`}
            href={el.link}
          >
            <span className="text-lg">{el.icon}</span>
            {el.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default Navbar;
