import { Tab } from "@/types/Tab";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";

const MobileNavbar = ({ Tab }: { Tab: Tab[] }) => {
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();
  const toggleMenu = () => setIsOpen(!isOpen);

  const handleClick = (value: any) => {
    setIsOpen(!isOpen);
    if (value.link) {
      router.push(value.link);
    } else {
      value.ref.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  };
  return (
    <nav className="relative">
      <div
        className={`flex items-center justify-between py-4 px-6 ${
          isOpen && "fixed z-20"
        }`}
      >
        <button onClick={toggleMenu} className={`focus:outline-none text-2xl`}>
          {isOpen ? <FaXmark /> : <FaBars />}
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-black z-10 flex flex-col items-center justify-center">
          <div className="flex flex-col gap-5 text-center text-3xl">
            {Tab.map((value, index) => {
              return (
                <div key={index}>
                  <div
                    onClick={(e) => handleClick(value)}
                    className="group transition duration-300 cursor-pointer"
                  >
                    <div>{value.name}</div>
                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-blue-500"></span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};

export default MobileNavbar;
