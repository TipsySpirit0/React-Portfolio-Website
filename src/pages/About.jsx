import SectionTitlebar from "../components/SectionTitlebar";
import Skillspread from "../components/Skillspread";

export default function About() {
  const front = ["HTML5", "CSS3", "Javascript", "React", "Angular"];
  const back = ["Django"];
  const tools = ["Git & GitHub"];
  const design = ["Responsive Design"];

  return (
    <section
      id="about"
      className="flex justify-center min-h-dvh items-center md:px-25 p-5 bg-mainbg dark:bg-mainbg-dark"
    >
      <div className="flex flex-col lg:w-[80%] py-3 justify-center gap-5 lg:gap-10 h-full lg:py-25">
        <SectionTitlebar
          title={"About"}
          htext={" Me"}
          subtitle={
            "I'm a Frontend developer who thrives on building reliable responsive websites. I'm proficient in a wide range of modern technologies and tools for building scalable web applicatons"
          }
        />
        <div className="flex flex-col gap-5 lg:gap-7">
          <div className="grid lg:grid-cols-2 lg:grid-rows-2 gap-3 lg:gap-10">
            <Skillspread title={"Frontend"} list={front} />
            <Skillspread title={"Backend"} list={back} />
            <Skillspread title={"Tools"} list={tools} />
            <Skillspread title={"Design"} list={design} />
          </div>
          <div className="grid grid-cols-3 gap-4 lg:pt-6">
            <div className="lg:space-y-2">
              <p className="text-3xl lg:text-4xl font-bold text-primarytext dark:text-primarytext-dark">
                10+
              </p>
              <p className="text-base lg:text-lg text-secondarytext dark:text-secondarytext-dark">
                Projects Completed
              </p>
            </div>
            <div className="lg:space-y-2">
              <p className="text-3xl lg:text-4xl font-bold text-primarytext dark:text-primarytext-dark">
                2+
              </p>
              <p className="text-base lg:text-lg text-secondarytext dark:text-secondarytext-dark">
                Years Experience
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// return (
//   <section
//     id="about"
//     className="flex justify-center items-center md:p-20 p-5 bg-mainbg dark:bg-mainbg-dark"
//   >
//     <div className="lg:w-[75%] py-3 grid lg:grid-cols-2 gap-12">
//       <div>
//         <h1 className="text-5xl mb-6 text-primarytext dark:text-primarytext-dark">
//           About <span className="text-primaryaccent dark:text-primaryaccent-dark">Me</span>
//         </h1>
//         <p className="text-xl text-secondarytext dark:text-secondarytext-dark mb-3">
//           I'm a Frontend developer who thrives on building reliable responsive
//           websites. I'm passionate about the intersection of design and code,
//           always pushing to create experiences that are not just beautiful,
//           but intuitive and accessible to everyone.
//         </p>
//         <div className="grid grid-cols-3 gap-4 pt-6">
//           <div className="space-y-2">
//             <p className="text-3xl font-bold text-primarytext dark:text-primarytext-dark">10+</p>
//             <p className="text-sm text-secondarytext dark:text-secondarytext-dark">Projects Completed</p>
//           </div>
//           <div className="space-y-2">
//             <p className="text-3xl font-bold text-primarytext dark:text-primarytext-dark">2+</p>
//             <p className="text-sm text-secondarytext dark:text-secondarytext-dark">Years Experience</p>
//           </div>
//         </div>
//       </div>

//       <div className="flex flex-col items-center h-fit self-center">
//         <h3 className="text-xl self-start mb-3">Skills</h3>
//         <div className="flex flex-wrap gap-2">
//           {[
//             "HTML5",
//             "CSS3",
//             "Javascript",
//             "React",
//             "React-Router",
//             "Angular",
//             "Tailwind CSS",
//             "Responsive Web Design",
//             "Git & GitHub",
//             "Django",
//             "Web Scraping",
//             "API Integration",
//           ].map((skills) => (
//             <span key={skills} className="p-3 text-sm text-primarytext bg-secondaryaccent dark:bg-secondaryaccent-dark rounded-full">
//               {skills}
//             </span>
//           ))}
//         </div>
//       </div>
