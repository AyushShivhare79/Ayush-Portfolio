"use client";

import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiMongodb,
  SiPostgresql,
  SiRedis,
  SiGit,
  SiGithub,
  SiPostman,
} from "react-icons/si";
import { motion } from "framer-motion";

export default function Marquee() {
  const icons = [
    {
      icons: <SiHtml5 />,
    },
    {
      icons: <SiCss3 />,
    },
    {
      icons: <SiJavascript />,
    },
    {
      icons: <SiTypescript />,
    },
    {
      icons: <SiReact />,
    },
    {
      icons: <SiNextdotjs />,
    },
    {
      icons: <SiNodedotjs />,
    },
    {
      icons: <SiMongodb />,
    },
    {
      icons: <SiPostgresql />,
    },
    {
      icons: <SiRedis />,
    },
    {
      icons: <SiGit />,
    },
    {
      icons: <SiGithub />,
    },
    {
      icons: <SiPostman />,
    },
  ];
  return (
    <>
      <div className="flex gap-14">
        <motion.div
          initial={{ x: 56 }}
          animate={{ x: "-100%" }}
          transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
          className="flex flex-shrink-0 gap-14 text-6xl"
        >
          {icons.map((value, index) => (
            <div key={index}>{value.icons}</div>
          ))}
        </motion.div>

        <motion.div
          initial={{ x: 56 }}
          animate={{ x: "-100%" }}
          transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
          className="flex flex-shrink-0 gap-14 text-6xl"
        >
          {icons.map((value, index) => (
            <div key={index}>{value.icons}</div>
          ))}
        </motion.div>
      </div>
    </>
  );
}
