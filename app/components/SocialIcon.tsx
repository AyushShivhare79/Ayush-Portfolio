import { SiGithub, SiGmail, SiLinkedin, SiX } from "react-icons/si";
import { motion } from "framer-motion";

export default function SocialIcon({ border = false }: { border?: boolean }) {
  const items = [
    {
      icon: <SiGithub />,
      href: "#",
    },
    {
      icon: <SiLinkedin />,
      href: "#",
    },
    {
      icon: <SiX />,
      href: "#",
    },
    {
      icon: <SiGmail />,
      href: "#",
    },
  ];
  return (
    <>
      {/* <Dock
        magnification={60}
        distance={100}
        className="flex gap-3 border-none"
      >
        {items.map((value, index) => (
          <DockIcon key={index} className="bg-white size p-3">
            {value.icon}
          </DockIcon>
        ))}
      </Dock> */}

      <div
        className={`flex justify-center items-center gap-5 text-4xl p-2 rounded-full text-white ${
          border ? "border border-white" : "border-none"
        }`}
      >
        {items.map((value, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -6 }}
            whileTap={{ scale: 1 }}
            className="text-white cursor-pointer rounded-full"
          >
            {value.icon}
          </motion.div>
        ))}
      </div>
    </>
  );
}
