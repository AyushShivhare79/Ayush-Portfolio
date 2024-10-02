import ExperienceCard from "./ExperienceCard";
import Heading from "./Heading";

export default function Experience() {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <Heading id="experience" title="My experience" />
        <div className="flex flex-col gap-10 w-full px-4 md:px-0 md:w-1/2">
          <ExperienceCard
            title={"Freelance Back-End Developer"}
            address="Remote"
            company="Self-Employed"
            description={`I developed a scalable Authentication and Authorization system using a modern serverless tech stack. The backend leverages Hono.js for fast API development, while Cloudflare Workers provides global edge computing for low-latency execution. Drizzle ORM ensures efficient database operations, and Upstash Redis is used for OTP storage and caching to enhance performance. Additionally, Resend facilitates seamless serverless email services for user verification and password recovery. This architecture combines security, speed, and scalability without the need for managing underlying infrastructure.`}
            month="August 2024 - September 2024"
          />
          <ExperienceCard
            title={"Open Source"}
            address="Remote"
            company="Self-Employed"
            description={`I actively contribute to an open-source edtech startup, where I’ve won multiple bounties for resolving key issues. One of my notable contributions was implementing dynamic certificates for students upon course completion. The startup uses a monorepo architecture with Next.js, Prisma, and other modern technologies, allowing me to work across various parts of the stack and deliver scalable, impactful solutions. My contributions have significantly enhanced the platform’s functionality and user experience.`}
            month="June 2024 - July 2024"
          />
        </div>
      </div>
    </>
  );
}
