import "./App.css";
import Piano from "./components/piano/Piano";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import SlideRight from "./components/SlideRight";
import { useRef } from "react";

function App() {
  const location = useLocation();
  const appRef = useRef(null);
  return (
    <div className="App" ref={appRef}>
      <SlideRight />
      <Routes location={location} key={location.pathname}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <div>Nice To Meet You, My Name Is Julian</div>
      <Piano appRef={appRef} />
    </div>
  );
}

export default App;
