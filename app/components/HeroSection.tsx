"use client";

import { useRef } from "react";
import Navbar from "./Navbar";
import Main from "./Main";
import Projects from "./Projects";
import Experience from "./Experience";
import Footer from "./Footer";
import Contact from "./Contact";
import { motion } from "framer-motion";

export default function () {
  const projectsRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <Navbar
        projectsRef={projectsRef}
        experienceRef={experienceRef}
        contactRef={contactRef}
      />
      <motion.div
        initial={{ opacity: 0, y: 250 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "linear" }}
      >
        <Main />
        <div ref={projectsRef}>
          <Projects />
        </div>
      </motion.div>
      <div ref={experienceRef}>
        <Experience />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
      <Footer />
    </>
  );
}
