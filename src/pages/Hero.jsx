import Mainhero from "../components/Mainhero";
import Herobutton from "../components/Herobutton";

export default function Hero() {
  return (
    <section
      id="hero"
      className="flex justify-center h-dvh items-center md:px-25 p-5 bg-mainbg dark:bg-mainbg-dark"
    >
      <div className="flex flex-col items-center justify-center gap-5 lg:gap-10 h-full lg:py-25">
        <Mainhero />
        <div className="flex flex-row gap-3 lg:gap-5">
          <Herobutton
            text={"View my work"}
            style={
              "bg-primaryaccent dark:bg-primaryaccent-dark text-mainbuttontext dark:text-mainbuttontext-dark"
            }
            link={"projects"}
          />
          <Herobutton
            text={"Get in touch"}
            style={"text-altbuttontext dark:text-altbuttontext-dark"}
            link={"contact"}
          />
        </div>
      </div>
    </section>
  );
}
