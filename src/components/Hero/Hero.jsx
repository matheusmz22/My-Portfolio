import { useMediaQuery } from "react-responsive";
import LightRays from "./LightRays";
import {
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
} from "react-icons/si";
import LogoLoop from "./LogoLoop";
import { GoDotFill } from "react-icons/go";

function Hero() {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const techLogos = [
    {
      node: <SiHtml5 color="#dd4b25" />,
      title: "HTML",
      href: "https://developer.mozilla.org/en-US/docs/Glossary/HTML5",
    },
    {
      node: <SiCss3 color="#254bdd" />,
      title: "CSS",
      href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    },
    {
      node: <SiJavascript color="#d4b830" />,
      title: "JavaScript",
      href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
      node: <SiReact color="#61DBFB" />,
      title: "React",
      href: "https://react.dev",
    },
    {
      node: <SiNextdotjs color="#e5e5e5" />,
      title: "Next.js",
      href: "https://nextjs.org",
    },
    {
      node: <SiTailwindcss color="#35bef8" />,
      title: "Tailwind CSS",
      href: "https://tailwindcss.com",
    },
  ];

  return (
    <section id="#home">
      {isMobile ? (
        //////////////////////////
        //// MOBILE VERSION //////
        //////////////////////////
        <div className="container mx-auto md:mx-auto w-fit lg:px-20">
          <div className="flex flex-col items-center justify-center gap-8 mt-12 md:flex-row md:items-center md:mt-20 lg:justify-between lg:gap-20">
            <div className="mt-8 w-50 h-50">
              <img
                src="../../images/PicHero.jpg"
                className="rounded-full"
                alt="Picture of Matheus Zucchi"
              />
            </div>

            <div className="flex flex-col items-center text-center   text-paragraphs">
              <p className="text-titles text-4xl mb-4">
                Hi, I'm{" "}
                <span className="text-name text-[2.6rem] italic font-semibold">
                  Matheus Zucchi.
                </span>
              </p>
              <p className="text-xl w-sm">
                <strong>Front-End Developer</strong> building fast and modern
                web applications with
              </p>
              <div className="mt-9 w-xs">
                <LogoLoop
                  logos={techLogos}
                  speed={30}
                  direction="right"
                  logoHeight={50}
                  gap={30}
                  pauseOnHover
                  scaleOnHover
                  ariaLabel="Technology tools"
                />
              </div>
              <p className="text-accent mt-15 flex items-center justify-center  gap-2 font-semibold">
                <GoDotFill color="#90a955" />
                Available
              </p>
              <div className="flex flex-col items-center gap-4 mt-8   ">
                <a
                  href="./Matheus-Zucchi-Resume.pdf"
                  className="bg-navbarlight p-2.5 rounded-3xl text-text-button cursor-pointer w-48 text-lg  font-semibold transition-all"
                >
                  View Resume
                </a>
                <a
                  href="#projects"
                  className="border border-button-seework rounded-3xl text-text-seework p-1 text-sm cursor-pointer w-48   "
                >
                  See my work
                </a>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ///////////////////////////
        //// DESKTOP VERSION //////
        //////////////////////////

        <div className="container mx-auto md:mx-auto w-fit lg:px-20">
          <div className="flex text-paragraphs items-center mt-20 lg:w-4xl">
            <div className="lg:mr-52 ">
              <p className="text-titles text-3xl w-sm mb-4">
                Hi, I'm{" "}
                <span className="text-name text-4xl italic font-semibold">
                  Matheus Zucchi.
                </span>
              </p>
              <p className="text-2xl mt-[-6px]">
                <strong>Front-End Developer</strong> building fast and modern
                web applications with
              </p>
              <div className="mt-12 md:w-[25rem] sm:w-[20rem]">
                <LogoLoop
                  logos={techLogos}
                  speed={30}
                  direction="right"
                  logoHeight={50}
                  gap={30}
                  pauseOnHover
                  scaleOnHover
                  ariaLabel="Technology tools"
                />
              </div>
              <p className="text-accent mt-18 flex items-center gap-2 font-semibold">
                <GoDotFill color="#90a955" />
                Available
              </p>
              <div className="flex gap-5 mt-5 ">
                <a
                  href="./Matheus-Zucchi-Resume.pdf"
                  className=" bg-navbarlight p-2.5 rounded-3xl text-text-button cursor-pointer w-43 text-lg hover:bg-accent font-semibold transition-all text-center"
                >
                  View Resume
                </a>
                <a
                  href="./Matheus-Zucchi-Resume.pdf"
                  className="flex items-center justify-center border border-button-seework rounded-3xl text-text-seework p-1 text-sm cursor-pointer w-28 hover:bg-button-seework hover:text-black transition-all text-center"
                >
                  View Resume
                </a>
              </div>
            </div>
            <div>
              <div className="w-80 rounded-2xl mt-[-2rem] lg:ml-0.5 md:ml-22">
                <img
                  src="../../images/PicHero.jpg"
                  className="w-full h-full rounded-full shadow-2xl "
                  alt="Picture of Matheus Zucchi"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Hero;
