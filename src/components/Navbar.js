import React, { useEffect } from "react";
import style from "../stylesheets/Navbar.module.css";

function Navbar() {
  // let time = new Date().toLocaleTimeString();

  // const [ctime, setTime] = useState(time);
  // const UpdateTime = () => {
  //   time = new Date().toLocaleTimeString();
  //   setTime(time);
  // };
  // setInterval(UpdateTime);


  useEffect(() => {
    const handleClick = (id) => {
      const element = document.getElementById(id);
      if (element) {
        let offset = 100; // Default offset
        if (id === "contact") {
          offset = 0; // Offset for the "Contact" component
        }
        const elementPosition = element.offsetTop - offset;
        window.scrollTo({
          top: elementPosition,
          behavior: "smooth"
        });
      }
    };

    // Function to handle clicks on links
    const handleLinkClick = (id) => {
      return (event) => {
        event.preventDefault(); // Prevent default anchor behavior
        handleClick(id); // Call handleClick with the target ID
      };
    };

    // Add event listeners to each link
    const links = document.querySelectorAll('.scroll-link');
    links.forEach(link => {
      const id = link.getAttribute('href').substring(1); // Extract target ID from href
      link.addEventListener('click', handleLinkClick(id)); // Add click event listener
    });

    // Clean up event listeners on component unmount
    return () => {
      links.forEach(link => {
        const id = link.getAttribute('href').substring(1);
        link.removeEventListener('click', handleLinkClick(id));
      });
    };
  }, []); // Empty dependency array ensures the effect runs only once after component mount

  return (
    <>
      <div className={style.layout}>
        <div className={style.header}>Portfolio</div>
        <div className={style.list}>
          <ul>
            <li>
              <a href="#home" className="scroll-link" style={{ textDecoration: "none", color: "#F4F4F4" }}>
                Home
              </a>
            </li>
            <li><a href="#about" className="scroll-link">About</a></li>
            <li><a href="#project" className="scroll-link">Project</a></li>
            <li><a href="#gallery" className="scroll-link">Gallery</a></li>
            <li><a href="#contact" className="scroll-link">Contact</a></li>
          </ul>
        </div>
        <div className={style.time}>clock{/* {ctime} */}</div>
        {/* TODO */}
      </div>
      {/* <Location></Location>*/}
    </>
  );
}

export default Navbar;
