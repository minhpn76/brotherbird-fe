import React, { memo } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import './collection-item.css'

function CollectionItem(props) {
  return (
    <div className="collection-item">
      <Container style={{ padding: "50px 0" }}>
        <Row>
          <Col md="12" style={{ textAlign: "center" }}>
            <h3>Item</h3>
          </Col>
        </Row>
        <Row>
          <Col md="12"></Col>
        </Row>
      </Container>
    </div>
  );
}

export default memo(CollectionItem);
