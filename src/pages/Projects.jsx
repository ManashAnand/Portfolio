import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import dalle from "../assets/projects/dalle.png";
import crypto from "../assets/projects/crypto.png";
import hosteldaze from "../assets/projects/hosteldaze.png";
import harryPotter from "../assets/projects/harryPotter.png";
import strayInsight from "../assets/projects/strayInsight.png";
import dine from '../assets/projects/dine.png'
import spykam from '../assets/projects/spykam.png'
import mimo from '../assets/projects/mimo.png'
import hostelbazzar from '../assets/projects/hostelbazzar.png'
import shawty from '../assets/projects/shawty.png'

const Projects = () => {
  const loadMoreRef = useRef(null);
  const [loading, setLoading] = useState(false)


  useEffect(() => {
    // Initialize allProjects with your project data


    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setTimeout(() => {
            setLoading(true)
          }, 3000);
        }
      },
      { threshold: 1.0 }
    );

    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current);
    }

    return () => {
      if (loadMoreRef.current) {
        observer.unobserve(loadMoreRef.current);
      }
    };
  }, []);

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
          <Col md={4} className="project-card" >
            <ProjectCard
              imgPath={shawty}
              isBlog={false}
              title="Shawty"
              description="Created Socio URL Shortener – a web application aimed at developers to simplify link sharing and enhance their professional profiles. Designed to enable developers to shorten achievement URLs and showcase critical profiles, such as GitHub, Codeforces, and LeetCode IDs, on a single platform.Advanced analytics reveal insights on link clicks, including user location and click count, helping developers understand audience reach and engagement."
              ghLink="https://github.com/ManashAnand/Shawty"
              demoLink="https://shawty-eight.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={spykam}
              isBlog={false}
              title="Spy-Kam"
              description="SpyKam is a versatile surveillance tool designed to enable users to remotely monitor and capture images from a camera device. This application is perfect for use cases requiring minimal intervention, such as security or observation setups, where real-time visual feedback is crucial.Simplified controls to allow users with varying technical expertise to operate the tool effectively.This project offers a reliable solution for individuals  secure surveillance and visual monitoring capabilities."
              ghLink="https://github.com/ManashAnand/SpyKam"
              demoLink="https://spy-kam.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hostelbazzar}
              isBlog={false}
              title="HostelBazzar"
              description="HostelBazzar is a comprehensive web application designed to simplify the hostel room neccesity item purchases, particularly for large student populations. Built to handle over 1000 students per hostel, this app provides an efficient, scalable solution for managing room necessity items.Allows students to browse, select, and book daily to daily item with ease, reducing overhead.Developed with scalability in mind, enabling potential expansion to serve multiple hostels and institutions worldwide."
              ghLink="https://github.com/ManashAnand/HostelBazzar"
              demoLink="https://hostelbazzar.vercel.app/"
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
              imgPath={mimo}
              isBlog={false}
              title="Memo-Online-Game"
              description="Memo Online Game is an engaging and interactive memory-based game designed to challenge players' cognitive skills and memory retention. The game offers a fun, digital version of the classic memory-matching game, allowing users to play solo or invite others for a multiplayer experience.Connect and compete with friends online, adding a social and competitive edge.Built with an intuitive UI, offering smooth gameplay across devices."
              ghLink="https://github.com/ManashAnand/memo-online-game"
              // demoLink="https://strayinsights.netlify.app/"
            />
          </Col>







          {
            loading && (
              <>

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
              imgPath={hosteldaze}
              isBlog={false}
              title="Hostel Daze"
              description="Pioneered the visionary development of a state-of-the-art hostel room booking website, meticulously crafted for unparalleled seamlessness in accommodation processes. Upon successful implementation, this groundbreaking system not only showcases its prowess in efficiently managing the lodging requirements of over 1000 students within a singular hostel but also stands as a highly adaptable solution primed for extensive global utilization."
              ghLink="https://github.com/ManashAnand/HostelDaze"
              demoLink="https://hostel-daze.vercel.app/"
            />
          </Col>

              </>
            )
          }

          <h1 ref={loadMoreRef}>
            {
              !loading && (
                <span style={{color:"white",fontSize:"20px"}}>
                  Loading more ...
                </span>
              )
            }
            </h1>
        </Row>
      </Container>
    </Container>
  )
}

export default Projects