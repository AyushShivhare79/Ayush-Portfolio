import { FloatingDock } from "@/components/ui/floating-dock";
import { SiGithub, SiGmail, SiLinkedin, SiX } from "react-icons/si";

export default function () {
  const links = [
    {
      title: "Github",
      icon: <SiGithub className="h-full w-full text-black" />,
      href: "#",
    },
    {
      title: "Linkedin",
      icon: <SiLinkedin className="h-full w-full text-black" />,
      href: "#",
    },
    {
      title: "Twitter",
      icon: <SiX className="h-full w-full text-black" />,
      href: "#",
    },
    {
      title: "Gmail",
      icon: <SiGmail className="h-full w-full text-black" />,
      href: "#",
    },
  ];
  return (
    <>
      <div>
        <FloatingDock
          desktopClassName="bg-black border border-white w-full"
          mobileClassName="bg-black"
          items={links}
        />
      </div>
    </>
  );
}
