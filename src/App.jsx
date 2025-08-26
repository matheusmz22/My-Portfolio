import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Navbar from "./components/Navbar/Navbar";
import { useState } from "react";
gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  return (
    <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}></Navbar>
  );
}

export default App;
