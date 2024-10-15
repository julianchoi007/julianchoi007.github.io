import { useEffect, useState, useRef } from "react";
import { AUDIO } from "./piano-constants";

const BlackKey = (props) => {
  const documentRef = useRef(document);
  const [clicked, setClicked] = useState(true);
  const classes = "key sharp" + (clicked ? " playing" : "");
  const playNote = () => {
    AUDIO[props.value].currentTime = 0;
    AUDIO[props.value].play();
    setClicked(false);
  };

  useEffect(() => {
    setClicked(true);
  }, [clicked]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      const note = e.key.toUpperCase();
      if (note === props.value) {
        playNote();
      }
    };
    documentRef.current.addEventListener("keydown", handleKeyDown);

    return () => {
      documentRef.current.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div
      className={classes}
      onClick={playNote}
      style={{ left: props.spacing + "%" }}
    ></div>
  );
};

export default BlackKey;
