import React, { memo, } from "react";
import { useSelector } from "react-redux";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./collection.css";
import paths from "../../../../helper/pathRoutes";
import { useHistory } from "react-router-dom";
import {getDateFromDay} from '../../../../helper/times'
import { covertPad2 } from "../../../../helper/utils";

function Collections() {
  const history = useHistory();

  const shopSelected = useSelector(
    state => state.home.data.shop
  );

  const redirectItem = (e, item, date) => {
    e.preventDefault();
    const payload = `${covertPad2(item)}${(shopSelected.month).toLowerCase()}`
    history.push(`${paths.collection}${paths.product}/${payload}`)
  }

  return (
    <div className="collections">
      <Container style={{ padding: "50px 0" }}>
        <Row>
          <Col md="12" style={{ textAlign: "center" }}>
            <h3>{shopSelected.label}</h3>
            <p className="desc">
              <strong>Purchase delivery "date-slots" for the month</strong>
            </p>
          </Col>
        </Row>
        <Row className="list-product">
          {
            Array.from(Array(shopSelected.dayInMonth), (_, i) => i + 1).map((item, idx) => {
              return (
                <Col md="3" className="prd" key={idx}>
                  <div
                    className="section"
                    onClick={(e) => redirectItem(e, item, getDateFromDay({
                    day: item,
                    month: shopSelected.month,
                    year: shopSelected.year,
                  }))}>
                    <div className="img">
                      <div className="top">
                        <p>
                          {getDateFromDay({
                            day: item,
                            month: shopSelected.month,
                            year: shopSelected.year,
                          }).month}
                        </p>
                        <p>
                          {getDateFromDay({
                            day: item,
                            month: shopSelected.month,
                            year: shopSelected.year,
                          }).day}
                        </p>
                      </div>
                      <div className="bottom">
                        <p>{covertPad2(item)}</p>
                      </div>
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
                  </div>
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
