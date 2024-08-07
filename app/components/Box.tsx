"use client";

import Typewriter from "typewriter-effect";

export default function Box() {
  return (
    <>
      <div className="flex justify-center flex-col items-center border border-black text-6xl font-mono h-[400px]">
        <h1>Ayush Shivhare</h1>
        <Typewriter
          options={{
            strings: ["Full-Stack Developer"],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
    </>
  );
}
