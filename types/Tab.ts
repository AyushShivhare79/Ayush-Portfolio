import { RefObject } from "react";

export interface Tab {
  name: string;
  link?: string;
  ref?: RefObject<HTMLDivElement> | undefined;
}
