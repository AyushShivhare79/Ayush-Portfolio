import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function () {
  return (
    <>
      <div className="flex flex-col justify-center text-5xl">
        <h1>My Projects</h1>
        <Card>
          <CardHeader>
            <CardTitle>Cxchain</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <Button>Try now</Button>
            <Button>GitHub</Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
