"use client";
import Link from "next/link";
import SocialIcon from "./SocialIcon";

export default function () {
  const Tab = ["Home", "Projects", "Experience", "About me", "Contact"];

  return (
    <>
      <div className="flex justify-between items-center px-40 py-3 ">
        <div className="flex gap-5">
          {Tab.map((value, index) => {
            return (
              <>
                <Link href="#" className="group transition duration-300">
                  <div>{value}</div>
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-blue-500"></span>
                </Link>
              </>
            );
          })}
        </div>
        <SocialIcon />
      </div>
    </>
  );
}
