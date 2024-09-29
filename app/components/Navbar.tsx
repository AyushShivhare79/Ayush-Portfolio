"use client";
import SocialIcon from "./SocialIcon";

export default function () {
  return (
    <>
      <div className="flex justify-between items-center px-40 py-3 ">
        <div className="flex gap-5">
          <div>Home</div>
          <div>Projects</div>
          <div>Experience</div>
          <div>Abount Me</div>
          <div>Contact</div>
        </div>
        <SocialIcon />
      </div>
    </>
  );
}
