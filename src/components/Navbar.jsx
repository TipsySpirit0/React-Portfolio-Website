import { useState } from "react";

import ModeSwitcher from "./ModeSwitcher";
import NavOpenButton from "./NavOpenButton";

function Navbar({ isDark, toggleMode }) {
  const Navlinks = ["About", "Projects", "Contact"];
  const [isOpen, setIsOpen] = useState(false);

  const openNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="fixed flex justify-center w-dvw top-0 z-50 bg-mainbg dark:bg-mainbg-dark border-b border-gray-300 dark:border-gray-600">
        <div className="w-[90%] md:w-[85%] flex flex-row justify-between py-3">
          <a
            href="#hero"
            className="text-2xl font-bold text-primaryaccent dark:text-primaryaccent-dark hover:text-secondaryaccent dark:hover:text-secondaryaccent-dark"
          >
            TOBILOBA
          </a>
          <NavOpenButton openNav={openNav} isOpen={isOpen} />
          <div
            className={`flex flex-col gap-8 lg:flex-row ${
              isOpen ? "block" : "hidden"
            } lg:flex`}
          >
            {Navlinks.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-xl text-primarytext dark:text-primarytext-dark"
              >
                {item}
              </a>
            ))}

            <ModeSwitcher darkmode={isDark} toggleMode={toggleMode} />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
