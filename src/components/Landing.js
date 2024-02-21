import React from "react";
import "../stylesheets/Landing.css";
import videoBg from "../assets/black_background.mp4";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <>
      <div className="background-overlay">
        <video src={videoBg} autoPlay muted loop></video>
        <div className="overlay"></div>
        <div className="loader">
          <Link to={"/Intro"}>
            <button className="glitch-btn">Enter</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Landing;
