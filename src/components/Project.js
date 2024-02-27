import React, { useRef, useState } from "react";
import Spline from "@splinetool/react-spline";
import style from "../stylesheets/Project.module.css";
import { useEffect } from "react";

function Project() {
  const [frwdArrw, setFrwdArrw] = useState(0);
  const [backArrw, setBackArrw] = useState(9 - frwdArrw);

  const handleNextClick = () => {
    setFrwdArrw(frwdArrw + 1);
    setBackArrw(9 - frwdArrw);
    simulateKeyPresses(frwdArrw);
  };

  const handlePrevClick = () => {
    setBackArrw(backArrw + 1);
    setFrwdArrw(9 - backArrw);
    simulateKeyPresses(backArrw);
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
      <Spline scene="https://prod.spline.design/k8ati3Tdxtt1T81A/scene.splinecode" />
      <input ref={inputRef} type="text"></input>
      <div className={style.controls}>
        <div
          className={style.previous}
          onClick={handlePrevClick}
          disabled={frwdArrw === 0}
        >
          Previous
        </div>
        <div></div>
        <div
          className={style.next}
          onClick={handleNextClick}
          disabled={!(frwdArrw + 1 <= 5)}
        >
          Next
        </div>
      </div>
    </>
  );
}

export default Project;
