//Footer.jsx
import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="developer-info">
        <img 
          src="/ajaypawar.jpg"  
          alt="Ajay Pawar" 
          className="developer-photo"
        />
        <div style={{ marginLeft: '20px' }}>
          <h3>Developed by Ajay Pawar</h3>
        </div>
      </div>
      <div className="social-links">
        <a href="https://github.com/dashboard" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="https://www.instagram.com/mr_ajay_6711?igsh=MXc3ZDVlZ3BvZGx1ZQ==" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        <a href="pawarajaylaxman123@gmail.com"><FaEnvelope /></a>
      </div>
      <p>Copyright © {year} Keeper App. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;