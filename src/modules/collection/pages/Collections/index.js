import React, { memo } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import './collection.css';

function Collections() {
  const listItem = [1,2,3]
  return (
    <div className="collections">
      <Container style={{padding: '50px 0'}}> 
        <Row>
          <Col md="12" style={{textAlign: 'center'}}>
            <h3>JULY 2021</h3>
            <p className="desc"><strong>Purchase delivery "date-slots" for the month</strong></p>
          </Col>
        </Row>
        <Row>
          <Col md="12">
              
          </Col>
        </Row>
        
      </Container>
    </div>
  );
}

export default memo(Collections);
