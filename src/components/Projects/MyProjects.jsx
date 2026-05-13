import Card from "./Card";

function MyProjects({isMobile}) {
  return (
    <section id="projects">
      <div id="projects-content" className="mt-30 mb-20 p-6 text-paragraphs">
        <h1
          id="projects-title"
          className={
            isMobile
              ? "text-3xl text-titles text-center font-semibold p-8 mb-10"
              : "text-3xl text-titles text-center font-semibold p-5 mb-2"
          }
        >
          MY PROJECTS
        </h1>

        <div
          id="cards"
          className="grid grid-cols-1 lg:grid-cols-2 gap-20 gap-x-10 self-end justify-self-center items-stretch mt-20"
        >
          <Card
            screenshot="/images/VelvetPour.png"
            alt="Velvet Pour Home Page"
            technologies={["React", "tailwindcss", "GSAP"]}
            title="Velvet Pour"
            description="Cocktail bar website with advanced animations and immersive transitions, featuring parallax effects and smooth scrolling using React and GSAP."
            liveDemoHref="https://velvetpour-gsapvideoclass-mmz.vercel.app/"
            gitHubHref="https://github.com/matheusmz22/gsap_cocktail_practice"
            isMobile={isMobile}
          />
          <Card
            screenshot="/images/coursealign.png"
            technologies={["React", "tailwindcss"]}
            title="CourseAlign"
            description="Modern schedule planning web app for SDSU students that generates optimized class schedules based on course selection and time preferences. Interactive calendar interface and real-time schedule visualization built with React and FastAPI."
            liveDemoHref="https://coursealign.vercel.app/"
            gitHubHref="https://github.com/matheusmz22/coursealign"
            isMobile={isMobile}
          />
          <Card
            screenshot="/images/FarmSync.png"
            technologies={["React", "Recharts", "tailwindcss", "localStorage"]}
            title="FarmSync"
            description="Modern farm management dashboard where farmers can track crops, visualize harvest predictions, and manage listings through a clean, data-driven React interface."
            liveDemoHref="https://farmsyncui.vercel.app"
            gitHubHref="https://github.com/matheusmz22/FarmSync-FrontEnd"
            isMobile={isMobile}
          />
          <Card
            screenshot="/images/JuliaMachado.png"
            technologies={["React", "tailwindcss"]}
            title="Julia Machado's Portfolio"
            description="Creative portfolio showcasing custom costume design projects, highlighting craftsmanship, creativity, and attention to detail."
            liveDemoHref="https://juliamachado.vercel.app"
            gitHubHref="https://github.com/matheusmz22/Portfolio-Julia"
            isMobile={isMobile}
          />
        </div>
      </div>
    </section>
  );
}

export default MyProjects;
