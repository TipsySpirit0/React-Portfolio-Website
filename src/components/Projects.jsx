export default function Projects() {
  const projects = [
    {
      title: "Dealscope",
      description:
        "A modern and responsive Django powered e-commerce price comparison system",
      img: "./Dealscope.png",
      tools: ["React", "Tailwind Css", "Django", "React-Router", "React-icons"],
      type: "Fullstack Project",
      link: "",
      year: "2025",
    },
    {
      title: "Tipsy Movies",
      description:
        "A movie website to show details of movies utilizing the TMDB api",
      img: "./moviesApp.png",
      tools: ["Angular", "Tailwind Css", "Typescript"],
      type: "Frontend Project",
      link: "",
      year: "2024",
    },
    {
      title: "Students Record App",
      description:
        "A website used to track student records. Data gotten through a mocked Api",
      img: "./studentRecord.png",
      tools: ["Angular", "Tailwind Css", "Eslint"],
      type: "Frontend Project",
      link: "",
      year: "2024",
    },
  ];
  return (
    <section
      id="projects"
      className="bg-gray-200 p-5 lg:p-20 flex flex-col items-center mb-6"
    >
      <div className="lg:w-[75%]">
        <div>
          <h1 className="mb-4 text-5xl">
            Featured <span className="text-frenchblue">Projects</span>
          </h1>
          <p className="text-xl text-gray-500 mb-6">
            A selection of my most recent work
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-8">
          {projects.map((project) => (
            <a
              href={project.link}
              className="bg-gray-200 w-fit min-h-[450px] border border-gray-400 mt-2 p-5 rounded-lg"
            >
              <div className="flex flex-row justify-between">
                <span className="p-2 text-xs bg-gray-400 rounded-full">
                  {project.type}
                </span>
                <span className="text-sm rounded-full">{project.year}</span>
              </div>
              <img
                src={project.img}
                alt={project.title}
                className="w-fit rounded-md mt-4"
              />
              <div className="mt-3">
                <h1 className="text-xl font-semibold">{project.title}</h1>
                <p className="text-gray-500 my-3">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <span className="p-3 text-sm bg-amberglow rounded-full">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
