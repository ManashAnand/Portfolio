import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import dalle from "../assets/projects/dalle.png";
import crypto from "../assets/projects/crypto.png";
import hosteldaze from "../assets/projects/hosteldaze.png";
import harryPotter from "../assets/projects/harryPotter.png";
import strayInsight from "../assets/projects/strayInsight.png";
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
              imgPath={hosteldaze}
              isBlog={false}
              title="Hostel Daze"
              description="Pioneered the visionary development of a state-of-the-art hostel room booking website, meticulously crafted for unparalleled seamlessness in accommodation processes. Upon successful implementation, this groundbreaking system not only showcases its prowess in efficiently managing the lodging requirements of over 1000 students within a singular hostel but also stands as a highly adaptable solution primed for extensive global utilization."
              ghLink="https://github.com/ManashAnand/HostelDaze"
              demoLink="https://hostel-daze.vercel.app/"
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
              imgPath={strayInsight}
              isBlog={false}
              title="Stray-Insights"
              description="Trailblazed the creation of Stray Insights, a revolutionary decentralized web application designed for streamlined and transparent donation processes. This innovative platform, meticulously crafted, promises to redefine the landscape of philanthropy by offering a seamless and decentralized solution for charitable contributions. When deployed, Stray Insights not only enhances the efficiency of donation workflows but also ensures transparency and accountability in the distribution of funds."
              ghLink="https://github.com/ManashAnand/Stray-Insights"
              demoLink="https://strayinsights.netlify.app/"
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
              imgPath={harryPotter}
              isBlog={false}
              title="Harry Potter Wiki"
              description="Embarked on the visionary development of the Harry Potter Wiki, an immersive web application meticulously curated to provide comprehensive character descriptions from the beloved Harry Potter series. Boasting a mind-blowing user interface, this enchanting platform elevates the exploration of each character, offering a visually stunning and user-friendly experience. From protagonists to supporting cast, the Harry Potter Wiki delivers an unparalleled journey into the wizarding world. "
              ghLink="https://github.com/ManashAnand/HarryPotterWiki"
              demoLink="https://harry-potter-wiki.vercel.app/"
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