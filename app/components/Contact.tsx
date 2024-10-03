"use client";

import Heading from "./Heading";
import { useScrollContext } from "../context/useContextRef";

export default function Contact() {
  const { contactRef } = useScrollContext();
  return (
    <>
      <div ref={contactRef} className="flex justify-center  items-center">
        <Heading id="contact" title="Contact" />
      </div>
    </>
  );
}
