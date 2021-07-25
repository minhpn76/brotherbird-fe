import React, { memo } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Product from "../../../../assets/images/product.png";
import DontForget from "../../../../assets/images/dont_forget.png";

import {ThankYou} from '../../../../components/layouts/main/components'
import {Contact} from '../../components'
import pathRoutes from '../../../../helper/pathRoutes'

function Home() {
  return (
    <>
      <ThankYou/>
      <section className="banner"></section>
      <section className="product">
        <Container fluid={true}>
          <Row>
            <Col md={12} className="pre">
              <a href={pathRoutes.collection}>pre-order</a>
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
      <section className="info_mobile">
        <Contact/>
      </section>
      <div className="fk_bg_mobile">
        <section className="info">
          <Container>
            <Row>
              <Col md={5}>
                <Contact/>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    </>
  );
}

export default memo(Home);
