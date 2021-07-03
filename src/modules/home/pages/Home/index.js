import React, { memo } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Product from "../../../../assets/images/product.png";
import DontForget from "../../../../assets/images/dont_forget.png";

import {ThankYou} from '../../../../components/layouts/main/components'

function Home() {
  return (
    <>
      <ThankYou/>
      <section className="banner"></section>
      <section className="product">
        <Container fluid={true}>
          <Row>
            <Col md={12} className="pre">
              <a href="#">pre-order</a>
            </Col>
          </Row>
          <Row>
            <Col md={12} style={{ padding: 0 }}>
              <img src={Product} alt="product" />
            </Col>
          </Row>
          <Row>
            <Col md={12} style={{ padding: 0 }}>
              <img src={DontForget} alt="dont forget" />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="line">
      </section>
      <section className="info">
        <Container>
          <Row>
            <Col md={5}>
              <div className="contact">
                <h6>RETAIL STOCKS AVAILABLE</h6>
                <div className="rte-setting">
                  <p>
                    <strong>Brotherbird Bakehouse</strong>
                    <br></br>
                    114 Lavender Street (CT Hub 2)
                    <br></br>
                    #01-05, S338729
                    <br></br>
                    <em>10:00am - 3:00pm / till sold out</em>
                    <br></br>
                    <span>-</span>
                    <br></br>
                    <strong>Brotherbird Coffeehouse</strong>
                    <br></br>
                    32 Bali Lane, S189868
                    <br></br>
                    <em>10:00am - 4:00pm (mon-tue)</em>
                    <br></br>
                    <em>10:00am - 6:00pm (wed-sun)</em>
                    <br></br>
                    (Dine-in service reopens on the 01 JULY)
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default memo(Home);
