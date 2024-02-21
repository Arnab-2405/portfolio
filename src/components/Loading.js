import React, { useEffect, useRef, useState } from "react";
import "../stylesheets/Loading.css";
import { useNavigate } from "react-router-dom";

export default function Loading() {
  const [count, setCount] = useState(1);
  const [redirect, setRedirect] = useState(false);
  const intervalIdRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    intervalIdRef.current = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount < 100) return prevCount + 1;
        else return prevCount;
      });
    }, 50);

    setTimeout(() => {
      clearInterval(intervalIdRef.current);
    }, 5000);

    return () => clearInterval(intervalIdRef.current);
  }, []);

  const updateTextContent = (ref, text) => {
    if (ref.current) {
      ref.current.textContent = text;
    }
  };

  useEffect(() => {
    if (count === 99) {
      updateTextContent(val1Ref, "Initialized");
      updateTextContent(val2Ref, "Initialized");
      setRedirect(true);
    }
  }, [count]);

  useEffect(() => {
    if (redirect) {
      navigate("/Landing");
    }
  }, [redirect, navigate]);

  const val1Ref = useRef(null);
  const val2Ref = useRef(null);

  return (
    <div className="content">
      <div className="top">
        <div className="loading-bar">
          <div className="number">{count}%</div>
          <div className="initializing base" ref={val1Ref}>
            Initializing...
          </div>
          <div className="initializing-2 base" ref={val2Ref}>
            Initializing...
          </div>
        </div>
      </div>
      <div className="highlight"></div>
    </div>
  );
}
