"use client";
import Typewriter from "typewriter-effect";
import SocialIcon from "./SocialIcon";

export default function Box() {
  return (
    <>
      <div className="flex justify-center flex-col items-center gap-5 font-semibold border border-white text-7xl font-serif h-[700px]">
        <h1>Ayush Shivhare</h1>
        <Typewriter
          options={{
            strings: ["Full Stack Developer"],
            autoStart: true,
            loop: true,
          }}
        />
        <SocialIcon />
      </div>
    </>
  );
}
