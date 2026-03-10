import React from "react";
import { MDBFooter } from "mdbreact";
import Icon from "./icon";
import Title from "./title";
import { Container, Row, Col } from 'react-bootstrap';
import SkillIcon from './icons-skills';

const Footer = () => {
  return (
    <MDBFooter
      style={{ backgroundColor: "#7cbafc" }}
      className="font-small pt-4"
      id="bottom"
    >
      <Container fluid className="text-center text-md-left">
        <Row>
          <Col md={3}></Col>
          <Col md={6} className="text-center">
            <Title title={"Contact Me"} />
          </Col>
          <Col md={3}></Col>
        </Row>
        <Row>
          <Col md={3}></Col>
          <Col md={6} className="text-center">
            {/* // animation- icons increase size when hovered over */}
            <Icon
              href="https://github.com/evanmorisato"
              alt="GitHub icon"
              iconPic="fab fa-github"
            />
            <Icon
              href="https://www.linkedin.com/in/emorisato/"
              alt="Linked In icon"
              iconPic="fab fa-linkedin"
            />
            {/* <Icon
              href="https://twitter.com/EvanMorisato"
              alt="Twitter icon"
              iconPic="fab fa-twitter"
            /> */}
          </Col>
          <Col md={3}></Col>
        </Row>
        {/* ========================================================================== */}
        <Container fluid>
          <Row noGutters style={{ marginBottom: "15px" }}>
            <Col md={4} className="text-center">
              <SkillIcon name="morisatoevan@gmail.com" href="mailto:morisatoevan@gmail.com" alt="Email icon" iconPic="fas fa-envelope" color="000" iconSize="35px" marginTop="15px" fontSize="20px" />
            </Col>
            <Col md={4} className="text-center">
              <SkillIcon name="Resume" href="EvanMorisatoResume.docx" alt="resume icon" iconPic="far fa-file" color="000" iconSize="35px" marginTop="15px" fontSize="20px" />
            </Col>
            <Col md={4} className="text-center">
              <SkillIcon
                name="(510) 461-5596"
                href="tel:5104615596"
                alt="phone icon"
                iconPic="fas fa-mobile-alt"
                color="#fff"
                iconSize="35px"
                marginTop="15px"
                fontSize="20px"
              />
            </Col>

          </Row>

        </Container>
        {/* =================================================================== */}
      </Container>
      <div className="footer-copyright py-3">
        <Row>
          <Container fluid>
            &copy; {new Date().getFullYear()} Copyright Evan Morisato
          </Container>
          <Container fluid>
            Built with:{" "}
            <Icon
              href="https://github.com/evanmorisato/portfolio-react"
              alt="GitHub icon"
              iconPic="fab fa-github"
            />
            <Icon href="" alt="React Icon" iconPic="fab fa-react" />
            <Icon href="" alt="Node Icon" iconPic="fab fa-node" />
            <Icon href="" alt="Javascript Icon" iconPic="fab fa-js-square" />
            <Icon href="" alt="MDB Icon" iconPic="fab fa-mdb" />
            <Icon href="" alt="Bootstrap Icon" iconPic="fab fa-bootstrap" />
            <Icon
              href=""
              alt="Font Awesome Icon"
              iconPic="fab fa-font-awesome-flag"
            />
          </Container>
        </Row>
      </div>
    </MDBFooter >
  );
};

export default Footer;
