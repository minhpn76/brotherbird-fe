import React, { memo, useEffect, } from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./collection.css";
import paths from "../../../../helper/pathRoutes";
import { useHistory } from "react-router-dom";
import {getDateFromDay} from '../../../../helper/times'
import {RESTFUL_URL} from '../../../../helper/consts'
import { covertPad2 } from "../../../../helper/utils";
import { fetchProductsByCollection } from "../../redux";

function Collections() {
  const history = useHistory();
  const dispatch = useDispatch();
  const shopSelected = useSelector(
    state => state.home.data.shop
  );

  const { products } = useSelector(
    state => state.collection
  );

  useEffect(() => {
    dispatch(fetchProductsByCollection(shopSelected.id))
  }, [shopSelected.id])

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
            products.map((item, idx) => {
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
                      <img src={`${RESTFUL_URL}${item.productImage[0]['url']}`}/>
                      <div className="bottom">
                        {/* <p>{covertPad2(item)}</p> */}
                      </div>
                    </div>
                    <div className="tile">
                      <h6 className="name">{item.ProductTitle}</h6>
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
