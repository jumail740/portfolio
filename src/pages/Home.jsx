import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Experience from "../components/Experience";
import CursorGlow from "../components/CursorGlow";
import Background from "../components/Background";
import Footer from "../components/Footer";




export default function Home() {
  return (
    <div>
        <Background />
        <CursorGlow />
        <div className="relative z-10">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
    </div>
  );
}