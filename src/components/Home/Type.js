import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Full-Stack Developer",
          "Blockchain & Smart Contract Developer",
          "Junior AI/ML & Deep Learning Engineer",
          "Cloud & DevOps Enthusiast",
          "Aspiring Cybersecurity Analyst",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 40,
      }}
    />
  );
}

export default Type;
