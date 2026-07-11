import { useState } from "react";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function Port() {
  const [isDark, setDark] = useState(false);

  const toggleMode = () => {
    setDark(!isDark);
  };

  return (
    <main
      className={`min-h-screen font-headline bg-mainbg dark:bg-mainbg-dark ${
        isDark ? "dark" : ""
      }`}
    >
      <Navbar isDark={isDark} toggleMode={toggleMode} />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
