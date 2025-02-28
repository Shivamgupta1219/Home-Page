import "./Navbar.css";
import "./Footer.css";
import "./Hero.css";
import myImage from "./assets/image_1.png";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram,faTwitter} from "@fortawesome/free-brands-svg-icons";
import { faP } from "@fortawesome/free-solid-svg-icons";


function Navbar() {
  const [menuOpen, setMenuOpen] = useState("true");
  return (
    <>
      <nav className="navbar">
        <ul>
          <li>
            <a href="#">www.registerkaro.in</a>
          </li>
          <li>
          </li>
          
          <li>+63975167009</li>
          <li>
            <FontAwesomeIcon icon={faFacebook} style={{color:"white"}} />
          </li>
          <li>
            <FontAwesomeIcon icon={faInstagram} style={{color: "#e7eaee",}} />
          </li>
          <li>
            <FontAwesomeIcon icon={faP} style={{color: "#f7f7f8",}} />
          </li>
          <li>
            <FontAwesomeIcon icon={faTwitter} style={{color: "white"}} />
          </li>
        </ul>
      </nav>

      <div className="nav">
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
      </div>
    </>
  );
}

export default Navbar;
