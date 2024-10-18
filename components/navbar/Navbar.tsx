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
  const pathname = usePathname();
  const [currentPage, setCurrentPage] = useState("");

  useEffect(() => {
    setCurrentPage(pathname);
  }, [pathname]);

  return (
    <ul className="my-3 tablet:my-0">
      {listNav.map((el) => (
        <li className="mb-1 nav-link" key={el.link}>
          <Link
            className={`${
              currentPage == el.link ? "text-main active-menu" : "text-white"
            } flex text-xs items-center gap-3 justify-center tablet:justify-start py-3 tablet:py-2 tablet:px-7 transition-all duration-300 capitalize relative`}
            href={el.link}
          >
            <span className="text-xl tablet:text-lg">{el.icon}</span>
            <span className="hidden tablet:block">{el.title}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default Navbar;
