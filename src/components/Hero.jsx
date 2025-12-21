import React from "react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="flex justify-center items-center p-5 lg:p-15 bg-mainbg dark:bg-mainbg-dark"
    >
      <div className="md:w-[75%] grid lg:grid-cols-2 items-center">
        <div className="flex flex-col justify-center h-full lg:py-20">
          <h1 className="text-5xl font-bold mb-2 leading-tight lg:mb-4 text-primarytext dark:text-primarytext-dark">
            Hi, I am <br />
            <span className="text-primaryaccent dark:text-primaryaccent-dark">Onabanjo Oluwatobiloba.</span>
          </h1>
          <h2 className="text-xl mb-3 md:mb-8 text-secondarytext dark:text-secondarytext-dark">
            A passionate Frontend developer turning ideas into modern,
            responsive, and user-friendly websites.
          </h2>
          <div className="flex gap-3">
            <button className="bg-primaryaccent dark:bg-primaryaccent-dark text-mainbuttontext dark:text-mainbuttontext-dark px-6 py-3 rounded-lg hover:scale-105 transition w-fit cursor-pointer">
              <a href="#projects">View My Projects</a>
            </button>

            <button className="border border-primaryaccent dark:border-primaryaccent-dark text-altbuttontext dark:text-altbuttontext-dark px-6 py-3 rounded-lg hover:bg-frenchblue cursor-pointer hover:text-white transition w-fit">
              <a href="#contact">Get In Touch</a>
            </button>
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
