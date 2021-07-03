import React, { memo } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './pre-order.css';

function PreOrder () {
    return (
        <section className="pre-order">
            <Container>
                <Row>
                    <Col md="12" className="section">
                        <h6>next pre-order drop (JULY): 26/06/2021, 10.00am</h6>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default memo(PreOrder);