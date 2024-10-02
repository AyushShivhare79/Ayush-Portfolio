"use client";

import SocialIcon from "./SocialIcon";
import { forwardRef, RefObject } from "react";
import { useRouter } from "next/navigation";

const Navbar = forwardRef<
  HTMLDivElement,
  {
    experienceRef: RefObject<HTMLDivElement>;
    projectsRef: RefObject<HTMLDivElement>;
    contactRef: RefObject<HTMLDivElement>;
  }
>(({ experienceRef, projectsRef, contactRef }, ref) => {
  const router = useRouter();
  const Tab = [
    {
      link: "/",
      name: "Home",
    },
    {
      ref: projectsRef,
      link: "projects",
      name: "Projects",
    },
    {
      ref: experienceRef,
      link: "experience",
      name: "Experience",
    },
    {
      ref: contactRef,
      link: "contact",
      name: "Contact",
    },
  ];

  return (
    <>
      <div className="flex justify-between items-center py-3 px-40 border border-white">
        <div className="flex gap-5 text-lg">
          {Tab.map((value, index) => {
            return (
              <div key={index}>
                {value.ref ? (
                  <button
                    onClick={() => {
                      value.ref?.current?.scrollIntoView({
                        behavior: "smooth",
                      });
                    }}
                    className="group transition duration-300"
                  >
                    <div>{value.name}</div>
                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-blue-500"></span>
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      return router.push(value.link);
                    }}
                    className="group transition duration-300 cursor-pointer"
                  >
                    <div>{value.name}</div>
                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-blue-500"></span>
                  </button>
                )}
              </div>
            );
          })}
        </div>
        <SocialIcon />
      </div>
    </>
  );
});

export default Navbar;
