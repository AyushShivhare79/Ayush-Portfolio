"use client";

import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import Box from "./Box";
import Marquee from "./Marquee ";
import { motion } from "framer-motion";
import Projects from "./Projects";
import Experience from "./Experience";
import Contact from "./Contact";

export default function () {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 250 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "linear" }}
        className="relative"
      >
        {/* <BackgroundBeamsWithCollision className="from-black to-black"> */}
        <Box />
        {/* </BackgroundBeamsWithCollision> */}
        <Projects />
        <Experience />
        <Contact />
      </motion.div>
    </>
  );
}
