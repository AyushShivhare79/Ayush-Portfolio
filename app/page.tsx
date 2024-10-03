import Contact from "./components/Contact";
import Experience from "./components/Experience";
import HeroSection from "./components/HeroSection";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Projects />
      <Experience />
      <Contact />
    </>
  );
}
