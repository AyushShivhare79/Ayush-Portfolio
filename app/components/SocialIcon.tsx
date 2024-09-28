import { SiGithub, SiGmail, SiLinkedin, SiX } from "react-icons/si";

export default function () {
  return (
    <>
      <div className="flex gap-10 text-4xl border border-white rounded-2xl px-10">
        <SiGithub />
        <SiLinkedin />
        <SiX />
        <SiGmail />
      </div>
    </>
  );
}
