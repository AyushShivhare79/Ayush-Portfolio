import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface cardType {
  title: string;
  address: string;
  company: string;
  description: string;
  month: string;
}
export default function ExperienceCard({
  title,
  address,
  company,
  description,
  month,
}: cardType) {
  return (
    <>
      <Card className="border border-slate-700 p-5 text-2xl bg-black text-white">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{address}</p>
          <p>{company}</p>
          <p className="text-base pt-5 text-slate-300">{description}</p>
        </CardContent>
        <CardFooter>
          <p>{month}</p>
        </CardFooter>
      </Card>
    </>
  );
}
