import React, { useEffect, useState, useRef } from "react";
import style from "../stylesheets/Navbar.module.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [ ,setCtime] = useState("");
  const [hoursDV, setHours] =useState("00");
  const [minutesDV, setMinutes] =useState("00");

  useEffect(() => {
    const intervalId = setInterval(updateTime, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const updateTime = () => {
    const time = new Date();
    const hours = time.getUTCHours().toString().padStart(2, "0");
    const minutes = time.getUTCMinutes().toString().padStart(2, "0");
    setHours(hours);
    setMinutes(minutes);
    const formattedTime = `${hours}:${minutes} GMT`;
    setCtime(formattedTime);
  };

  useEffect(() => {
    const handleClick = (id) => {
      const element = document.getElementById(id);
      if (element) {
        let offset = 100;
        if (id === "contact") {
          offset = 0;
        }
        if (id === "project") {
          offset = -50;
        }
        const elementPosition = element.offsetTop - offset;
        window.scrollTo({
          top: elementPosition,
          behavior: "smooth",
        });
      }
    };

    const handleLinkClick = (id) => {
      return (event) => {
        event.preventDefault();
        handleClick(id);
      };
    };

    const links = document.querySelectorAll(".scroll-link");
    links.forEach((link) => {
      const id = link.getAttribute("href").substring(1);
      link.addEventListener("click", handleLinkClick(id));
    });

    return () => {
      links.forEach((link) => {
        const id = link.getAttribute("href").substring(1);
        link.removeEventListener("click", handleLinkClick(id));
      });
    };
  }, []);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const mouseRef = useRef();

  useEffect(() => {
    mouseRef.current = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", mouseRef.current);

    return () => {
      window.removeEventListener("mousemove", mouseRef.current);
    };
  }, []);

  return (
    <>
      <div className={style.layout}>
        <div className={style.header}>Portfolio</div>
        <div className={style.list}>
          <ul>
            <li>
              <Link
                to={"/Landing"}
                style={{ textDecoration: "none", color: "#F4F4F4" }}
              >
                Home
              </Link>
            </li>
            <li>
              <a href="#about" className="scroll-link">
                About
              </a>
            </li>
            <li>
              <a href="#project" className="scroll-link">
                Project
              </a>
            </li>
            <li>
              <a href="#gallery" className="scroll-link">
                Gallery
              </a>
            </li>
            <li>
              <a href="#contact" className="scroll-link">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className={style.time}>{hoursDV}<span className={style.blink}>:</span>{minutesDV} GMT</div>
      </div>
      <div className={style.location}>
        <div className={style.xAxis}>{mousePosition.x} : X</div>
        <div className={style.yAxis}>{mousePosition.y} : Y</div>
      </div>
    </>
  );
}

export default Navbar;
