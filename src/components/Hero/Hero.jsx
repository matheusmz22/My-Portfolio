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

function Hero({ isMobile }) {
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
    <section id="home">
      {isMobile ? (
        //////////////////////////
        //// MOBILE VERSION //////
        //////////////////////////
        <div className="container mx-auto w-full">
          <div className="flex flex-col items-center justify-center gap-8 mt-12 ">
            <div className="mt-8 w-50 h-50">
              <img
                src="../../images/PicHero.jpg"
                className="rounded-full object-cover"
                alt="Picture of Matheus Zucchi"
              />
            </div>

            <div className="flex flex-col items-center text-center text-paragraphs">
              <p className="text-titles text-[2rem] sm:text-4xl mb-4">
                Hi, I'm{" "}
                <span className="text-name text-[2.4rem] sm:text-[2.6rem] italic font-semibold">
                  Matheus Zucchi.
                </span>
              </p>
              <main className="text-[1.4rem] sm:text-[1.6rem] mx-8 ">
                <strong>Front-End Developer</strong> building fast and modern
                web applications with
              </main>
              <div className="mt-9 w-3xs">
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
              <p className="text-accent mt-8 flex items-center justify-center gap-2 font-semibold text-xl sm:text-[1.3rem]">
                <GoDotFill color="#8BA352" />
                Available
              </p>
              <div className="flex flex-col items-center gap-4 mt-4   ">
                <a
                  href="./Matheus-Zucchi-Resume.pdf"
                  target="_blank"
                  className="bg-navbarlight p-2.5 rounded-3xl text-text-button cursor-pointer w-54 text-[1.4rem] sm:text-2xl sm:p-3 sm:w-54 font-semibold transition-all"
                >
                  View Resume
                </a>
                <a
                  href="#projects"
                  className="border border-button-seework rounded-3xl text-text-seework p-2 text-md cursor-pointer w-50  sm:text-lg "
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
          <div className="flex text-paragraphs items-center lg:w-4xl">
            <div className="lg:mr-52 md:mr-26">
              <p className="text-titles text-3xl w-sm my-4 md:text-3xl lg:text-3xl">
                Hi, I'm{" "}
                <span className="text-name lg:text-[2.3rem] md:text-[2.1] italic font-semibold">
                  Matheus Zucchi.
                </span>
              </p>
              <p className="text-2xl md:w-[20rem]">
                <strong>Front-End Developer</strong> building fast and modern
                web applications with
              </p>
              <div className="mt-12 md:w-[15rem] sm:w-[20rem] lg:w-[22rem]">
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
                  href="#projects"
                  className="flex items-center justify-center border border-button-seework rounded-3xl text-text-seework p-1 text-sm cursor-pointer w-28 hover:bg-button-seework hover:text-black transition-all text-center"
                >
                  See my work
                </a>
              </div>
            </div>
            <div className="w-80 rounded-2xl mt-[-2rem]  md:ml-0 md:w-full hover:scale-105 transition-transform">
              <img
                src="../../images/PicHero.jpg"
                className="w-full h-full rounded-full shadow-2xl md:w-70 md:h-70 lg:w-80 lg:h-80"
                alt="Picture of Matheus Zucchi"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Hero;
