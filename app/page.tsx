import Navbar from "./components/Navbar";
import Box from "./components/Box";
import About from "./components/About";
import Projects from "./components/Projects";
import Marquee from "./components/Marquee ";

export default function Home() {
  return (
    <>
      <Navbar />
      <Box />
      <div className="container mx-auto text-white overflow-x-hidden">
        <Marquee />
      </div>
      <Projects />

      {/* <About /> */}
    </>
  );
}
