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
        className="relative flex flex-col justify-center items-center border p-10 border-green-500 bg-blue-500 "
      >
        <Heading id="projects" title="My Projects" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <CustomCard
            title="Cxchain"
            description="Create your solana wallet using only google account."
            image={"asdf"}
            trynow="#"
            github="#"
          />
          <CustomCard
            title="Blogging"
            description=""
            image={"asdf"}
            trynow="#"
            github="#"
          />
          <CustomCard
            title="Portfolio"
            description="A portfolio handcrafted by me."
            image={"asdf"}
            trynow="#"
            github="#"
          />
          <CustomCard
            title="Venmo"
            description="An wallet app where user can send, receive, and add money from thier bank account."
            image={"asdf"}
            trynow="#"
            github="#"
          />
        </div>
      </div>
    </>
  );
}
