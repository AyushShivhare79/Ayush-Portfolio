import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Experience() {
  return (
    <>
      <div className="flex flex-col justify-center items-center pt-20 pb-10">
        <h1>My experience</h1>
        <Card>
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
            technologies to deliver responsive and user-friendly designs that
            help businesses enhance their online presence.
          </CardDescription>
          <CardFooter>
            <p>August - September 2024</p>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
