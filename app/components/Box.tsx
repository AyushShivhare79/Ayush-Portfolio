"use client";

import SocialIcon from "./SocialIcon";
import { Button } from "@/components/ui/button";
import TailwindButton from "./TailwindButton";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";

export default function Box() {
  const startText = [
    { text: "Full", className: "text-white font-Tailpoppins" },
    { text: "Stack", className: "text-white font-Tailpoppins" },
    { text: "Developer", className: "text-blue-500 font-Tailpoppins" },
  ];
  return (
    <>
      <div className="flex justify-center flex-col items-center gap-5 h-[700px]">
        <div className="flex justify-center flex-col items-center font-semibold text-7xl font-serif">
          <h1 className="font-Tailpoppins">Ayush Shivhare</h1>
          <TypewriterEffect words={startText} />
        </div>
        <SocialIcon />
        <div className="flex justify-center items-center gap-5">
          <TailwindButton text="Download My Resume" />
          <Button className="bg-blue-600 text-white rounded-xl h-11 hover:text-black hover:bg-white">
            Contact Me
          </Button>
        </div>
      </div>
    </>
  );
}
