"use client"

import { useRouter } from "next/navigation";
import React, { useState } from "react";

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const router = useRouter();
  const Tab = [
    {
      link: "/",
      name: "Home",
    },
    {
      link: "projects",
      name: "Projects",
    },
    {
      link: "experience",
      name: "Experience",
    },
    {
      link: "contact",
      name: "Contact",
    },
  ];

  return (
    <nav className="relative">
      <div className="flex items-center justify-between py-4 px-6 border border-white">
        <button onClick={toggleMenu} className="focus:outline-none text-2xl">
          {isOpen ? "✕" : "☰"}
        </button>
        <div className="text-xl font-bold">Logo</div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center">
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-4 text-white text-2xl"
          >
            ✕
          </button>
          <ul className=" flex flex-col gap-5 text-center text-3xl">
            {Tab.map((value, index) => {
              return (
                <div key={index}>
                  <button
                    onClick={() => {
                      return router.push(value.link);
                    }}
                    className="group transition duration-300 cursor-pointer"
                  >
                    <div>{value.name}</div>
                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-blue-500"></span>
                  </button>
                </div>
              );
            })}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default MobileNavbar;
