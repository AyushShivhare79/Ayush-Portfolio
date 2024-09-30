"use client";

import Link from "next/link";
import SocialIcon from "./SocialIcon";

export default function Navbar() {
  const Tab = [
    {
      link: "#",
      name: "Home",
    },
    {
      link: "#projects",
      name: "Projects",
    },
    {
      link: "#experience",
      name: "Experience",
    },
    {
      link: "#",
      name: "About me",
    },
    {
      link: "#",
      name: "Contact",
    },
  ];

  return (
    <>
      <div className="flex justify-between items-center px-40 py-3 ">
        <div className="flex gap-5">
          {Tab.map((value, index) => {
            return (
              <>
                <Link
                  href={value.link}
                  className="group transition duration-300"
                >
                  <div>{value.name}</div>
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-blue-500"></span>
                </Link>
              </>
            );
          })}
        </div>
        <SocialIcon />
      </div>
    </>
  );
}
