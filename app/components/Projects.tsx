"use client";

import Heading from "./Heading";
import CustomCard from "./ProjectCard";

export default function Projects() {
  return (
    <>
      <div className="flex flex-col justify-center items-center ">
        <Heading id="projects" title="My Projects" />
        <div className="grid grid-cols-2 gap-10">
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
