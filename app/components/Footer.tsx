"use client";

import SocialIcon from "./SocialIcon";

export default function Footer() {
  return (
    <>
      <div className="flex justify-between items-center px-40 py-24 bg-slate-950">
        <div className="text-xl">Designed and Developed by Ayush Shivhare</div>
        <SocialIcon />
      </div>
    </>
  );
}
