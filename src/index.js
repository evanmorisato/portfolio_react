import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "../node_modules/@fortawesome/fontawesome-free/css/all.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/font-mfizz/dist/font-mfizz.css";
import "mdbreact/dist/css/mdb.css";
import * as serviceWorker from "./serviceWorker";

import Arrow from "./components/arrow";
import SideBar from "./components/sidebar";
import Footer from "./components/footer";
import JumbotronPage from "./components/jumbotron-page";
import ProjectSection from "./components/project-section";
import cardList from "./project-card-data";
import AboutMe from "./components/about-me-section";
import SkillsSection from "./components/skills-section";
import NavBar from "./components/navbar";
import { motion } from "framer-motion";

ReactDOM.render(
  <motion.div style={{ position: "relative", zIndex: "0" }}>
    <SideBar />
    <Arrow arrowColor="#7cbafc" zIndex="-1" height="620">
      <NavBar />
      <JumbotronPage />
    </Arrow>
    <Arrow arrowColor="#e6dbc9" zIndex="-2" padTop={true} height="300">
      <AboutMe />
    </Arrow>
    <Arrow arrowColor="#7cbafc" zIndex="-3" padTop={true}>
      <ProjectSection>{cardList}</ProjectSection>
    </Arrow>
    <Arrow arrowColor="#e6dbc9" zIndex="-4" padTop={true}>
      <SkillsSection />
    </Arrow>

    <motion.div
      style={{
        zIndex: "-5",
        paddingTop: 75,
        position: "relative",
        backgroundColor: "#7cbafc",
      }}
    >
      <Footer />
    </motion.div>
  </motion.div>,
  document.getElementById("root")
);

serviceWorker.unregister();
