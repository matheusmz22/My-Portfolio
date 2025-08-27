import { useMediaQuery } from "react-responsive";
import About from "./components/About/About";
import Contact from "./components/Footer-Contact/Contact";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import MyProjects from "./components/Projects/MyProjects";

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
