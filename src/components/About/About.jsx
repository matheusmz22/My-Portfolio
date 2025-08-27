import { GoDotFill } from "react-icons/go";

function About({ isMobile }) {
  return (
    <section id="about">
      {isMobile ? (
        //////////////////////////
        //// MOBILE VERSION //////
        //////////////////////////
        <div className="my-20 p-6 text-paragraphs">
          <div className="text-3xl text-titles text-center font-semibold p-5 mb-2">
            ABOUT ME
          </div>

          <div className="flex flex-col items-center gap-10">
            <div className="w-64 h-80 mb-4">
              <img
                src="/images/PicAbout.jpg"
                alt="Picture of Matheus Zucchi"
                className="w-full h-full object-cover rounded-lg shadow-[15px_12px_35px_-10px_rgba(144,169,85,0.24)] shadow-accent"
              />
            </div>

            <div>
              <p className=" mb-6 mx-10 sm:text-[1.5rem] text-[1rem]">
                I'm a Brazilian Front-End Developer, recently graduated with an
                Associate's degree in Computer Science from{" "}
                <a
                  className="text-accent font-semibold underline"
                  href="https://www.grossmont.edu"
                  aria-label="Grossmont College Website"
                >
                  Grossmont College
                </a>
                .
              </p>

              <p className="mb-6 mx-10 sm:text-[1.5rem] text-[1]">
                My goal is to become a Full-Stack Developer capable of building
                complete web applications. Right now, I'm focused on sharpening
                my front-end skills, and preparing for opportunities in the
                field.
              </p>

              <p className=" mb-8 mx-10 sm:text-[1.5rem] text-[1rem]">
                When I'm not coding, I enjoy going to the gym, learning new
                programming concepts, and exploring upcoming technologies.
              </p>

              <p className="mx-10 sm:text-[1.5rem] text-[1rem]">
                I'm currently focused on:
              </p>

              <div className="font-semibold  mt-2 ml-[2.19rem] text-[1rem] sm:text-[1.4rem]">
                <div className="flex items-center justify-start ">
                  <GoDotFill className="h-2 mr-2" />
                  <div className="flex flex-wrap items-center gap-2">
                    <a
                      href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                      target="_blank"
                    >
                      JavaScript
                    </a>
                    <span>|</span>
                    <a
                      href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5"
                      target="_blank"
                    >
                      HTML
                    </a>
                    <span>|</span>
                    <a
                      href="https://developer.mozilla.org/en-US/docs/Web/CSS"
                      target="_blank"
                    >
                      CSS
                    </a>
                  </div>
                </div>

                <div className="flex items-center justify-start">
                  <GoDotFill className="h-2 mr-2" />
                  <div className="flex flex-wrap items-center gap-2">
                    <a
                      href="https://react.dev"
                      className="hover:text-react transition-colors"
                      target="_blank"
                    >
                      REACT
                    </a>
                    <span>|</span>
                    <a
                      href="https://nextjs.org"
                      className="hover:text-next transition-colors"
                      target="_blank"
                    >
                      Next.js
                    </a>
                    <span>|</span>
                    <a
                      href="https://tailwindcss.com"
                      className="hover:text-tailwindcss transition-colors"
                    >
                      tailwindcss
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        //////////////////////////
        //// DESKTOP VERSION //////
        //////////////////////////
        <div className="my-10 p-10 text-paragraphs">
          {" "}
          <div className="m-auto text-4xl text-titles text-center font-semibold p-5">
            ABOUT ME{" "}
          </div>{" "}
          <div className="lg:w-4xl mx-auto p-2">
            {" "}
            <p className="lg:text-[1.83rem] md:text-2xl text-center text-paragraphs-about mt-8">
              I'm a Brazilian Front-End Developer, recently graduated with an
              Associate's degree in Computer Science from{" "}
              <a
                className="text-accent font-semibold underline hover:text-accenthover"
                href="https://www.grossmont.edu"
                aria-label="Grossmont College Website"
                target="_blank"
              >
                Grossmont College
              </a>
              .
            </p>
          </div>
          <div className="flex items-center justify-center gap-20 md:text-[1.3rem] sm:text-lg lg:text-2xl leading-6">
            <div className="w-117 ml-8 ">
              <p className="md:my-15 lg:my-18">
                My goal is to become a Full-Stack Developer capable of building
                complete web applications. Right now, I'm focused on sharpening
                my front-end skills, and preparing for opportunities in the
                field.
              </p>
              <p className="md:my-15">
                When I'm not coding, I enjoy going to the gym, learning new
                programming concepts, and exploring upcoming technologies.
              </p>
              <p className="md:mt-15 lg:mt-18">I'm currently focused on:</p>
              <ul className="ml-[-6px] font-semibold mt-2 text-[1.3rem] ">
                <li className="flex items-center justify-start transition-all duration-200">
                  <GoDotFill className="h-2" />
                  <a
                    href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                    className="hover:text-javascript"
                    target="_blank"
                  >
                    JavaScript
                  </a>{" "}
                  <div className="h-5 w-1 border-r border-primary-400 mx-3 " />{" "}
                  <a
                    href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5"
                    className="hover:text-html"
                    target="_blank"
                  >
                    HTML
                  </a>{" "}
                  <div className="h-5 w-1 border-r border-primary-400 mx-3 " />{" "}
                  <a
                    href="https://developer.mozilla.org/en-US/docs/Web/CSS"
                    target="_blank"
                    className="hover:text-css"
                  >
                    CSS
                  </a>
                </li>
                <li className="flex items-center justify-start transition-all duration-200">
                  <GoDotFill className="h-2" />
                  <a
                    href="https://react.dev"
                    target="_blank"
                    className="hover:text-react"
                  >
                    React
                  </a>{" "}
                  <div className="h-5 w-1 border-r border-primary-400 mx-3" />
                  <a
                    href="https://nextjs.org"
                    target="_blank"
                    className="hover:text-next"
                  >
                    Next.js
                  </a>{" "}
                  <div className="h-5 w-1 border-r border-primary-400 mx-3" />
                  <a
                    href="https://tailwindcss.com"
                    className="hover:text-tailwindcss"
                    target="_blank"
                  >
                    tailwindcss
                  </a>
                </li>
              </ul>
            </div>

            <div className="md:mt-5 w-90 h-80 lg:mt-[-20px] hover:scale-105 transition-transform ">
              <img
                src="/images/PicAbout.jpg"
                alt="Picture of Matheus Zucchi"
                className="shadow-[15px_12px_35px_-10px_rgba(144,169,85,0.24)]  shadow-accent"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default About;
