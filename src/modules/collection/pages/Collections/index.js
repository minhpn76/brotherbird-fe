import React, { memo } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ImgShuShi from "../../../../assets/images/shushi.png";
import "./collection.css";
import paths from "../../../../helper/pathRoutes";
import { useHistory, useLocation } from "react-router-dom";

function Collections() {
  const listItem = [1, 2, 3, 4,5];
  const history = useHistory();
  const location = useLocation();
  console.log('location', history);

  const redirectItem = (item) => {
    history.push(`${paths.collection}/${paths.product}/${item}`)
  }
  return (
    <div className="collections">
      <Container style={{ padding: "50px 0" }}>
        <Row>
          <Col md="12" style={{ textAlign: "center" }}>
            <h3>JULY 2021</h3>
            <p className="desc">
              <strong>Purchase delivery "date-slots" for the month</strong>
            </p>
          </Col>
        </Row>
        <Row className="list-product">
          {
            listItem.map((item, idx) => {
              return (
                <Col md="3" className="prd">
                  <a href='javascript:;' onClick={() => redirectItem(item)}>
                    <div>
                      <img className="img" src={ImgShuShi} alt="item" />
                    </div>
                    <div className="tile">
                      <h6 className="name">Shushi 01</h6>
                      <h5 className="price">
                        <strong>$32.00</strong>
                      </h5>
                      <span className="sold-out">
                        SOLD OUT
                      </span>
                    </div>
                  </a>
                </Col>
              )
            })
          }
          
        </Row>
      </Container>
    </div>
  );
}

export default memo(Collections);
