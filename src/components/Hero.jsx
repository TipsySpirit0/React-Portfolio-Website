import Mainhero from "./Mainhero";
import Herobutton from "./Herobutton";

export default function Hero() {
  return (
    <section
      id="hero"
      className="flex justify-center items-center md:px-25 p-5 lg:pt-5 pt-20 bg-mainbg dark:bg-mainbg-dark"
    >
      <div className="md:w-[80%] flex flex-col items-center justify-center h-full lg:py-25">
        <Mainhero />
        <div>
          <Herobutton text={"Yoooo"} />
        </div>
      </div>
    </section>
  );
}
