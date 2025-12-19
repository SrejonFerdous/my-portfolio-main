import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import {
  AiFillGithub,
  // AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn, FaFacebook } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Rayhan Ferdous Srejon</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} RFS</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/SrejonFerdous"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>

            <li className="social-icons">
              <a
                href="https://www.facebook.com/srejon.ferdous10"
                style={{ color: "white" }}
                target="_blank"
                rel=" noopener noreferrer"
                // className="icon-colour home-social-icons"
              >
                <FaFacebook />
              </a>
            </li>

            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/srejon-ferdous/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/srejonferdous/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
