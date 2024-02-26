import React from "react";
import style from "../stylesheets/About.module.css";
// import picture from "../assets/Profile.jpg";
import picture from "../assets/black_background.mp4";

function About() {
  return (
    <div className={style.content}>
      <div className={style.textBox}>
        <div className={style.topText}>
          <span>Howdy, </span>I'm
        </div>
        <div className={style.bottomText}>Arnab</div>
        <div className={style.content1}>
          <div className={style.line}></div>
          <div className={style.shape}>
            <div className={style.play}></div>
          </div>
          <div className={style.resume}>See Resume</div>
        </div>
      </div>
      <div className={style.imageBox}>
        <img src={picture} alt="Profile"></img>
      </div>
    </div>
  );
}

export default About;
