import React, { useState, useEffect } from "react";
import style from "../stylesheets/Timeline.module.css";
import Lottie from "lottie-react";
import groovyWalkAnimation from "../assets/animate.json";
import cgi from "../assets/company/cgi.jpg"

function Timeline() {
  const [filledHeight, setFilledHeight] = useState(0);

  useEffect(() => {
    function updateFilledHeight() {
      const newHeight =
        (window.scrollY / (document.body.scrollHeight - window.innerHeight)) *
        100;
      setFilledHeight(newHeight);
    }

    window.addEventListener("scroll", updateFilledHeight);

    updateFilledHeight();

    return () => {
      window.removeEventListener("scroll", updateFilledHeight);
    };
  }, []);

  return (
    <div className={style.flexbox}>
      <div className={style.timeline}>
        <div
          className={style.filled}
          style={{ height: `${filledHeight}%` }}
        ></div>
      </div>
      <div className={style.rightCard}>
        <div className={style.content}>
          <>
            <div className={style.arrow}></div>
            <div className={style.card}>
              <img src={cgi} alt="image"></img>
              <div className={style.text}>
                <h3>Software Developer</h3>
                <h4>2023 - Present</h4>
                <h5>CGI Inc.</h5>
              </div>
            </div>
            <div className={style.pseduo}></div>
          </>
        </div>
        <div className={style.svg}>
          <Lottie className={style.image} animationData={groovyWalkAnimation} loop={true} />
          </div>
      </div>
    </div>
  );
}

export default Timeline;
