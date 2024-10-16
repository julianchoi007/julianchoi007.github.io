import React, { useContext, useRef } from "react";
import "./KeyIndicator.css";
import { KEY_COLOURS, WHITE_KEYS } from "../../constants/piano-constants";
import KeyContext from "../../context/KeyContext";

const checkNotes = (a, song, len) => {
  if (a === song) return true;
  if (a == null || song == null) return false;
  for (let i = 0; i < len; ++i) {
    if (a[i + a.length - len] !== WHITE_KEYS[song[i]]) return false;
  }
  return true;
};

const KeyIndicator = (props) => {
  const z = useRef(0);
  const { keys, setKeys } = useContext(KeyContext);
  let l = 0;
  for (let i = 1; i <= 5; i++) {
    if (i <= props.song.length && checkNotes(keys, props.song, i)) {
      l = i;
    }
  }
  if (l === props.song.length) {
    props.setter(3);
  }
  return (
    <>
      <div className="ind-wrapper">
        <div className="ind-label">
          <b>{props.children}</b>
        </div>

        <div>
          {props.song.map((key, i) =>
            l <= i ? (
              <div
                className="key-ind"
                style={{ backgroundColor: KEY_COLOURS[key] }}
              >
                <b>{WHITE_KEYS[key]}</b>
              </div>
            ) : (
              <div
                className="key-ind hit"
                style={{ backgroundColor: KEY_COLOURS[key] }}
              >
                <b>{WHITE_KEYS[key]}</b>
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default KeyIndicator;
