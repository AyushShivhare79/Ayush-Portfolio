"use client";

import SocialIcon from "./SocialIcon";
import { Button } from "@/components/ui/button";
import TailwindButton from "./TailwindButton";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { forwardRef, useRef } from "react";
import { Link } from "react-scroll";

export default function Box() {
  const startText = [
    { text: "Full", className: "text-white font-Tailpoppins text-5xl" },
    { text: "Stack", className: "text-white font-Tailpoppins text-5xl" },
    { text: "Developer", className: "text-blue-500 font-Tailpoppins text-5xl" },
  ];
  return (
    <>
      <div className="flex justify-center flex-col items-center gap-5 h-[700px]">
        <div className="flex justify-center flex-col items-center font-semibold text-8xl gap-5">
          <h1 className="font-Tailpoppins">Ayush Shivhare</h1>
          <TypewriterEffect words={startText} />
        </div>
        <SocialIcon border={true} />
        <div className="flex justify-center items-center gap-5">
          <TailwindButton text="Download My Resume" />

          <Link to="contact" smooth={true} duration={500}>
            <Button className="text-center rounded-full h-12 bg-blue-600 text-white hover:text-black hover:bg-white">
              Contact Me
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}
