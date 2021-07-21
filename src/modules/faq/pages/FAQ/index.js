import React, { memo, useEffect } from "react";
import { useSelector } from "react-redux";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import './faq.css';
import {fetchContentFAQ} from '../../redux'
import { useDispatch } from "react-redux";

function FAQ() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchContentFAQ())
  }, [])
  const faqContent = useSelector(
    state => state.faq.faq
  );

  return (
    <div className="faq">
      <Container style={{padding: '50px 0'}}> 
        <Row>
          <Col md="12" style={{textAlign: 'center'}}>
            <h3>{faqContent.faqTitle}</h3>
          </Col>
        </Row>
        <Row style={{margin: '30px 0 10px 0'}}>
          <Col md="12">
            {faqContent.faqDescription}
          </Col>
          {/* <Col md="12">
            <h6 className="tte">ORDERING ONLINE</h6>
            <ul className="rte">
              <li>
                1. Due to system constraints, please ensure each checkout only contains <strong><u>1</u></strong> delivery date and <strong><u>1</u></strong> delivery address, with a maximum of <strong><u>5</u></strong> boxes.
              </li>
              <li>
                2. In the event that you were able to checkout with two different dates in a single cart, the total quantity of the boxes ordered will instead be <strong><u>combined</u></strong> and sent only on the <strong><u>earlier</u></strong> delivery date selected. The later delivery date will be <strong><u>voided</u></strong> and <strong><u>no refunds</u></strong> will be issued.
              </li>
            </ul>
          </Col>
          <Col md="12">
            <h6 className="tte">ISLAND-WIDE DELIVERY ORDERS</h6>
            <ul className="rte">
              <li>
                3. Delivery is charged at a flat fee of <strong><u>$10.00 per location,</u></strong> for a maximum of <strong><u>5</u></strong> boxes.
              </li>
              <li>
                4. Delivery will be between <strong><u>12.00 pm to 3.00 pm</u></strong> daily. We are not able to cater to specific delivery timings.
              </li>
            </ul>
          </Col>
          <Col md="12">
            <h6 className="tte">SELF-COLLECTION ORDERS</h6>
            <ul className="rte">
              <li>
                5. Self-collections are available daily at <strong><u>CTHUB 2, 114 Lavender Street, #01-05, Singapore 338729</u></strong> from <strong><u>10.30 am to 2.00 pm.</u></strong>
              </li>
            </ul>
          </Col>
          <Col md="12">
            <h6 className="tte">TERMS & CONDITIONS</h6>
            <ul className="rte">
              <li>
                1. No refunds will be issued for:
                <ul>
                  <li>Order cancellations</li>
                  <li>Late collections (past operating hours) whereby orders will be voided</li>
                  <li>Submission of 2 different delivery dates per checkout for online ordering (as explained in Point 2 above)</li>
                </ul>
              </li>
              <li>2. Strictly no changing of order details (e.g. delivery address, pre-order dates etc) upon submission of orders.</li>
              <li>3. All pre-order boxes come as a 6 flavour assorted box (one of each flavour). Strictly no swapping/customisation of flavours.</li>
            </ul>
          </Col> */}
        </Row>
      </Container>
    </div>
  );
}

export default memo(FAQ);
