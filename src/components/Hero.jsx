import React from "react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="flex justify-center items-center p-5 lg:p-15"
    >
      <div className="md:w-[75%] grid lg:grid-cols-2 items-center">
        <div className="flex flex-col justify-center h-full lg:py-20">
          <h1 className="text-5xl font-bold mb-2 leading-tight lg:mb-4">
            Hi, I am <br />
            <span className="text-frenchblue">Onabanjo Oluwatobiloba.</span>
          </h1>
          <h2 className="text-3xl mb-4 text-amberglow leading-tight">
            A passionate Frontend developer turning ideas into modern,
            responsive, and user-friendly websites.
          </h2>
          <p className="text-xl mb-3 md:mb-8 text-gray-500">
            I specialize in creating beautiful and functional web applications
            using modern technologies like React, Tailwind CSS, and more.
          </p>
          <div className="flex gap-3">
            <a
              href="#projects"
              className="bg-frenchblue text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition w-fit"
            >
              View My Projects
            </a>

            <a
              href="#contact"
              className="border border-frenchblue text-black px-6 py-3 rounded-lg hover:bg-frenchblue hover:text-white transition w-fit"
            >
              Get In Touch
            </a>
          </div>
        </div>
        <div>
          <img
            src="/placeholder.jpg"
            alt="placeholder"
            className=" scale-[75%]"
          />
        </div>
      </div>
    </section>
  );
}
