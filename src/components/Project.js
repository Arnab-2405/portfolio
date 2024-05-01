import React, { useRef, useState } from "react";
import Spline from "@splinetool/react-spline";
import style from "../stylesheets/Project.module.css";
import { useEffect } from "react";
import data from "../datasets/data.json";

function Project() {
  const [frwdArrw, setFrwdArrw] = useState(0);
  const [backArrw, setBackArrw] = useState(9 - frwdArrw);

  const [pageId, setPageId] = useState(1);

  const handleNextClick = () => {
    setFrwdArrw(frwdArrw + 1);
    setBackArrw(9 - frwdArrw);
    simulateKeyPresses(frwdArrw);
    setPageId(pageId + 1);
  };

  const handlePrevClick = () => {
    setBackArrw(backArrw + 1);
    setFrwdArrw(9 - backArrw);
    simulateKeyPresses(backArrw);
    setPageId(pageId - 1);
  };

  const inputRef = useRef(null);
  useEffect(() => {
    const input = inputRef.current;
    const handleKeyPress = (event) => {
      if (event.key >= "0" && event.key <= "9") {
        console.log(`Key ${event.key} pressed`);
      }
    };

    input.addEventListener("keydown", handleKeyPress);

    return () => {
      input.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  const simulateKeyPresses = (value) => {
    [value].forEach((key) => {
      const event = new KeyboardEvent("keydown", {
        key: key,
        code: key,
        keyCode: key,
        which: key,
        bubbles: true,
      });
      inputRef.current.dispatchEvent(event);
    });
  };

  return (
    <>
      <div className={style.element} id="project">My Projects
        <Spline scene="https://prod.spline.design/9F5tWUbM2pQQ719c/scene.splinecode" />
      </div>
      <input ref={inputRef} type="text"></input>
      <div className={style.controls}>
        <button
          className={style.previous}
          onClick={handlePrevClick}
          disabled={pageId === 1}
        >
          Previous
        </button>
        <div></div>
        <button
          className={style.next}
          onClick={handleNextClick}
          disabled={pageId === 6}
        >
          Next
        </button>
      </div>
      <div className={style.textFields}>
        <div className={style.title}>{data[pageId - 1].title}</div>
        <div className={style.brief}>{data[pageId - 1].brief}</div>
        <div className={style.newPage}>
        </div>
      </div>
    </>
  );
}

export default Project;
