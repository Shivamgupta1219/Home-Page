import "./Navbar.css";
import "./App.css";
import "./Footer.css";
import "./Hero.css";
import myImage from "./assets/image_1.png";
import { useState } from "react";
function Navbar() {
  const [menuOpen, setMenuOpen] = useState("true");
  return (
    <>
      <nav className="navbar">
        <ul>
          <li>
            <a href="#">mkasnjnfjkndf</a>
          </li>
          <li>639751674624</li>
          <ul>
            <li>
              <img src="" alt="img" />
            </li>
            <li>
              <img src="" alt="img" />
            </li>
            <li>
              <img src="" alt="img" />
            </li>
            <li>
              <img src="" alt="img" />
            </li>
          </ul>
        </ul>
      </nav>

      <navbaR className="nav">
        <div className="Image_Box">
          <img src={myImage} alt="img" width={210} height={50.1} />
        </div>
        <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>

        <ul className={menuOpen ? "nav-links active" : "nav-links"}>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Our Services</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Contact US</a>
          </li>
          <li>
            <a href="#">About us </a>
          </li>
          <button className="talk-btn">Talk Expert</button>
        </ul>
      </navbaR>
    </>
  );
}

export default Navbar;
