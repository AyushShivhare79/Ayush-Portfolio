"use client";

import useScreenDetector from "../../hooks/useScreenDetector";
import { forwardRef, RefObject } from "react";
import NavbarMob from "./NavbarMob";
import NavbarDesk from "./NavbarDesk";
import { motion } from "framer-motion";
// import { navItems } from "@/data";

const Navbar = forwardRef<
  HTMLDivElement,
  {
    experienceRef: RefObject<HTMLDivElement>;
    projectsRef: RefObject<HTMLDivElement>;
    contactRef: RefObject<HTMLDivElement>;
  }
>(({ experienceRef, projectsRef, contactRef }, ref) => {
  const { isMobile, isTablet, isDesktop } = useScreenDetector();

  return (
    <>
      {/* <motion.div
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      > */}
        {isDesktop ? (
          <NavbarDesk
            projectsRef={projectsRef}
            experienceRef={experienceRef}
            contactRef={contactRef}
          />
        ) : (
          <NavbarMob />
        )}
      {/* </motion.div> */}
    </>
  );
});

export default Navbar;
