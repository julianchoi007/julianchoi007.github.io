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

const Piano = () => {
  return (
    <div className="piano">
      <div className="piano-wrapper">
        <div className="piano-wrapper2">
          <div className="keys">
            {WHITE_KEYS.map((key, i) => (
              <WhiteKey key={key} colour={KEY_COLOURS[i]} value={key} />
            ))}
            {BLACK_KEYS.map((key, i) => (
              <BlackKey key={key} spacing={SPACING[i]} value={key} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Piano;
