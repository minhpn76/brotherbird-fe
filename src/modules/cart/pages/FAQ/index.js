import React, { memo } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import './faq.css';

function Cart() {
  return (
    <div className="cart">
      <Container style={{padding: '50px 0'}}> 
        <Row>
          <Col md="12" style={{textAlign: 'center'}}>
            <h3>Cart</h3>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default memo(Cart);
