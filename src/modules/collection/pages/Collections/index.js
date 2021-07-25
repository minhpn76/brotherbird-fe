import React, { memo, useEffect, } from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./collection.css";
import paths from "../../../../helper/pathRoutes";
import { useHistory } from "react-router-dom";
import {RESTFUL_URL} from '../../../../helper/consts'
import { unwrapResult } from '@reduxjs/toolkit';
import { fetchProduct, fetchProductsByCollection } from "../../redux";
import {isEmpty} from 'lodash'

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
  }, [dispatch, shopSelected.id])

  const redirectItem = async (e, item) => {
    e.preventDefault();
    const resps = await dispatch(fetchProduct(item))
    const status = unwrapResult(resps);
    if (!isEmpty(status)) {
      history.push(`${paths.collection}/${shopSelected.slugs}${paths.product}/${item.id}`)
    }
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
                    onClick={(e) => redirectItem(e, item)}>
                    <div className="img">
                      <img src={`${RESTFUL_URL}${item.productImage[0]['url']}`} alt={item.ProductTitle}/>
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
