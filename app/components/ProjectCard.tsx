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
  image: any;
  trynow: string;
  github: string;
}
export default function CustomCard({
  title,
  description,
  image,
  trynow,
  github,
}: card) {
  return (
    <>
      <Card className="border border-slate-700 cursor-pointer transition-all duration-300 hover:-translate-y-3 w-full bg-black text-white">
        <CardHeader className="text-2xl">
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{description}</p>
          <p>Tech Stack: {image}</p>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button>Try now</Button>
          <Button>GitHub</Button>
        </CardFooter>
      </Card>
    </>
  );
}
