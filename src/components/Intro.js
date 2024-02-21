import React, { useEffect, useState } from "react";
import "../stylesheets/Landing.css";
import "../stylesheets/Intro.css";
import { Link, useNavigate } from "react-router-dom";
import videoBg from "../assets/black_background.mp4";

function Intro() {
  const navigate = useNavigate();
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      const property = document.getElementById("off");
      property.style.display = "none";
    }, 1);

    const timer2 = setTimeout(() => {
      const boxShow = document.getElementById("text");
      boxShow.style.display = "block";
    }, 2001);

    const timer3 = setTimeout(() => {
      const boxShow = document.getElementById("text");
      boxShow.textContent = "स्वागत";
    }, 4001);

    const timer4 = setTimeout(() => {
      const boxShow = document.getElementById("text");
      boxShow.textContent = "Bienvenue";
    }, 5001);

    const timer5 = setTimeout(() => {
      const boxShow = document.getElementById("text");
      boxShow.textContent = "Willkommen";
    }, 6001);

    const timer6 = setTimeout(() => {
      const boxShow = document.getElementById("text");
      boxShow.textContent = "ようこそ";
    }, 7001);

    const timer7 = setTimeout(() => {
      const boxShow = document.getElementById("text");
      boxShow.textContent = "Добро пожаловать";
    }, 8001);

    const timer8 = setTimeout(() => {
      const boxShow = document.getElementById("text");
      boxShow.textContent = "Benvenuto/a";
    }, 9001);

    const timer9 = setTimeout(() => {
      const boxShow = document.getElementById("rectExit");
      boxShow.classList.add("outro");
    }, 10001);

    const timer10 = setTimeout(() => {
      const boxShow = document.getElementById("text");
      boxShow.style.display = "none";
      const rectExit = document.getElementById("rectExit");
      rectExit.style.display = "none";
      setRedirect(true);
    }, 11300);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
      clearTimeout(timer6);
      clearTimeout(timer7);
      clearTimeout(timer8);
      clearTimeout(timer9);
      clearTimeout(timer10);
    };
  }, []);

  useEffect(() => {
    if (redirect) {
      navigate("/");
    }
  }, [redirect, navigate]);

  return (
    <>
      <div className="background-overlay" id="off">
        <video src={videoBg} autoPlay muted loop></video>
        <div className="overlay"></div>
        <div className="loader">
          <Link to={"/Intro"}>
            <button className="glitch-btn">Enter</button>
          </Link>
        </div>
      </div>

      <div className="content1" id="greetings">
        <div className="rect" id="rectExit"></div>
        <div id="text">welcome</div>
      </div>
    </>
  );
}

export default Intro;
