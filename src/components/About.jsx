export default function About() {
  return (
    <section
      id="about"
      className="flex justify-center items-center md:p-20 p-5 bg-mainbg"
    >
      <div className="lg:w-[75%] py-3 grid lg:grid-cols-2 gap-12">
        <div>
          <h1 className="text-5xl mb-6 text-primarytext">
            About <span className="text-primaryaccent">Me</span>
          </h1>
          <p className="text-xl text-secondarytext mb-3">
            I'm a Frontend developer who thrives on building reliable responsive
            websites. I'm passionate about the intersection of design and code,
            always pushing to create experiences that are not just beautiful,
            but intuitive and accessible to everyone.
          </p>
          <div className="grid grid-cols-3 gap-4 pt-6">
            <div className="space-y-2">
              <p className="text-3xl font-bold text-primarytext">10+</p>
              <p className="text-sm text-secondarytext">Projects Completed</p>
            </div>
            <div className="space-y-2">
              <p className="text-3xl font-bold text-primarytext">2+</p>
              <p className="text-sm text-secondarytext">Years Experience</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center h-fit self-center">
          <h3 className="text-xl self-start mb-3">Skills</h3>
          <div className="flex flex-wrap gap-2">
            {[
              "HTML5",
              "CSS3",
              "Javascript",
              "React",
              "React-Router",
              "Angular",
              "Tailwind CSS",
              "Responsive Web Design",
              "Git & GitHub",
              "Django",
              "Web Scraping",
              "API Integration",
            ].map((skills) => (
              <span className="p-3 text-sm text-primarytext bg-secondaryaccent rounded-full">
                {skills}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
