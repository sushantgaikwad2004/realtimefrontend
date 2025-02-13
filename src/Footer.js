import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons"; 
import { faFacebook, faTwitter, faInstagram, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"; // Fixed imports

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="social-icons">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} size="2x" /> {/* Fixed faGithub */}
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="2x" /> {/* Fixed faLinkedin */}
          </a>
          <a href="https://www.website.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGlobe} size="2x" />
          </a>
        </div>
        <p>© 2025 Your Company. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
