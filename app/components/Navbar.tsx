"use client";

import SocialIcon from "./SocialIcon";
import React, { forwardRef, RefObject } from "react";
// import { Link } from "react-scroll";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

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
    // {
    //   link: "/about",
    //   name: "About me",
    // },
    {
      ref: contactRef,
      link: "contact",
      name: "Contact",
    },
  ];

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex justify-between items-center py-3 px-40"
      >
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

                {/* {value.link[0] === "/" ? (
                  <>
                    <button
                      onClick={() => {
                        return router.push(value.link);
                      }}
                      className="group transition duration-300 cursor-pointer"
                    >
                      <div>{value.name}</div>
                      <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-blue-500"></span>
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      to={value.link}
                      smooth={true}
                      duration={500}
                      className="group transition duration-300 cursor-pointer"
                    >
                      <div>{value.name}</div>
                      <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-blue-500"></span>
                    </Link>
                  </>
                )} */}
              </div>
            );
          })}
        </div>
        {/* <SocialIcon /> */}
      </motion.div>
    </>
  );
});

export default Navbar;
