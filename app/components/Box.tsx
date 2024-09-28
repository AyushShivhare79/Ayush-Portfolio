"use client";
import Typewriter from "typewriter-effect";
import SocialIcon from "./SocialIcon";
import { Button } from "@/components/ui/button";
import { RainbowButton } from "@/components/ui/rainbow-button";

export default function Box() {
  return (
    <>
      <div className="flex justify-center flex-col items-center gap-5 border border-white h-[700px]">
        <div className="flex justify-center flex-col items-center font-semibold text-7xl font-serif">
          <h1>Ayush Shivhare</h1>
          <Typewriter
            options={{
              strings: ["Full Stack Developer"],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <SocialIcon />
        <div className="flex justify-center items-center gap-5">
          <RainbowButton>Download My Resume</RainbowButton>
          <Button className="bg-blue-600 text-white rounded-xl h-11">
            Contact Me
          </Button>
        </div>
      </div>
    </>
  );
}
