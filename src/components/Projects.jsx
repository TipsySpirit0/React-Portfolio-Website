export default function Projects() {
  const projects = [
    {
      title: "Dealscope",
      description:
        "A modern and responsive Django powered e-commerce price comparison system",
      img: "./Dealscope.png",
      tools: ["React", "Tailwind Css", "Django", "React-Router", "React-icons"],
      type: "Fullstack Project",
      link: "https://github.com/TipsySpirit0/deal-scope",
      year: "2025",
    },
    {
      title: "Tipsy Movies",
      description:
        "A movie website to show details of movies utilizing the TMDB api",
      img: "./moviesApp.png",
      tools: ["Angular", "Tailwind Css", "Typescript"],
      type: "Frontend Project",
      link: "https://github.com/TipsySpirit0/angular-v18-movies-app-repeated",
      year: "2024",
    },
    {
      title: "Students Record App",
      description:
        "A website used to track student records. Data gotten through a mocked Api",
      img: "./studentRecord.png",
      tools: ["Angular", "Tailwind Css", "Eslint"],
      type: "Frontend Project",
      link: "https://github.com/TipsySpirit0/students-records-app",
      year: "2024",
    },
  ];
  return (
    <section
      id="projects"
      className="p-5 lg:p-20 flex flex-col items-center bg-mainbg dark:bg-mainbg-dark"
    >
      <div className="lg:w-[75%]">
        <div>
          <h1 className="mb-4 text-5xl text-primarytext dark:text-primarytext-dark">
            Featured{" "}
            <span className="text-primaryaccent dark:text-primaryaccent-dark">
              Projects
            </span>
          </h1>
          <p className="text-xl text-secondarytext dark:text-secondarytext-dark mb-6">
            A selection of my most recent work
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-8">
          {projects.map((project) => (
            <a
              key={project}
              href={project.link}
              target="_blank"
              className="bg-altbg dark:bg-altbg-dark w-fit min-h-113 border border-gray-300 dark:border-gray-600 mt-2 p-5 rounded-lg hover:scale-105 transition-transform duration-300"
            >
              <div className="flex flex-row justify-between items-center">
                <span className="p-3 text-xs border text-primarytext dark:text-primarytext-dark border-gray-300 dark:border-gray-600 rounded-full">
                  {project.type}
                </span>
                <span className="text-sm rounded-full text-primarytext dark:text-primarytext-dark">
                  {project.year}
                </span>
              </div>
              <img
                src={project.img}
                alt={project.title}
                className="w-fit rounded-md mt-4"
              />
              <div className="mt-3">
                <h1 className="text-primarytext dark:text-primarytext-dark text-xl font-semibold">
                  {project.title}
                </h1>
                <p className="text-secondarytext dark:text-secondarytext-dark my-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <span key={tool} className="p-3 text-sm bg-secondaryaccent dark:bg-secondaryaccent-dark text-primarytext rounded-full">
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
