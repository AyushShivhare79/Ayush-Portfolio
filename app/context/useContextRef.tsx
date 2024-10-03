"use client";

import { createContext, useContext, useRef, ReactNode, RefObject } from "react";

// Define the type for our sectionRefs
interface SectionRefs {
  projectRef: RefObject<HTMLDivElement>; // Change from HTMLElement to HTMLDivElement
  experienceRef: RefObject<HTMLDivElement>; // Same here
  contactRef: RefObject<HTMLDivElement>; // And here
}

// Create a context with the default value of `undefined` to handle refs
const ScrollContext = createContext<SectionRefs | undefined>(undefined);

// Define a provider component
export function ScrollProvider({ children }: { children: ReactNode }) {
  // Initialize refs for each section
  const sectionRefs: SectionRefs = {
    projectRef: useRef<HTMLDivElement>(null), // Updated the ref type
    experienceRef: useRef<HTMLDivElement>(null), // Updated the ref type
    contactRef: useRef<HTMLDivElement>(null), // Updated the ref type
  };

  return (
    <ScrollContext.Provider value={sectionRefs}>
      {children}
    </ScrollContext.Provider>
  );
}

// Custom hook to use the ScrollContext
export function useScrollContext(): SectionRefs {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error("useScrollContext must be used within a ScrollProvider");
  }
  return context;
}
