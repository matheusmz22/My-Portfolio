import { SunIcon } from "@heroicons/react/16/solid";
import { useMediaQuery } from "react-responsive";
import CardNav from "./CardNav";
import DarkMode from "./DarkMode";

function Navbar({ isDarkMode, setIsDarkMode }) {
  const isMobile = useMediaQuery({ maxWidth: 767 }); // Up to 767px is mobile

  const baseColor = "##c3e08098";
  const textColor = "#2b2b2b";
  const items = [
    {
      label: "About",
      textColor: textColor,
      href: "#about",
    },
    {
      label: "Projects",
      textColor: textColor,
      href: "#projects",
    },
    {
      label: "Contact",
      textColor: textColor,
      href: "#contact",
    },
  ];

  return (
    <div>
      {isMobile ? (
        <CardNav
          items={items}
          baseColor={baseColor}
          isDarkMode={isDarkMode}
          setIsDarkMode={setIsDarkMode}
        />
      ) : (
        <div className="text-text-navbar">
          <header className="bg-navbar flex justify-between md:w-[50rem] md:h-19 lg:w-[58rem] mx-auto rounded-[1.1rem] lg:h-20 my-6 items-center p-5 font-semibold">
            <a
              href="#home"
              className="font-signature font-bold text-[2.5rem] cursor-pointer"
            >
              Matheus Zucchi
            </a>
            <ul className="flex items-center justify-end gap-10 ">
              <li>
                <a
                  href="#about"
                  className="cursor-pointer hover:text-text-navbarhover text-2xl"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="cursor-pointer hover:text-text-navbarhover text-2xl"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="cursor-pointer hover:text-text-navbarhover text-2xl"
                >
                  Contact
                </a>
              </li>
              <li>
                <button
                  className="cursor-pointer mt-2 hover:bg-navbarlight transition-all duration-100 rounded-[7px]"
                  onClick={() => setIsDarkMode(!isDarkMode)}
                >
                  <DarkMode />
                </button>
              </li>
            </ul>
          </header>
        </div>
      )}
    </div>
  );
}

export default Navbar;
