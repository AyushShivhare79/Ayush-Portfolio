"use client";

import useScreenDetector from "../../hooks/useScreenDetector";
import NavbarMob from "./NavbarMob";
import NavbarDesk from "./NavbarDesk";
import { motion } from "framer-motion";
import { useScrollContext } from "@/app/context/useContextRef";

const Navbar = () => {
  const { isMobile, isTablet, isDesktop } = useScreenDetector();
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

  return (
    <>
      {/* <motion.div
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      > */}
      {isDesktop ? <NavbarDesk Tab={Tab} /> : <NavbarMob Tab={Tab} />}
      {/* </motion.div> */}
    </>
  );
};

export default Navbar;
