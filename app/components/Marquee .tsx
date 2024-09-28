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

export default function () {
  return (
    <>
      <div className="flex gap-2 text-7xl">
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
      </div>
    </>
  );
}
