"use client";

import { useEffect, useRef } from "react";
import Heading from "./Heading";
import CustomCard from "./ProjectCard";
import { SiSolana } from "react-icons/si";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import Experience from "./Experience";

export default function () {
  const ref1 = useRef<HTMLDivElement | null>(null);
  const ref2 = useRef<HTMLDivElement | null>(null);

  return (
    <>
      {/* <motion.div
        initial={{ opacity: 0, y: 200 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeIn" }}
      >
        <HeroSection /> */}
      <div className="flex flex-col justify-center items-center ">
      <Heading id="projects" title="My Projects" />
      <div className="grid grid-cols-2 gap-10">
        <CustomCard
          title="Cxchain"
          description="Create your solana wallet using only google account."
          image={"asdf"}
          trynow="#"
          github="#"
        />
        <CustomCard
          title="Blogging"
          description=""
          image={"asdf"}
          trynow="#"
          github="#"
        />
        <CustomCard
          title="Portfolio"
          description="A portfolio handcrafted by me."
          image={"asdf"}
          trynow="#"
          github="#"
        />
        <CustomCard
          title="Venmo"
          description="An wallet app where user can send, receive, and add money from thier bank account."
          image={"asdf"}
          trynow="#"
          github="#"
        />
      </div>
      </div>
      {/* </motion.div> */}
    </>
  );
}
