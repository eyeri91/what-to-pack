import React from "react";
import githubIcon from "../assets/githubIcon.png";

function Footer() {
  return (
    <footer className="fixed-bottom text-center custom-light fw-light py-2">
      <a href="https://github.com/eyeri91/what-to-pack">
        <img src={githubIcon} alt="github-icon" className="github-icon me-1" />
      </a>
      Yuri The Doer
    </footer>
  );
}

export default Footer;
