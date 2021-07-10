import React, { memo, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ImgShuShi from "../../../../assets/images/shushi.png";
import "./collection.css";
import paths from "../../../../helper/pathRoutes";
import { useHistory, useLocation } from "react-router-dom";
import {getDateFromDay} from '../../../../helper/times'
import { covertPad2 } from "../../../../helper/utils";

function Collections() {
  const listItem = [1, 2, 3, 4,5];
  const history = useHistory();
  const location = useLocation();

  const shopSelected = useSelector(
    state => state.home.data.shop
  );

  const redirectItem = (item) => {
    console.log('333', getDateFromDay({
      day: item,
      month: shopSelected.month,
      year: shopSelected.year,
    }));
    // history.push(`${paths.collection}/${paths.product}/${item}`)
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
                  <a href='javascript:;' onClick={() => redirectItem(item)}>
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
