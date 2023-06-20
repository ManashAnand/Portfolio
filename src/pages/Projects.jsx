import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import dalle from "../assets/projects/dalle.png";
import crypto from "../assets/projects/crypto.png";
import connectTo from "../assets/projects/connectTo.png";
import news from "../assets/projects/news.png";
import ecm from "../assets/projects/ecm.png";
import dine from '../assets/projects/dine.png'

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={connectTo}
              isBlog={false}
              title="Connect-To"
              description="Elevate your professional presence on our cutting-edge Connect-To app. Craft a compelling profile, connect with industry peers, and ignite meaningful conversations through engaging posts. Showcase your expertise, amplify your personal brand, and garner recognition with a seamless liking feature. Unleash the potential of networking, knowledge-sharing, and career growth with our platform designed for professionals like you."
              ghLink="https://github.com/ManashAnand/Connect-To"
            />
          </Col>  

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={crypto}
              isBlog={false}
              title="Crypto Tracker"
              description="Track the ever-evolving world of cryptocurrencies with our comprehensive app. Stay informed about the top 100 blockchain projects, their real-time rates, and explore insightful charts powered by Chart.js. Safeguard your portfolio and access personalized features with our secure user database integration using Firebase. Embrace the future of finance and make informed decisions with our powerful crypto tracker app"
              ghLink="https://github.com/ManashAnand/Crypto_Tracker"
              demoLink="https://crypto-tracker-updated.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecm}
              isBlog={false}
              title="E‑Commerce Website"
              description="This ecommerce website utilizes a REST API built with Nodejs and Expressjs, allowing for easy CRUD operations on user profiles, products and admin panel. The user interface is designed for efficient product management and includes a complete purchase process. The admin panel, accessible for CRUD on users and products. Razor pay is integrated to handle customer payments atleast showing the details. The website uses MongoDB  as the database."
              ghLink="https://github.com/ManashAnand/Ecommerce-app"
              demoLink="https://easy-tan-bighorn-sheep-cap.cyclic.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dalle}
              isBlog={false}
              title="Dalle 2.0"
              description="Experience the cutting-edge capabilities of DALL·E 2.0 in our revolutionary app. Unleash your creativity by generating stunning images from text descriptions, while our app beautifully showcases them on-screen with a captivating visual presentation. Harness the power of AI to transform your ideas into visually striking artwork, all within the palm of your hand. Explore limitless possibilities and witness the future of image creation with our feature-rich DALL·E 2.0 app."
              ghLink="https://github.com/ManashAnand/Dall-e-2.0"

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={news}
              isBlog={false}
              title="News App"
              description="Stay informed and connected with our dynamic news app, delivering an infinite stream of up-to-the-minute news updates. Dive into a vast array of topics, from global affairs to technology trends, and easily customize your news feed using intuitive filters. Whether you're seeking breaking news or in-depth analysis, our app provides a seamless browsing experience, ensuring you're always in the know. Explore the world of news at your fingertips and personalize your information journey with our comprehensive news app. "
              ghLink="https://github.com/ManashAnand/NewsApp"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dine}
              isBlog={false}
              title="Dine me"
              description="Discover endless culinary opportunities with our innovative restaurant app. Connect with a multitude of restaurants to explore exciting dining options, access their menus, and filter by specific food items to find your perfect dish. Whether you're craving a particular cuisine or looking for a specific dish, our app provides a seamless experience to satisfy your taste buds. Unlock a world of flavors and connect with multiple restaurant opportunities through our convenient and feature-rich restaurant app."
              ghLink="https://github.com/ManashAnand/DineMe"
              demoLink="https://manashanand.github.io/DineMe/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Projects