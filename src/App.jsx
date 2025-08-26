import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Navbar from "./components/Navbar/Navbar";
import { useState } from "react";
import Hero from "./components/Hero/Hero";
gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  return (
    <>
      <div className="bg-gradient-to-br from-hero-light via-hero-medium to-body h-screen p-5">
        <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        <Hero isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      </div>
      <div className="bg-body">asdsa</div>
    </>
  );
}

export default App;
