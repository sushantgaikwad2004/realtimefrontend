import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons"; 
import { faFacebook, faTwitter, faInstagram, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"; // Fixed imports

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="social-icons">
          <a href="https://www.instagram.com/sushant__1106?igsh=ODl6NndyaXFkam9x" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
          <a href="https://github.com/sushantgaikwad2004" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} size="2x" /> {/* Fixed faGithub */}
          </a>
          <a href="https://www.linkedin.com/in/sushant-gaikwad-4719032b2/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="2x" /> {/* Fixed faLinkedin */}
          </a>
          <a href="https://sushant-portfoliog.netlify.app/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGlobe} size="2x" />
          </a>
        </div>
        <p>Created By Sushant</p>
        <p>sushantgaikwad287@gmail.com</p>
      </div>
    </footer>
  );
};

export default Footer;
