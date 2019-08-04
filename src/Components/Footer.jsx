import React from "react";
import GithubLogo from "../icons/GitHub-Mark-64px.png";
import LinkedInLogo from "../icons/LI-In-Bug.png";

export default function Footer() {
  return (
    <div style={{ textAlign: "center", fontSize: "0.6rem", margin: "10px 0" }}>
      <span>A React Hooks app by Scott Ratigan.</span>
      <a
        href="https://github.com/scotteratigan"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={GithubLogo} style={{ height: "1rem", margin: "0 5px" }} alt="Github Logo" />
      </a>
      <a
        href="https://www.linkedin.com/in/scotteratigan/"
        target="_blank"
        rel="noopener noreferrer"
      >
      <img src={LinkedInLogo} style={{ height: "1rem", margin: "0 5px" }} alt="LinkedIn Logo" />
      </a>
    </div>
  );
}
