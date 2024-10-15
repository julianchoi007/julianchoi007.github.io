import React from "react";
import { Link } from "react-router-dom";
const SlideRight = () => {
  return (
    <div>
      <Link className="nav-link" to="/">
        Home
      </Link>
      <Link to="/About">About</Link>
    </div>
  );
};

export default SlideRight;
