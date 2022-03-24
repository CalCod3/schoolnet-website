import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export default function PartnerComponent() {
  return (
    <>
      <Container>
        <div className="partners">
          <h1>Our Partners</h1>
        </div>



        <Row>
          <Col xs-12 md-6>
            Damacrest Schools
          </Col>
          <Col xs-12 md-6>
            Gathambi Girls Secondary School
          </Col>
          <Col xs-12 md-6>
            Sunrise Schools
          </Col>
          <Col xs-12 md-6>
            Tendercare Schools
          </Col>
        </Row>
      </Container>
    </>
  );
}
