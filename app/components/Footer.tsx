"use client";

import SocialIcon from "./SocialIcon";

export default function Footer() {
  return (
    <>
      <div className="relative flex flex-col justify-center items-center text-center bg-slate-950 py-24 gap-5 px-5">
        <div className="text-xl">Designed and Developed by Ayush Shivhare</div>
        <SocialIcon />
      </div>
    </>
  );
}
