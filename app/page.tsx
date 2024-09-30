import Navbar from "./components/Navbar";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Experience />
      <Footer />
      {/* <About /> */}
    </>
  );
}
