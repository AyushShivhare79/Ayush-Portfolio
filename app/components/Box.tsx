"use client";

import SocialIcon from "./SocialIcon";
import { Button } from "@/components/ui/button";
import TailwindButton from "./TailwindButton";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { Link } from "react-scroll";

export default function Box() {
  const words = [
    { text: "Full Stack" },
    { text: "Stack" },
    { text: "Developer", className: "text-blue-500 font-Tailpoppins text-5xl" },
  ];
  return (
    <>
      <div className="flex justify-center flex-col items-center h-full gap-5">
        <div className="flex justify-center flex-col items-center font-medium text-8xl">
          <h1 className="font-Tailpoppins">Ayush Shivhare</h1>
          <TypewriterEffectSmooth words={words} />
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
