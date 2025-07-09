//Footer.jsx
import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="developer-info">
        <img 
          src="public/Tejas Profile.jpg"  
          alt="Tejas Choukale" 
          className="developer-photo"
        />
        <div style={{ marginLeft: '20px' }}>
          <h3>Developed by Tejas Choukale</h3>
        </div>
      </div>
      <div className="social-links">
        <a href="https://github.com/dashboard" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="https://www.instagram.com/tejaschoukale/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        <a href="https://mail.google.com/mail/u/1/#inbox"><FaEnvelope /></a>
      </div>
      <p>Copyright © {year} Keeper App. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;