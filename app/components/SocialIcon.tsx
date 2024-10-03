import { SiGithub, SiGmail, SiLinkedin, SiX } from "react-icons/si";
import { Dock, DockIcon } from "@/components/ui/dock";

export default function ({ border = false }: { border?: boolean }) {
  const items = [
    {
      icon: <SiGithub className="h-full w-full text-black" />,
      href: "#",
    },
    {
      icon: <SiLinkedin className="h-full w-full text-black" />,
      href: "#",
    },
    {
      icon: <SiX className="h-full w-full text-black" />,
      href: "#",
    },
    {
      icon: <SiGmail className="h-full w-full text-black" />,
      href: "#",
    },
  ];
  return (
    <>
      <Dock
        magnification={60}
        distance={100}
        className="flex gap-3 border-none"
      >
        {items.map((value, index) => (
          <DockIcon key={index} className="bg-white size p-3">
            {value.icon}
          </DockIcon>
        ))}
      </Dock>
    </>
  );
}
