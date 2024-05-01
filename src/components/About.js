import React, { useState, useEffect } from "react";
import style from "../stylesheets/About.module.css";
import picture from "../assets/profile.png";
import myResume from "../assets/myResume.pdf";

function About() {
  const [hackerText, setHackerText] = useState("I AM A SOFTWARE ENGINEER");

  const handleMouseOver = () => {
    const targetText = "I AM A SOFTWARE ENGINEER";
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ ";
    let iteration = 0;

    const interval = setInterval(() => {
      setHackerText((prevText) =>
        prevText
          .split("")
          .map((letter, index) =>
            index < iteration
              ? prevText[index]
              : letters[Math.floor(Math.random() * 27)]
          )
          .join("")
      );

      if (iteration >= targetText.length) {
        clearInterval(interval);
        setHackerText(targetText);
      }

      iteration += 1 / 40;
    }, 5);
  };

  useEffect(() => {
    handleMouseOver(); // Run the animation when the component mounts
  }, []);

  const handleDownload = () => {
    const pdfUrl = myResume;
    const fileName = "myResume.pdf";

    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className={style.content} id="about">
      <div className={style.textBox}>
        <div className={style.topText}>
          <span>Howdy, </span>I'm
        </div>
        <div className={style.bottomText}>Arnab</div>
        <h1 className={style.hacker}>{hackerText}</h1>
        <div className={style.content1}>
          <div className={style.line}></div>
          <div className={style.shape} onClick={handleDownload}>
            <div className={style.play}></div>
          </div>
          <div className={style.resume}>See Resume</div>
        </div>
      </div>
      <div className={style.imageBox}>
        <img src={picture} alt="Profile" />
      </div>
    </div>
  );
}

export default About;
