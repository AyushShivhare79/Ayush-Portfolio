import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ExperienceCard from "./ExperienceCard";

export default function Experience() {
  return (
    <>
      <div className="flex flex-col justify-center items-center text-5xl pt-20 pb-10">
        <h1 className="py-5">My experience</h1>
        <div>
          <ExperienceCard />
          <ExperienceCard />
        </div>
      </div>
    </>
  );
}
