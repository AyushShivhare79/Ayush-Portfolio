"use client";

import useScreenDetector from "../../hooks/useScreenDetector";
import { forwardRef, RefObject } from "react";
import NavbarMob from "../components/MobileNavbar";
import NavbarDesk from "../components/Navbar";
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
      {isDesktop ? (
        <NavbarDesk
          projectsRef={projectsRef}
          experienceRef={experienceRef}
          contactRef={contactRef}
        />
      ) : (
        <NavbarMob />
      )}
    </>
  );
});

export default Navbar;
