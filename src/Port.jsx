import { useState } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Port() {
  const [isOpen, setIsOpen] = useState(false);
  const Navlinks = ["About", "Projects", "Contact"];

  return (
    <main className="min-h-screen font-headline">
      <nav className="sticky top-0 z-50 bg-mainbg border-b border-gray-300">
        <div className="w-[85%] justify-self-center flex flex-row justify-between py-3">
          <a
            href="#hero"
            className="text-2xl font-bold text-primaryaccent hover:text-secondaryaccent"
          >
            TOBILOBA
          </a>
          <button
            className="lg:hidden text-xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "✖" : "☰"}
          </button>
          <div
            className={`flex flex-col gap-8 lg:flex-row ${
              isOpen ? "block" : "hidden"
            } lg:flex`}
          >
            {Navlinks.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-xl">
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
