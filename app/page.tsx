import Navbar from "./components/Navbar";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}
