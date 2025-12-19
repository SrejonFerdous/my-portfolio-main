import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am{" "}
            <span className="purple">Rayan Ferdous Srejon</span> from{" "}
            <span className="purple">Dhaka, Bangladesh.</span>
            <br />
            I am a Computer Science & Engineering graduate from Ahsanullah
            University of Science and Technology (AUST).
            <br />
            I am passionate about Full-stack development, Blockchain systems,
            Machine Learning, Deep Learning, Cybersecurity and Cloud
            Technologies—building solutions that combine software and research.
            <br />
            <br />
            Apart from coding, here are a few activities I love doing!
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Open-source contributions & GitHub projects
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring Cybersecurity topics and Ethical
              hacking
            </li>
            <li className="about-activity">
              <ImPointRight /> Participating in Tech Workshops
            </li>
            <li className="about-activity">
              <ImPointRight /> Contribute and Research in AI/ML fields to solve
              real world problems
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Football and Video Games
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Turning ideas into impactful, real-world solutions."
          </p>
          <footer className="blockquote-footer">Srejon</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
