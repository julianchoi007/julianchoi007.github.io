import { useState, useRef } from "react";
import Piano from "../components/piano/Piano";
import Home from "../components/Home/Home";
import About from "../components/About";
import KeyIndicator from "../components/KeyIndicator/KeyIndicator";
const Main = () => {
  const [homeZ, setHomeZ] = useState(-1);
  const [aboutZ, setAboutZ] = useState(-1);
  const opener = ["0", "2", "7"];
  return (
    <>
      <KeyIndicator song={opener} setter={setHomeZ}>
        Get Started
      </KeyIndicator>
      {homeZ >= 0 ? (
        <Home style={{ "z-index": homeZ }} aboutSetter={setAboutZ} />
      ) : null}
      {aboutZ >= 0 ? (
        <Home style={{ "z-index": homeZ }} aboutSetter={setAboutZ} />
      ) : null}
      <Piano />
    </>
  );
};

export default Main;
