import { useState, useRef } from "react";
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
  faLinkedinIn
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
            <div className="Home-button ">
              <a href="#Home">Home</a>
            </div>
            <div className="about-button">
              <a href="#About">About</a>
            </div>
            <div className="Projects-button">
              <a href="#Project">Projects</a>
            </div>
            <div className="Education-button">
              <a href="#Education">Education</a>
            </div>
            <div className="Contact-button">
              <a href="#Contact">Contact</a>
            </div>
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
              <h2 className="hero-title">HI, I'M</h2>
               {/* <motion.div
              initial={{ opacity: 0, y: +50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: false }}
            > */}
              <VariableProximity
                label={"Swpnanil Das"}
                className={"variable-proximity-demo hero-name"}
                fromFontVariationSettings="'wght' 400, 'opsz' 9"
                toFontVariationSettings="'wght' 1000, 'opsz' 40"
                containerRef={containerRef}
                radius={100}
                falloff="linear"
              />
              {/* </motion.div> */}
            </div>
            {/* <h1 className="hero-name">SWPNANIL DAS</h1> */}
            <p className="hero-details">
              Blending Art, Code, and AI to shape tomorrow’s digital world.
              Pushing the boundaries of creativity with code and cognition.
            </p>
            
            <div className="Button-Class">
              <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: false }}
            >
              <a href="https://github.com/bluedream01" target="_blank">
                <div className="hero-button">
                  <FontAwesomeIcon icon={faGithub} />
                  <span className="hide">Github</span>
                </div>
              </a>
              </motion.div>
               <motion.div
              initial={{ opacity: 0, x: +10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: false }}
            >
              <a href="https://www.linkedin.com/in/swpnanil-das-8ab2b7311/" target="_blank">
                <div className="hero-button">
                  <FontAwesomeIcon icon={faLinkedinIn} />
                  <span className="hide">Linkedin</span>
                </div>
              </a>
              </motion.div>
            </div>
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
                Full Stack Web Developer
              </motion.h2>
              <motion.p
                className="About-text-3"
                initial={{ opacity: 0, x: +50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: false }}
              >
                I'm a passionate Full Stack Developer with over 2 years of
                experience building dynamic, responsive web applications. I
                specialize in creating intuitive and visually engaging user
                interfaces using modern frontend technologies like React, while
                also developing robust backend systems with tools like Node.js
                and MongoDB. My approach combines user-centric design with
                clean, maintainable code to deliver scalable and
                high-performance solutions. I thrive at the intersection of
                design and functionality, continuously exploring new web
                technologies, frameworks, and best practices to stay ahead in
                the fast-evolving development landscape.
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
                <img src="/edumorph.jpg" className="project-image" />
                <div className="basic">
                  <h2>Edumorph - AI Student Helper</h2>
                  <br />
                  <p className="para">
                    AI powered to help students summarize and create interactive
                    quizes and mindmaps. Eduorph uses REACT,EXPRESS JS and large
                    LLM to generate the content.
                  </p>
                  <a
                    href="https://github.com/bluedream01/Edumorph"
                    target="_blank"
                  >
                    {" "}
                    <FontAwesomeIcon
                      icon={faGithub}
                      className="icon value"
                    />{" "}
                  </a>
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
                <img src="/coffee.jpg" className="project-image" />
                <div className="basic">
                  <h2 class="error">Coffee Shop Website</h2>
                  <p className="para">
                    A Coffee Shop website where people can see details about the
                    coffee Shop. HTML,CSS,JAVASCRIPT was used to create this
                    website.
                  </p>
                  <a
                    href="https://github.com/bluedream01/coffee-shop"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faGithub} className="icon value" />
                  </a>
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
                <img src="/tic-tac-toe.jpg" className="project-image" />
                <div className="basic">
                  <h2 class="error">Tic-Tac-Toe Website</h2>
                  <p className="para">
                    Tic-Tac-Toe serves as a foundational project that highlights
                    interactive frontend development and engaging user
                    experience design.
                  </p>
                  <a
                    href="https://github.com/bluedream01/tic-tac-toe-2.0"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faGithub} className="icon value" />
                  </a>
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
        <div className="Education" id="Education">
          <motion.h2
            className="About-text academic"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Academic Journey
          </motion.h2>
          <div className="Edu-timeline">
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
              <div className="Edu-line"></div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: false }}
            >
              <div className="Edu">
                <h3 className="Edu-college">Higher Secondary</h3>
                <p className="Edu-branch">
                  Baranagore Ramakrishna Mission Ashrama High School
                  <br />
                  WBCHSE Board
                  <br />
                  2023
                </p>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="Contact" id="Contact">
          <h2 class="About-text">Contact</h2>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false }}
          >
            <div className="Contact-Details">
              <div className="Email contact-form">
                <div>
                  <i className="fas fa-envelope icons"></i>
                </div>
                <div>
                  <h3>Email</h3>
                  <p>das05swpna@gmail.com</p>
                </div>
              </div>

              <div className="phone contact-form">
                <div>
                  <i className="fas fa-phone icons"></i>
                </div>
                <div>
                  <h3>Phone</h3>
                  <p>9831224335</p>
                </div>
              </div>

              <div className="place contact-form">
                <div>
                  <i className="fas fa-map-marker-alt icons"></i>
                </div>
                <div>
                  <h3>Place</h3>
                  <p>Baranagore, Kolkata, India</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <footer className="footer">
          <p>
            <span>&copy;</span>2025 Swpnanil Das.All Rights reserved
          </p>
        </footer>
      </div>
    </>
  );
}

export default App;
