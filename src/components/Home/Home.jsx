import "./Home.css";
import React from "react";
import Card from "../Card/Card";
import KeyIndicator from "../KeyIndicator/KeyIndicator";
const Home = (props) => {
  const zeldaLul = [2, 4, 1];
  return (
    <>
      <Card className="home">
        <p>
          Nice to meet you, My name is
          <h2 className="greeting">
            Julian<span className="wave-emoji">👋</span>
          </h2>
          A passionate Software Developer 🖥️
        </p>
        <p className="greeting">Play some of the following sequences below:</p>
        <KeyIndicator song={zeldaLul} setter={props.aboutSetter} />
      </Card>
    </>
  );
};

export default Home;
Home;
