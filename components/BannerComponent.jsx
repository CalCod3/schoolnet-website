import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';

export default function BannerComponent() {
  return (
    <div>
      <div className="banner-background"></div>
      <div className="texture">
        <Container className="banner">
          <Row className="banner-content">
            <Col xs-12 md-6>
              <img className="img-fluid" src="assets/biomet.png"></img>
            </Col>
            <Col xs-12 md-6 className="banner-text">
              <h1 className="banner-title">SchoolNet</h1>
              <div className="deco"></div>

              <h4 className="banner-sub">
                Revolutionizing Education Management through innovative technological solutions.
              </h4>

              <button className="btn btn-custom">Learn More</button>
            </Col>

          </Row>

        </Container>
      </div>
    </div>
  );
}