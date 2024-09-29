import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  
export default function ExperienceCard() {
  return (
    <>
      <Card className="border border-hidden w-1/2 text-3xl">
        <CardHeader>
          <CardTitle>Freelance Back-End Developer</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Remote</p>
          <p>Self-Employed</p>
        </CardContent>
        <CardDescription>
          As a freelance front-end developer, I specialize in creating dynamic
          and visually appealing landing pages. My work involves using modern
          technologies to deliver responsive and user-friendly designs that help
          businesses enhance their online presence.
        </CardDescription>
        <CardFooter>
          <p>August - September 2024</p>
        </CardFooter>
      </Card>
    </>
  );
}
