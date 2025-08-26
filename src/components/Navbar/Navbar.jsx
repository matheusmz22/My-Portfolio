import { SunIcon } from "@heroicons/react/16/solid";
import { useMediaQuery } from "react-responsive";
import CardNav from "../../CardNav";

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
    <div className="bg-gradient-to-br from-hero-light via-hero-medium to-body h-screen p-5">
      {isMobile ? (
        <CardNav
          items={items}
          baseColor={baseColor}
          isDarkMode={isDarkMode}
          setIsDarkMode={setIsDarkMode}
        />
      ) : (
        <div className="text-text-navbar">
          <nav className="bg-navbar flex justify-between md:w-[46rem] md:h-15 lg:w-4xl mx-auto rounded-[1.1rem] lg:h-17 items-center p-5 font-semibold">
            <a
              href="/"
              className="font-signature font-bold text-2xl cursor-pointer"
            >
              Matheus Zucchi
            </a>
            <ul className="flex items-center justify-end gap-10 ">
              <li>
                <a
                  href="#about"
                  className="cursor-pointer hover:text-text-navbarhover"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="cursor-pointer hover:text-text-navbarhover"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="cursor-pointer hover:text-text-navbarhover"
                >
                  Contact
                </a>
              </li>
              <li>
                <button
                  className="cursor-pointer mt-2 hover:bg-navbarlight transition-all duration-100 rounded-[7px]"
                  onClick={() => setIsDarkMode(!isDarkMode)}
                >
                  {isDarkMode ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-7"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-7"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                      />
                    </svg>
                  )}
                </button>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
}

export default Navbar;
