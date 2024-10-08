import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface card {
  title: string;
  description: string;
  stack: any;
  trynow: string;
  github: string;
}
export default function CustomCard({
  title,
  description,
  stack,
  trynow,
  github,
}: card) {
  return (
    <>
      <Card className="border border-slate-700 cursor-pointer transition-all duration-300 hover:scale-105 w-full bg-black text-white ">
        <CardHeader className="text-2xl">
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{description}</p>
          {/* <p>Tech Stack: {stack}</p> */}
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button>Try now</Button>
          <Button className="bg-white text-black hover:bg-slate-300">
            GitHub
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}
