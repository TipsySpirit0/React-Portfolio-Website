import { useState } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function Port() {
  const [isDark, setDark] = useState(false);

  const toggleMode = () => {
    setDark(!isDark);
  };

  return (
    <main className={`min-h-screen font-headline ${isDark ? "dark" : ""}`}>
      <Navbar isDark={isDark} toggleMode={toggleMode} />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
