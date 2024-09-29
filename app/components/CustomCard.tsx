import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
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
      <Card className="cursor-pointer transition-all duration-200 hover:-translate-y-2 w-full bg-black text-white hover:bg-white  hover:text-black">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <p>{image}</p>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button>Try now</Button>
          <Button>GitHub</Button>
        </CardFooter>
      </Card>
    </>
  );
}
