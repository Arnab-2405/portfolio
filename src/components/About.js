import React from "react";
import style from "../stylesheets/About.module.css";
import picture from "../assets/Profile.jpg";

function About() {
  return (
    <div className={style.content}>
      <div className={style.textBox}>
        <div className={style.topText}>
          <span>Howdy, </span>I'm
        </div>
        <div className={style.bottomText}>Arnab</div>
      </div>
      <div className={style.imageBox}>
        <img src={picture} alt="Profile Picture"></img>
      </div>
    </div>
  );
}

export default About;
