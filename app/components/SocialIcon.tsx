import { FloatingDock } from "@/components/ui/floating-dock";
import { SiGithub, SiGmail, SiLinkedin, SiX } from "react-icons/si";

export default function ({ border = false }: { border?: boolean }) {
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
          desktopClassName={`bg-black ${
            border ? "border border-white rounded-full" : "border-hidden	"
          } w-full`}
          mobileClassName="bg-black"
          items={links}
        />
      </div>
    </>
  );
}


const Cursor = () => {
  return (
    <>
      <div className=""></div>
    </>
  )
}