import WhiteKey from "./WhiteKey";
import BlackKey from "./BlackKey";
import "./piano-styles/piano.css";
import {
  KEY_COLOURS,
  BLACK_KEYS,
  SPACING,
  WHITE_KEYS,
} from "../../constants/piano-constants";
import { motion } from "framer-motion";
import { useContext, useEffect, useRef } from "react";
import RefContext from "../../context/RefContext";
import KeyContext from "../../context/KeyContext";

const Piano = (props) => {
  const appRef = useContext(RefContext);
  const documentRef = useRef(document);
  const { keys, setKeys } = useContext(KeyContext);
  useEffect(() => {
    const handleKeyDown = (e) => {
      setKeys([...keys.slice(1), e.key.toUpperCase()]);
    };
    documentRef.current.addEventListener("keydown", handleKeyDown);

    return () => {
      documentRef.current.removeEventListener("keydown", handleKeyDown);
    };
  }, [keys]);
  return (
    <motion.div
      className="keys"
      drag
      dragConstraints={appRef}
      whileDrag={{ scale: 1.2 }}
    >
      {WHITE_KEYS.map((key, i) => (
        <WhiteKey key={key} colour={KEY_COLOURS[i]} value={key} />
      ))}
      {BLACK_KEYS.map((key, i) => (
        <BlackKey key={key} spacing={SPACING[i]} value={key} />
      ))}
    </motion.div>
  );
};

export default Piano;
