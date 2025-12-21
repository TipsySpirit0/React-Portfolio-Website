import { useState } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Port() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setDark] = useState(false);
  const Navlinks = ["About", "Projects", "Contact"];

  const SunIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-5 h-5 text-primarytext dark:text-primarytext-dark"
    >
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  );

  const MoonIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-5 h-5 text-primarytext dark:text-primarytext-dark"
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );

  return (
    <main className={`min-h-screen font-headline ${isDark ? "dark" : ""}`}>
      <nav className="sticky top-0 z-50 bg-mainbg dark:bg-mainbg-dark border-b border-gray-300 dark:border-gray-600">
        <div className="w-[85%] justify-self-center flex flex-row justify-between py-3">
          <a
            href="#hero"
            className="text-2xl font-bold text-primaryaccent dark:text-primaryaccent-dark hover:text-secondaryaccent dark:hover:text-secondaryaccent-dark"
          >
            TOBILOBA
          </a>
          <button
            className="lg:hidden text-xl text-primarytext dark:text-primarytext-dark"
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
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-xl text-primarytext dark:text-primarytext-dark"
              >
                {item}
              </a>
            ))}
            {/* Dark mode button */}
            <button onClick={() => setDark(!isDark)} classname="">
              {isDark ? <SunIcon /> : <MoonIcon />}
            </button>
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
