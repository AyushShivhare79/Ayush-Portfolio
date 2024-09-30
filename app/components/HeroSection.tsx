"use client";

import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import Box from "./Box";
import Marquee from "./Marquee ";

import { motion } from "framer-motion";
import Projects from "./Projects";

export default function () {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 200 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeIn" }}
      >
        <BackgroundBeamsWithCollision className="from-black to-black">
          <Box />
        </BackgroundBeamsWithCollision>
        <div className="container mx-auto text-white overflow-x-hidden">
          <Marquee />
        </div>
        <Projects />
      </motion.div>
    </>
  );
}
