"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { useScrollContext } from "../context/useContextRef";

const Navbar = () => {
  const router = useRouter();
  const { projectRef, experienceRef, contactRef } = useScrollContext();

  const Tab = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Projects",
      ref: projectRef,
      link: "#projects",
    },
    {
      name: "Experience",
      ref: experienceRef,
      link: "#experience",
    },
    {
      name: "Contact",
      ref: contactRef,
      link: "#contact",
    },
  ];

  const handleClick = (sectionRef: any) => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <div className="flex justify-between items-center py-5 px-40">
        <div className="flex gap-5 text-lg">
          {Tab.map((value, index) => {
            return (
              <div key={index}>
                <Link
                  href="/"
                  onClick={(e: any) => handleClick(value.ref)}
                  className="group transition duration-300 cursor-pointer"
                >
                  <div>{value.name}</div>
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-blue-500"></span>
                </Link>
              </div>
            );
          })}
        </div>
        <div></div>
      </div>
    </>
  );
};

export default Navbar;
