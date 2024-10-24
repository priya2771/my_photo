import React from "react";
import PropTypes from "prop-types";
import { HashLink as Link } from "react-router-hash-link";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FaBars } from "react-icons/fa6";
import logo from "../assets/logo1.png";

export default function Navbar(props) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="container">
      <header>
        <a href="/" className="logo">
          <img src={logo} alt="logo" />
          <h4>{props.title}</h4>
        </a>

        <nav>
          <ul className={isOpen ? "nav-links active" : "nav-links"}>
            {/* <button onClick={closeItem}>X</button> */}
            <li>
              <Link smooth to="#home" className="active">
                Home
              </Link>
            </li>
            <li>
              <Link smooth to="#collection" className="active">
                Collection
              </Link>
            </li>
            <li>
              <Link smooth to="#about" className="active">
                About
              </Link>
            </li>
          </ul>
          <div className="icon-bar" onClick={toggleMenu}>
            <FaBars />
          </div>
        </nav>
        <div className="search">
          <form action="/">
            <input type="text" placeholder="Search..." name="search" />
            <button type="search">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </form>
        </div>
      </header>
    </div>
  );
}

Navbar.propTypes = { title: PropTypes.string.isRequired };
