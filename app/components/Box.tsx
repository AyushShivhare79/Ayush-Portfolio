import SocialIcon from "./SocialIcon";
import { Button } from "@/components/ui/button";
import TailwindButton from "./TailwindButton";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { Link } from "react-scroll";
import Marquee from "./Marquee ";

export default function Box() {
  const words = [
    {
      text: "Full",
    },
    {
      text: "Stack",
    },
    { text: "Developer", className: "text-blue-500 font-Tailpoppins" },
  ];
  return (
    <>
      <div className="sticky top-0 flex justify-center flex-col items-center h-screen w-full gap-10 bg-black">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl md:font-medium md:text-8xl font-Tailpoppins">
            Ayush Shivhare
          </h1>
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
        <div className="container mx-auto text-white overflow-x-hidden">
          <Marquee />
        </div>
      </div>
    </>
  );
}
