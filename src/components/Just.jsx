// carousel

import { useState, useRef, useEffect } from "react";

export default function Carousel({ children }) {
  const [index, setIndex] = useState(0);
  const trackRef = useRef(null);

  const next = () => {
    if (index < children.length - 1) setIndex(index + 1);
  };
  const prev = () => {
    if (index > 0) setIndex(index - 1);
  };

  useEffect(() => {
    const slideWidth =
      trackRef.current.children[0].getBoundingClientRect().width;
    trackRef.current.style.transform = `translateX(-${index * slideWidth}px)`;
  }, [index]);

  return (
    <div className="relative w-full overflow-hidden">
      <div
        ref={trackRef}
        className="flex transition-transform duration-500 ease-out gap-4"
      >
        {children}
      </div>

      <button
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 
        bg-gray-800/50 text-white px-3 py-2 rounded-full hover:bg-gray-800"
      >
        ‹
      </button>

      <button
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 
        bg-gray-800/50 text-white px-3 py-2 rounded-full hover:bg-gray-800"
      >
        ›
      </button>
    </div>
  );
}

// using carousel
import Carousel from "./Carousel";

export default function PortfolioCarousel() {
  const projects = [
    {
      title: "Project One",
      description: "A full-stack web app built with React and Node.js.",
      image: "https://via.placeholder.com/300x200",
    },
    {
      title: "Project Two",
      description: "A responsive portfolio website with Tailwind CSS.",
      image: "https://via.placeholder.com/300x200",
    },
    {
      title: "Project Three",
      description: "A task manager app with authentication and database.",
      image: "https://via.placeholder.com/300x200",
    },
  ];

  return (
    <Carousel>
      {projects.map((project, i) => (
        <div
          key={i}
          className="min-w-full sm:min-w-[300px] md:min-w-[350px] lg:min-w-[400px]
                     bg-white rounded-lg shadow-lg flex flex-col overflow-hidden"
        >
          <img src={project.image} alt={project.title} className="h-48 w-full object-cover" />
          <div className="p-4">
            <h3 className="text-xl font-bold">{project.title}</h3>
            <p className="text-gray-600 mt-2">{project.description}</p>
          </div>
        </div>
      ))}
    </Carousel>
  );
}
