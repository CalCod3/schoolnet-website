import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function ContactComponent() {
  return (
    <>
      <div className="contact-background">
        <div className="texture">
          <Container className="contact-content">
            <Row>
              <h5 className="contact-title">
                Reach out to us, so we may satisfy your needs for a robust and
                highly useful system.
              </h5>
            </Row>
            <Col xs-12 md-6 className="contact-form">
              <form action="/api/form" method="post">
                <div className="contact-input">
                  <label htmlFor="first">First name:</label>
                  <input type="text" id="first" name="first" />
                </div>
                <div className="contact-input">
                  <label htmlFor="last">Last name:</label>
                  <input type="text" id="last" name="last" />
                </div>
                <div className="contact-input">
                  <label htmlFor="email">Email Address:</label>
                  <input type="email" id="email" name="email" />
                </div>
                <div className="contact-input">
                  <label htmlFor="message">Message</label>
                  <textarea type="text" id="message" name="message"></textarea>
                </div>




                <button type="submit">Submit</button>
              </form>
              
            </Col>
            <Row>
                <h5>Or contact us directly:</h5>
              </Row>
          </Container>
        </div>
      </div>
    </>
  );
}

export default ContactComponent;
