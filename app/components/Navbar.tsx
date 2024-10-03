"use client";

import useScreenDetector from "../../hooks/useScreenDetector";
import NavbarMob from "./NavbarMob";
import NavbarDesk from "./NavbarDesk";
import { motion } from "framer-motion";
// import { navItems } from "@/data";

const Navbar = () => {
  const { isMobile, isTablet, isDesktop } = useScreenDetector();

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {isDesktop ? <NavbarDesk /> : <NavbarMob />}
      </motion.div>
    </>
  );
};

export default Navbar;
