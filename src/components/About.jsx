export default function About() {
  return (
    <section
      id="about"
      className="bg-ghostwhite flex justify-center items-center md:p-20 p-5"
    >
      <div className="lg:w-[75%] py-3 grid lg:grid-cols-2 gap-12">
        <div>
          <h1 className="text-5xl mb-6">
            About <span className="text-frenchblue">Me</span>
          </h1>
          <h1 className="text-3xl text-amberglow mb-6">
            Frontend Developer Focused on Building Modern, Reliable and
            Responsive Websites
          </h1>
          <p className="text-xl text-gray-500 mb-3">
            I'm a Frontend developer who thrives on building reliable responsive
            websites. I'm passionate about the intersection of design and code,
            always pushing to create experiences that are not just beautiful,
            but intuitive and accessible to everyone.
          </p>
          <div className="grid grid-cols-3 gap-4 pt-6">
            <div className="space-y-2">
              <p className="text-3xl font-bold text-primary">10+</p>
              <p className="text-sm text-muted-foreground">
                Projects Completed
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-3xl font-bold text-primary">2+</p>
              <p className="text-sm text-muted-foreground">Years Experience</p>
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
              <span className="p-3 text-sm bg-amberglow rounded-full">
                {skills}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
