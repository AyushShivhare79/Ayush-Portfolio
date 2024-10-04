"use client";

import { useScrollContext } from "../context/useContextRef";
import Heading from "./Heading";
import CustomCard from "./ProjectCard";

export default function Projects() {
  const { projectRef } = useScrollContext();

  return (
    <>
      <div
        ref={projectRef}
        className="relative flex flex-col justify-center items-center p-10 bg-blue-500 "
      >
        <Heading id="projects" title="My Projects" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <CustomCard
            title="Cxchain"
            description="Create your Solana wallet instantly with just your Google account - no seed phrases, no hassle. Start your crypto journey in seconds with secure, simple one-click access."
            stack={""}
            trynow="https://cxchain.vercel.app"
            github="https://github.com/AyushShivhare79/cxchain"
          />
          <CustomCard
            title="Blogging"
            description="Ongoing"
            stack={""}
            trynow="#"
            github="#"
          />
          <CustomCard
            title="Portfolio"
            description="A portfolio handcrafted by me."
            stack={""}
            trynow="#"
            github="#"
          />
          <CustomCard
            title="Venmo"
            description="Your all-in-one digital wallet for effortless money management. Send money to friends, and handle transfers with just a few taps"
            stack={""}
            trynow="#"
            github="https://github.com/AyushShivhare79/Venmo"
          />
        </div>
      </div>
    </>
  );
}
