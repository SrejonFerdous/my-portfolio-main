import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import nextrip from "../../Assets/Projects/NexTrip1.png";
// import cloudRestaurant from "../../Assets/Projects/cloud-restaurant.png";
// import hospital from "../../Assets/Projects/hospital.png";
// import iot from "../../Assets/Projects/iot.png";
// import exam from "../../Assets/Projects/exam.png";
// import zombie from "../../Assets/Projects/zombie.png";
// import buildingPlayground from "../../Assets/Projects/building-playground.png"; // NEW
import DigitalRead from "../../Assets/Projects/DigitalRead.png";
import LearnEase from "../../Assets/Projects/LearnEase.png";
import Messiah from "../../Assets/Projects/Messiah.png";
import couchlamp from "../../Assets/Projects/couchlamp.png";
import TravelBuddy from "../../Assets/Projects/TravelBuddy.png";
import employee from "../../Assets/Projects/Employee Management.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some of the projects I have worked on during my studies and
          research journey.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* NexTrip Project */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nextrip}
              isBlog={false}
              title="NexTrip: Hybrid Blockchain Ride-Sharing Platform"
              description="Thesis project: a full-stack decentralized ride-sharing system using a hybrid blockchain architecture. The web app is built with React.js, while ride logic is implemented via Ethereum smart contracts for on-chain operations and Hyperledger Fabric for off-chain private processing. Includes a cross-platform mobile app built with React Native, featuring wallet integration, secure authentication, and gas-optimized contract calls."
              ghLink="https://github.com/MostafizFahim/Ride-Sharing-Dapp-Web-Thesis-project.git"
              demoLink2="https://github.com/MostafizFahim/NexTrip-Ride-Sharing-Dapp-Mobile.git"
              demoLink2Text="Mobile App"
              technologies={[
                "React.js",
                "React Native (Expo)",
                "Ethereum Smart Contracts",
                "Hyperledger Fabric",
                "Node.js",
              ]}
            />
          </Col>

          {/* Book Store Project */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={DigitalRead}
              isBlog={false}
              title="DigitalRead: E-Book Store."
              description="An E-Commerce book website where users can purchase books. Provides modules for homepage, orders, customers, and admin with full CRUD support. Uses Razor pages for a responsive UI and a normalized database schema, ensuring smooth and efficient backend–database integration."
              ghLink="https://github.com/SrejonFerdous/DigitalRead_E-Book-Store"
              technologies={["ASP.NET", "C#", "MS SQL Server", "Razor Pages"]}
            />
          </Col>

          {/* Online Platform Project */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={LearnEase}
              isBlog={false}
              title=""
              description=" A web-based knowledge sharing platform for students, where they can enroll in skill-building courses, attend them, watch tutorial videos, and learn. Provides modules for homepage, courses, orders, customers, customer profile interaction and admin with full CRUD support. Uses Bootstrap for a responsive UI and has a normalized database schema, ensuring smooth and efficient backend–database integration."
              ghLink="https://github.com/SrejonFerdous/LearnEase"
              demoLink2="https://github.com/SrejonFerdous/LearnEase"
              demoLink2Text="PHP Web Version"
              technologies={[
                "MySQL",
                "PHP",
                "Bootstrap",
                "HTML/CSS",
                "phpMyAdmin",
              ]}
            />
          </Col>

          {/* IoT Projects */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={employee}
              isBlog={false}
              title="Connect With Team — Employee Management System"
              description=" An employee management system with an admin panel that allows companies to create a sorted and well-defined management system for their employee-related details and information regarding their employees while managing their payroll.
"
              ghLink="https://github.com/SrejonFerdous/Connect-With-Team"
              demoLink2="https://github.com/SrejonFerdous/Connect-With-Team"
              demoLink2Text="Connect With Team"
              technologies={[
                "HTML/CSS",
                "JavaScript",
                "MySQL",
                "PHP",
                // "Sensors (ECG, SpO₂, Temp/Hum)",
                // "Firebase",
                // "ThingSpeak",
                // "MQTT",
              ]}
            />
          </Col>

          {/* Ride Booking Project */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TravelBuddy}
              isBlog={false}
              title="TravelBuddy — Android Trip Planning App"
              description="A native Android application built with Java to streamline trip Planning for users. Implements intuitive screens for hotel selection and registration workflows, with local data handling for a smooth offline-friendly user experience."
              ghLink="https://github.com/SrejonFerdous/TravelBuddy"
              technologies={["Java", "Android Studio", "Android SDK"]}
            />
          </Col>

          {/* 3D Couch & Lamp Project */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={couchlamp}
              isBlog={false}
              title="3D Couch & Lamp — Computer Graphics"
              description="A 3D interactive scene created using Three.js, featuring Couch Lamp and Living room environment. Includes custom vertex and fragment shaders to experiment with lighting, materials, and real-time rendering for web-based computer graphics."
              ghLink="https://github.com/SrejonFerdous/Couch_And_Lamp-main"
              technologies={[
                "Three.js",
                "JavaScript",
                "Computer Graphics",
                "Custom Shaders",
              ]}
            />
          </Col>

          {/* Fighting Game */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Messiah}
              isBlog={false}
              title="The Messiah — 2D Game"
              description="A 2D survival game implemented in C++ using the igraphics.h library. Features player movement, collision detection, enemy AI, enemy spawning, level transitions, music control, scoring, and basic game mechanics that showcase graphics rendering, event handling, and fundamental game development concepts."
              ghLink="https://github.com/MostafizFahim/Zombie-Attack-i-graphics.git"
              technologies={["C++", "igraphics.h", "2D Game Development"]}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
