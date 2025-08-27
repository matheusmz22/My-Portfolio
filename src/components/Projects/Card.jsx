import { CiShare1 } from "react-icons/ci";
import SpotlightCard from "./SpotLightCard";
import { FaGithub } from "react-icons/fa";
import { GrShare } from "react-icons/gr";

function Card({
  screenshot = "",
  alt = "",
  technologies = [],
  title = "Empty",
  description = "",
  liveDemoHref = "",
  gitHubHref = "",
  isMobile,
}) {
  return (
    <>
      {title === "Empty" ? (
        <SpotlightCard
          className={
            isMobile
              ? "border rounded-3xl border-card-border sm:w-md w-[19rem] mx-auto bg-card hover:scale-105 hover:shadow-2xl"
              : "border rounded-3xl border-card-border w-md mx-auto bg-card hover:scale-105 hover:shadow-2xl"
          }
        >
          <div className="text-titles text-3xl text-center mt-15 font-extrabold py-50">
            Coming Soon... 🚀
          </div>
        </SpotlightCard>
      ) : (
        <SpotlightCard
          className={
            isMobile
              ? "border rounded-3xl border-card-border sm:w-md w-[19rem] mx-auto h-full bg-card hover:scale-105 hover:shadow-2xl"
              : "border rounded-3xl border-card-border w-md mx-auto h-full bg-card hover:scale-105 hover:shadow-2xl"
          }
        >
          <div className="flex flex-col h-full">
            <div>
              <img
                alt={alt}
                className="w-full h-45 rounded-3xl "
                src={screenshot}
              />
            </div>
            <div className="flex flex-col gap-5 h-full">
              <ul className="card-technologies text-center mt-4  text-md">
                {technologies.join(" | ")}
              </ul>

              <div className="text-titles font-extrabold text-center text-3xl items-center ">
                {title}
              </div>

              <div
                className={
                  isMobile
                    ? "text-xl text-paragraphs text-center"
                    : "text-paragraphs text-2xl text-center"
                }
              >
                {description}
              </div>
            </div>

            <div
              className={
                isMobile
                  ? "mt-10 flex justify-between mx-7 text-accent font-semibold text-md sm:mx-20"
                  : "mt-10 flex justify-between  mx-20 text-accent font-semibold text-xl"
              }
            >
              <a
                href={liveDemoHref}
                target="_blank"
                className="hover:underline hover:text-accenthover flex items-center justify-center gap-3"
              >
                Live Demo
                <GrShare className="mb-1" />
              </a>

              <a
                href={gitHubHref}
                target="_blank"
                className="hover:underline hover:text-accenthover flex items-center justify-center gap-3"
              >
                GitHub
                <FaGithub className="mb-1" />
              </a>
            </div>
          </div>
        </SpotlightCard>
      )}
    </>
  );
}

export default Card;
