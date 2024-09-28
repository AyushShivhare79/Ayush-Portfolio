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

//Fix the issue of scroll space
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
      <div className="border border-white">
        <div className="flex">
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            className="flex flex-shrink-0 gap-14 text-6xl"
          >
            <SiHtml5 />
            <SiCss3 />
            <SiJavascript />
            <SiTypescript />
            <SiReact />
            <SiNextdotjs />
            <SiNodedotjs />
            <SiMongodb />
            <SiPostgresql />
            <SiRedis />
            <SiGit />
            <SiGithub />
            <SiPostman />
          </motion.div>

          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            className="flex flex-shrink-0 gap-14 text-6xl"
          >
            <SiHtml5 />
            <SiCss3 />
            <SiJavascript />
            <SiTypescript />
            <SiReact />
            <SiNextdotjs />
            <SiNodedotjs />
            <SiMongodb />
            <SiPostgresql />
            <SiRedis />
            <SiGit />
            <SiGithub />
            <SiPostman />
          </motion.div>
        </div>
      </div>
    </>
  );
}
