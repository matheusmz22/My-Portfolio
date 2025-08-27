import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import { useMediaQuery } from "react-responsive";
import MyProjects from "./components/Projects/MyProjects";
import Contact from "./components/Footer-Contact/Contact";
gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
  const isMobile = useMediaQuery({ maxWidth: 780 });

  return (
    <>
      <div className="bg-gradient-to-br from-hero-light via-body to-body h-full p-5">
        <Navbar isMobile={isMobile} />
        <Hero isMobile={isMobile} />
      </div>
      <div className="bg-body p-1 h-full">
        <About isMobile={isMobile} />
        <MyProjects isMobile={isMobile} />
      </div>
      <div className="bg-gradient-to-t from-hero-light via-body to-body h-full p-5">
        <Contact isMobile={isMobile} />
      </div>
    </>
  );
}

export default App;
