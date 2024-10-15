import { useEffect, useRef, useState } from "react";
import WhiteKey from "./WhiteKey";
import BlackKey from "./BlackKey";
import "./piano-styles/piano.css";
import {
  KEY_COLOURS,
  BLACK_KEYS,
  SPACING,
  WHITE_KEYS,
  NOTES,
  AUDIO,
} from "./piano-constants";
import { motion } from "framer-motion";

const Piano = (props) => {
  return (
    <div className="piano">
      <div className="piano-wrapper">
        <div className="piano-wrapper2">
          <motion.div
            className="keys"
            drag
            dragConstraints={props.appRef}
            whileDrag={{ scale: 1.2 }}
          >
            {WHITE_KEYS.map((key, i) => (
              <WhiteKey key={key} colour={KEY_COLOURS[i]} value={key} />
            ))}
            {BLACK_KEYS.map((key, i) => (
              <BlackKey key={key} spacing={SPACING[i]} value={key} />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Piano;
