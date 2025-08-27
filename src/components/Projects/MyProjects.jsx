import Card from "./Card";
import SpotlightCard from "./SpotLightCard";

function MyProjects({ isMobile }) {
  return (
    <section id="projects">
      <div className="mt-30 mb-20 p-6 text-paragraphs">
        <div
          className={
            isMobile
              ? "text-3xl text-titles text-center font-semibold p-8 mb-10"
              : "text-3xl text-titles text-center font-semibold p-5 mb-2"
          }
        >
          MY PROJECTS
        </div>
        <div
          className={
            "grid grid-cols-1 lg:grid-cols-2 gap-20 gap-x-10 self-end justify-self-center items-stretch mt-20"
          }
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
            screenshot="/images/FastReactPizza.png"
            technologies={["React", "tailwindcss"]}
            title="Fast React Pizza Co."
            description="Modern pizza ordering app where users can customize pizzas, manage their cart, and track orders in real time with React."
            liveDemoHref="https://fast-react-pizza-reactcourse-mmz.netlify.app/"
            gitHubHref="https://github.com/matheusmz22/fast-react-pizza-ReactCourse"
            isMobile={isMobile}
          />
          <Card
            screenshot="/images/TheWildOasis.png"
            technologies={[
              "React",
              "Next.js",
              "tailwindcss",
              "Supabase + OAuth",
            ]}
            title="The Wild Oasis"
            description="Full-featured cabin booking platform built with OAuth authentication, real-time database integration, and Supabase backend."
            liveDemoHref="https://the-wild-oasis-website-matheusmz.vercel.app/"
            gitHubHref="https://github.com/matheusmz22/The-Wild-Oasis-Website"
            isMobile={isMobile}
          />
          <Card isMobile={isMobile} />
        </div>
      </div>
    </section>
  );
}

export default MyProjects;
