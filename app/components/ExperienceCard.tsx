"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

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
  const boxVariant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.2 } },
    hidden: { opacity: 0, scale: 0.8 },
  };
  const ref = useRef<HTMLDivElement>(null);
  const control = useAnimation();
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, isInView]);

  return (
    <>
      <motion.div
        ref={ref}
        variants={boxVariant}
        initial="hidden"
        animate={control}
      >
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
      </motion.div>
    </>
  );
}
