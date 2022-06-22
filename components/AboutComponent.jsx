import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import YoutubeVideo from "./YoutubeComponent";

function AboutComponent() {
  return (
    <>
      <div className="about-background">
        <Container className="about">
          <div className="about-content">
            <Row className="about-text">
              <Col xs-12 md-6>
                <Row>
                <h1>SchoolNet</h1>
                <p>
                  We are dedicated to providing solutions that enable human
                  interaction within spaces that cater to people&apos;s safety and
                  well-being. Working primarily with education institutions across
                  Africa, we provide technologies that allow schools to manage
                  attendance and traffic of students.
                </p>
                <p>
                  Using biometric analysis and intelligent facial recognition, our
                  systems are able to distinguish different scenarios that pose
                  threats in such common spaces. Information on scenarios like
                  abnormal temperature and use of facemasks allow authorities in the
                  institutions to take appropriate action.
                </p>
                </Row>
                <Row>
                  <YoutubeVideo></YoutubeVideo>
                  <h6>SchoolNet CEO Explains how the attendance and traffic management system works</h6>
                </Row>
              </Col>

              <Col xs-12 md-6>
                <img className="img-fluid" src="assets/screens.png"></img>
              </Col>
            </Row>

          </div>
        </Container>
      </div>
    </>
  );
}

export default AboutComponent;
