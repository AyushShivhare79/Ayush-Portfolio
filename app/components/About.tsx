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
      <Card>
        <CardHeader>
          <CardTitle>Connect with me</CardTitle>
        </CardHeader>
        <CardContent>
          <div>Twitter</div>
          <div>Github</div>
          <div>LinkedIn</div>
          <div>Mail</div>
        </CardContent>
      </Card>
    </>
  );
}
