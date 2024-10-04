"use client";

import useScreenDetector from "../../hooks/useScreenDetector";
import NavbarMob from "./NavbarMob";
import NavbarDesk from "./NavbarDesk";
import { motion } from "framer-motion";
import { useScrollContext } from "@/app/context/useContextRef";

const Navbar = () => {
  // const { isMobile, isTablet, isDesktop } = useScreenDetector();
  const device = useScreenDetector();

  const { projectRef, experienceRef, contactRef } = useScrollContext();

  const Tab = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Projects",
      ref: projectRef,
    },
    {
      name: "Experience",
      ref: experienceRef,
    },
    {
      name: "Contact",
      ref: contactRef,
    },
  ];

  return (
    <>
      {/* <motion.div
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      > */}
      {/* {isDesktop ? <NavbarDesk Tab={Tab} /> : <NavbarMob Tab={Tab} />} */}
      {/* </motion.div> */}

      {device?.isDesktop ? (
        <NavbarDesk Tab={Tab} />
      ) : (
        <NavbarMob Tab={Tab} />
      )}
    </>
  );
};

export default Navbar;
