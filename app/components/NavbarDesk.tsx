import Link from "next/link";
import SocialIcon from "./SocialIcon";
import { Tab } from "@/types/Tab";
import { useRouter } from "next/navigation";

const Navbar = ({ Tab }: { Tab: Tab[] }) => {
  const router = useRouter();
  const handleClick = (value: any) => {
    if (value.link) {
      router.push(value.link);
    } else {
      value.ref.current.scrollIntoView({
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
        <SocialIcon />
      </div>
    </>
  );
};

export default Navbar;
