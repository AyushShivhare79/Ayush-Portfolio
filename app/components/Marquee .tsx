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

export default function () {
  const icon = [
    <SiHtml5 />,
    <SiCss3 />,
    <SiJavascript />,
    <SiTypescript />,
    <SiReact />,
    <SiNextdotjs />,
    <SiNodedotjs />,
    <SiMongodb />,
    <SiPostgresql />,
    <SiRedis />,
    <SiGit />,
    <SiGithub />,
    <SiPostman />,
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
          {icon.map((value, index) => (
            <div> {value}</div>
          ))}
        </motion.div>

        <motion.div
          initial={{ x: 56 }}
          animate={{ x: "-100%" }}
          transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
          className="flex flex-shrink-0 gap-14 text-6xl"
        >
          {icon.map((value, index) => (
            <div> {value}</div>
          ))}
        </motion.div>
      </div>
    </>
  );
}
