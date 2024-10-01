"use client";

import SocialIcon from "./SocialIcon";
import { forwardRef } from "react";
import { Link } from "react-scroll";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

interface Tab {
  name: string;
  ref?: string;
  link?: string;
}

const Navbar = () => {
  const router = useRouter();

  const Tab = [
    {
      link: "/",
      name: "Home",
    },
    {
      link: "projects",
      name: "Projects",
    },
    {
      link: "experience",
      name: "Experience",
    },
    {
      link: "/about",
      name: "About me",
    },
    {
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
        className="flex justify-between items-center px-40 py-3 "
      >
        <div className="flex gap-5">
          {Tab.map((value, index) => {
            return (
              <div key={index}>
                {/* {value.ref ? (
                  <>
                    <button
                      onClick={() => {
                        ref?.current?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="group transition duration-300"
                    >
                      <div>{value.name}</div>
                      <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-blue-500"></span>
                    </button>
                  </>
                ) : ( */}
                {/* < Link */}
                {/* // href={value.link} */}
                {/* // className="group transition duration-300" */}
                {/* > */}

                {value.link[0] === "/" ? (
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
                )}

                {/* </Link> */}
                {/* )} */}
              </div>
            );
          })}
        </div>
        <SocialIcon />
      </motion.div>
    </>
  );
};

export default forwardRef(Navbar);

// const buttonInside = () => {
//   return (
//     <>
//       <div>{value.name}</div>
//       <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-blue-500"></span>
//     </>
//   );
// };
