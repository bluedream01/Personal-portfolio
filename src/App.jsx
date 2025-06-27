import { useState,useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons"; // <-- Import the icon
import GlareHover from "./blocks/Animations/GlareHover/GlareHover";
import FluidGlass from "./blocks/Components/FluidGlass/FluidGlass";
import TiltedCard from "./blocks/Components/TiltedCard/TiltedCard";
import LetterGlitch from "./blocks/Backgrounds/LetterGlitch/LetterGlitch";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { motion } from "framer-motion";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faGithub,
  faReact,
  faPython,
} from "@fortawesome/free-brands-svg-icons";
import VariableProximity from "./blocks/TextAnimations/VariableProximity/VariableProximity";

import { faCode } from "@fortawesome/free-solid-svg-icons"; // For C++ or fallback

function App() {
  const containerRef = useRef(null);
  //   const [count, setCount] = useState(0);
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true, // animate only once
    });
    window.addEventListener("load", AOS.refresh);
  }, []);

  return (
    <>
      <div className="complete">
        <nav className="navbar">
          <div className="name">Swpnanil Das</div>
          <div className="buttons-nav">
            <div className="Home-button "><a href="#Home">Home</a></div>
            <div className="about-button"><a href="#About">About</a></div>
            <div className="Projects-button"><a href="#Project">Projects</a></div>
            <div className="Education-button"><a href="#Education">Education</a></div>
            <div className="Contact-button"><a href="#Contact">Contact</a></div>
          </div>
        </nav>
        <div className="hero" id="Home">
          {/* <LetterGlitch
            glitchSpeed={50}
            centerVignette={true}
            outerVignette={false}
            smooth={true}> */}
          {/* <GlareHover
            glareColor="#ffffff"
            glareOpacity={0.3}
            glareAngle={-30}
            glareSize={300}
            transitionDuration={800}
            playOnce={false}
            className="glare"
          > */}
          <div className="hero-text">
            {/* <FluidGlass
              mode="lens" // or "bar", "cube"
              lensProps={{
                scale: 0.25,
                ior: 1.15,
                thickness: 5,
                chromaticAberration: 0.1,
                anisotropy: 0.01,
              }}
              // add specific props if using cube mode
            />  */}
            <div ref={containerRef} style={{ position: "relative" }}>
              <VariableProximity
                label={
                  "Swpnanil Das"
                }
                className={"variable-proximity-demo hero-name"}
                fromFontVariationSettings="'wght' 400, 'opsz' 9"
                toFontVariationSettings="'wght' 1000, 'opsz' 40"
                containerRef={containerRef}
                radius={100}
                falloff="linear"
              />
            </div>
            {/* <h1 className="hero-name">SWPNANIL DAS</h1> */}
            <p className="hero-details">
              Blending Art, Code, and AI to shape tomorrow’s digital world.
              Pushing the boundaries of creativity with code and cognition.
            </p>
          </div>
          {/* </LetterGlitch> */}
          {/* </GlareHover> */}
        </div>
        <div className="About" id="About">
          <h2 className="About-text">About me</h2>
          <div className="About-details">
            <div className="Tilted-card">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: false, amount: 0.2 }}
              >
                <TiltedCard
                  imageSrc="/Swpnanil.jpg"
                  altText="Kendrick Lamar - GNX Album Cover"
                  captionText="Swpnanil Das"
                  containerHeight="400px"
                  containerWidth="400px"
                  imageHeight="300px"
                  imageWidth="300px"
                  rotateAmplitude={19}
                  scaleOnHover={1.2}
                  showMobileWarning={false}
                  showTooltip={true}
                  displayOverlayContent={true}
                  overlayContent={<p className="tilted-card-demo-text"></p>}
                  className="Tilted"
                />
              </motion.div>
            </div>
            <div className="About-text-2">
              <motion.h2
                className="heading"
                initial={{ opacity: 0, x: +50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: false }}
              >
                AI/ML Engineer & Frontend Developer
              </motion.h2>
              <motion.p
                className="About-text-3"
                initial={{ opacity: 0, x: +50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: false }}
              >
                I'm a passionate AI/ML engineer with over 2 years of experience
                developing intelligent solutions and data-driven applications. I
                specialize in designing and deploying machine learning models
                that solve real-world problems, while also having a solid
                foundation in frontend development to create intuitive and
                responsive user interfaces. My approach blends deep technical
                knowledge with creative problem-solving to build scalable and
                impactful AI systems. I'm continuously exploring advancements in
                artificial intelligence, machine learning frameworks, and modern
                web technologies to stay ahead in this fast-evolving field.
              </motion.p>
            </div>
          </div>
        </div>
        <div className="Project" id="Project">
          <h2 className="About-text">My Projects</h2>
          <div className="project-holder">
            <motion.div
              initial={{ opacity: 0, y: +40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: false }}
            >
              <div className="pro">
                <img src="/Rockpaper.png" className="project-image" />
                <div className="basic">
                  <h2>CarbonTrack - AI Carbon Footprint Dashboard</h2>
                  <br />
                  <p className="para">
                    An AI-powered dashboard for tracking and reducing carbon
                    emissions and personal carbon footprint.
                  </p>
                  <FontAwesomeIcon icon={faGithub} className="icon" />
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: +40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: false }}
            >
              <div className="pro">
                <img src="/portfolio.png" className="project-image" />
                <div className="basic">
                  <h2 class="error">
                    VerifyIQ - Academic Credential Verification
                  </h2>
                  <p className="para">
                    A decentralized platform for verifying academic credentials
                    and predicting skills using AI.
                  </p>
                  <FontAwesomeIcon icon={faGithub} className="icon" />
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: +40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: false }}
            >
              <div className="pro">
                <img src="/clock.png" className="project-image" />
                <div className="basic">
                  <h2 class="error">Neurex - AI Mental Health Predictor</h2>
                  <p className="para">
                    A privacy-focused AI system for predicting mental health
                    conditions using encrypted data.
                  </p>
                  <FontAwesomeIcon icon={faGithub} className="icon" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        <div class="tech-stack">
          <h2 class="About-text">Tech Stack</h2>
          <motion.div
            initial={{ opacity: 0, x: +40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false }}
          >
            <div className="grids">
              <div className="tech">
                <FontAwesomeIcon icon={faHtml5} className="icon" />
                HTML
              </div>
              <div className="tech">
                <FontAwesomeIcon icon={faCss3Alt} className="icon" />
                CSS
              </div>
              <div className="tech">
                <FontAwesomeIcon icon={faJs} className="icon" />
                JavaScript
              </div>
              <div className="tech">
                <FontAwesomeIcon icon={faCode} className="icon" />
                Tailwind CSS
              </div>
              <div className="tech">
                <FontAwesomeIcon icon={faGithub} className="icon" />
                GitHub
              </div>
              <div className="tech">
                <FontAwesomeIcon icon={faCode} className="icon" />
                Next.js
              </div>
              <div className="tech">
                <FontAwesomeIcon icon={faCode} className="icon" />
                C++
              </div>
              <div className="tech">
                <FontAwesomeIcon icon={faPython} className="icon" />
                Python
              </div>
              <div className="tech">
                <FontAwesomeIcon icon={faCode} className="icon" />
                VS Code
              </div>
              <div className="tech">
                <FontAwesomeIcon icon={faCode} className="icon" />
                MATLAB
              </div>
              <div className="tech">
                <FontAwesomeIcon icon={faCode} className="icon" />
                JAVA
              </div>
              <div className="tech">
                <FontAwesomeIcon icon={faCode} className="icon" />
                MUI
              </div>
            </div>
          </motion.div>
        </div>
        <div className="Education"id="Education">
          <motion.h2
            className="About-text"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Academic Journey
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false }}
          >
            <div className="Edu">
              <h3 className="Edu-college">Bachelor's in Technology</h3>
              <p className="Edu-branch">
                Institute of Engineering & Management
                <br />
                Electronics and Communication Engineering
                <br />
                2024 - Present
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default App;
