"use client";

import SocialIcon from "./SocialIcon";

export default function Footer() {
  return (
    <>
      <div className="flex flex-col justify-center md:justify-between md:items-center md:px-40 py-24 border border-white bg-slate-950">
        <div className="text-base md:text-xl">Designed and Developed by Ayush Shivhare</div>
        <SocialIcon />
      </div>
    </>
  );
}
