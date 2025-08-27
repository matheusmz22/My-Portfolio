import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedin, FaGithub } from "react-icons/fa";

function Contact({ isMobile }) {
  return (
    <section
      id="contact"
      className="mx-auto bg-backgroundfooter lg:w-3xl md:w-2xl h-fit rounded-2xl p-8 mb-20"
    >
      <footer className="flex flex-col items-center justify-center">
        <h1
          className={
            isMobile
              ? "text-titles sm:text-3xl text-[1.129rem] font-bold mb-4 mt-1 text-center"
              : "text-titles text-[1.7rem] font-bold mt-4 text-center"
          }
        >
          Let's Build Something Together
        </h1>

        <p
          className={
            isMobile
              ? "text-paragraphs sm:w-lg w-[18rem] text-md sm:text-xl text-center"
              : "text-paragraphs w-xl text-center my-5 text-[1.1rem]"
          }
        >
          I'm always open to new opportunities, collaborations, or just a chat
          about tech. Feel free to reach out and I'll get back to you as soon as
          possible.
        </p>

        <div
          className={
            isMobile
              ? "flex flex-col items-center gap-3 mt-4"
              : "flex items-center justify-center"
          }
        >
          <address>
            <ul
              className={
                isMobile
                  ? "flex items-center justify-center gap-4 p-2 text-xl text-accent"
                  : "flex justify-center items-center gap-5 p-4 text-accent text-3xl"
              }
            >
              <li>
                <a
                  href="mailto:matheusmzucchi@gmail.com"
                  aria-label="Send an email to Matheus"
                  className="cursor-pointer"
                >
                  <AiOutlineMail className="hover:scale-110 transition-transform duration-200 text-[1.8rem]" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/matheusmz/"
                  target="_blank"
                  aria-label="Matheus's Linkedin"
                >
                  <FaLinkedin className="text-[1.8rem] cursor-pointer hover:scale-110 transition-transform duration-200" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/matheusmz22"
                  target="_blank"
                  aria-label="Matheus's GitHub"
                >
                  <FaGithub className="text-[1.8rem] cursor-pointer hover:scale-110 transition-transform duration-200" />
                </a>
              </li>
            </ul>
          </address>

          <a
            href="./Matheus-Zucchi-Resume.pdf"
            target="_blank"
            className={
              isMobile
                ? "border border-accent px-4 py-2 rounded-3xl text-accent hover:bg-accenthover hover:text-text-buttonhover text-[0.8rem] font-bold transition-colors duration-200 text-center sm:text-[1rem]"
                : "border border-accent py-2 px-6 rounded-3xl hover:bg-accenthover hover:text-text-buttonhover text-accent cursor-pointer text-[1rem] font-bold transition-colors duration-200 text-center ml-7"
            }
          >
            View Resume
          </a>
        </div>

        <p
          className={
            isMobile
              ? "text-copyright text-[0.708rem] sm:text-sm mt-6 opacity-70"
              : "text-copyright text-sm mt-6 opacity-70"
          }
        >
          Copyright &copy; 2025 Matheus Zucchi. All rights reserved.
        </p>
      </footer>
    </section>
  );
}

export default Contact;
