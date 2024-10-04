import Link from "next/link";
import SocialIcon from "./SocialIcon";
import { Tab } from "@/types/Tab";

const Navbar = ({ Tab }: { Tab: Tab[] }) => {
  const handleClick = (sectionRef: any) => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  };
  return (
    <>
      <div className="flex justify-between items-center py-2 px-40">
        <div className="flex gap-5 text-lg">
          {Tab.map((value, index) => {
            return (
              <div key={index}>
                <Link
                  href="/"
                  onClick={(e) => handleClick(value.ref)}
                  className="group transition duration-300 cursor-pointer"
                >
                  <div>{value.name}</div>
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-blue-500"></span>
                </Link>
              </div>
            );
          })}
        </div>
        <SocialIcon />
      </div>
    </>
  );
};

export default Navbar;
