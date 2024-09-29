import Navbar from "./components/Navbar";
import Box from "./components/Box";
import About from "./components/About";
import Projects from "./components/Projects";
import Marquee from "./components/Marquee ";
import Experience from "./components/Experience";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Box />
      <div className="container mx-auto text-white overflow-x-hidden">
        <Marquee />
      </div>
      <Projects />
      <Experience/>
      <Footer/>
      {/* <About /> */}
    </>
  );
}
