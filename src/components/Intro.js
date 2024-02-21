import React, { useEffect } from "react";
import "../stylesheets/Landing.css";
import "../stylesheets/Intro.css";
import { Link, unstable_HistoryRouter, unstable_usePrompt } from "react-router-dom";
import videoBg from "../assets/black_background.mp4";

function Intro() {
  setTimeout(() => {
    let property = document.getElementById("off");
    property.style.display = "none";
  }, 1);

  setTimeout(()=>{
    let boxShow=document.getElementById("text");
    boxShow.style.display="block";
  },2001)

  setTimeout(()=>{
    let boxShow=document.getElementById("text");
    boxShow.textContent="स्वागत";
  },4001)

//   French
  setTimeout(()=>{
    let boxShow=document.getElementById("text");
    boxShow.textContent="Bienvenue";
  },5001)

// German
  setTimeout(()=>{
    let boxShow=document.getElementById("text");
    boxShow.textContent="Willkommen";
  },6001)

//   Japanese
  setTimeout(()=>{
    let boxShow=document.getElementById("text");
    boxShow.textContent="ようこそ";
  },7001)

//Russian
  setTimeout(()=>{
    let boxShow=document.getElementById("text");
    boxShow.textContent="Добро пожаловать";
  },8001)

// Italian
  setTimeout(()=>{
    let boxShow=document.getElementById("text");
    boxShow.textContent="Benvenuto/a";
  },9001)

//EXIT
  setTimeout(()=>{
    let boxShow=document.getElementById("rectExit");
    boxShow.classList.add('outro')
  },10001)


  setTimeout(()=>{
    let boxShow=document.getElementById("text");
    boxShow.style.display="none";
    boxShow=document.getElementById("rectExit");
    boxShow.style.display="none";
    



  },11300)


  

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
