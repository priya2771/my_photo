import React from "react";
// import { NavLink } from "react-router-dom";
// import Marquee from "react-fast-marquee";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFacebook } from "@fortawesome/fontawesome-free";
import PropTypes from "prop-types";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
export default function about(props) {
  return (
    <div id="about">
      <div className="about">
        <div className="about-img ">
          <img src="../assets/about.png" alt="about" />
          <img
            src="https://images.unsplash.com/photo-1558002959-405156bed4b1?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="about"
          />
          <img
            src="https://images.unsplash.com/photo-1495121553079-4c61bcce1894?q=80&w=1881&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <img
            src="https://images.unsplash.com/photo-1560343090-f0409e92791a?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <img
            src="https://images.unsplash.com/photo-1542545073-8768795964d6?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <img
            src="https://plus.unsplash.com/premium_photo-1675896084251-9f6b085deed1?q=80&w=1870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>

        <div className="about-content">
          <h1>About</h1>
          <span>.......................................</span>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Consequatur eligendi ipsum excepturi sit libero placeat voluptate ex
            veniam, fugiat animi beatae. Deleniti veritatis a ipsam, nesciunt in
            dignissimos repellat distinctio!
          </p>
          <button className="contact-info" onClick={props.contact}>
            Contact Me
          </button>
        </div>
      </div>
      <div className="footer">
        <div className="footer-content">
          <a href="/home">
            <img src="./assets/logo1.png" alt="" />
          </a>
          <h1>My-Photos</h1>
        </div>
        <div className="link-content">
          <div className="social-links">
            <a href="/">
              <FaFacebook />{" "}
            </a>
            <a href="/">
              <FaLinkedin />
            </a>
            <a href="/">
              <FaInstagram />
            </a>
            <a href="/">
              <SiGmail />
            </a>
          </div>
          <h2>Inquires</h2>
          <a href="/">
            <h4>inquires1234@email.com</h4>
          </a>
        </div>
      </div>
    </div>
  );
}
about.propTypes = { title: PropTypes.string.isRequired };
