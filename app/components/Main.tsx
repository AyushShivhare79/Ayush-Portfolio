"use client";

import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import Box from "./Box";
import Marquee from "./Marquee ";

export default function () {
  return (
    <>
      <BackgroundBeamsWithCollision className="from-black to-black">
        <Box />
      </BackgroundBeamsWithCollision>
      <div className="container mx-auto text-white overflow-x-hidden">
        <Marquee />
      </div>
    </>
  );
}
