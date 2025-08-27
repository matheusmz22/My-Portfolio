import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import { useMediaQuery } from "react-responsive";
gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <>
      <div className="bg-gradient-to-br from-hero-light via-body to-body h-full p-5">
        <Navbar isMobile={isMobile} />
        <Hero isMobile={isMobile} />
      </div>

      <About isMobile={isMobile} />
    </>
  );
}

export default App;
