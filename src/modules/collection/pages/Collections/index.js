import React, { memo, useEffect, useMemo, } from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./collection.css";
import paths from "../../../../helper/pathRoutes";
import { useHistory, useLocation, useParams } from "react-router-dom";
import {RESTFUL_URL} from '../../../../helper/consts'
import { unwrapResult } from '@reduxjs/toolkit';
import { fetchProduct, fetchProductsByCollection } from "../../redux";
import {isEmpty} from 'lodash'

function Collections() {
  const history = useHistory();
  const dispatch = useDispatch();
  const location = useLocation()
  const params = useParams();

  const { products, collections } = useSelector(
    state => state.collection
  );
  
  const collectionSelected = useMemo(() => {
    return collections.find(c => c.slugs === params.item)
  }, [params.item, location.key])

  useEffect(() => {
    if (!isEmpty(collectionSelected)) {
      dispatch(fetchProductsByCollection(collectionSelected.id))
    }
  }, [dispatch, collectionSelected])

  const redirectItem = async (e, item) => {
    e.preventDefault();
    const resps = await dispatch(fetchProduct(item))
    const status = unwrapResult(resps);
    if (!isEmpty(status)) {
      history.push(`${paths.collection}/${collectionSelected.slugs}${paths.product}/${item.id}`)
    }
  }

  return (
    <div className="collections">
      <Container style={{ paddingTop: '50px', paddingBottom: '50px' }}>
        <Row>
          <Col md="12" style={{ textAlign: "center" }}>
            <h3>{collectionSelected ? collectionSelected.collectionName : ''}</h3>
            <p className="desc">
              <strong>Purchase delivery "date-slots" for the month</strong>
            </p>
          </Col>
        </Row>
        <Row className="list-product">
          {
            products.map((item, idx) => {
              return (
                <Col md="3" xs="6" className="prd" key={idx}>
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
                      {/* <h6 className="name">{item.ProductTitle}</h6>
                      <h5 className="price">
                        <strong>$32.00</strong>
                      </h5> */}
                      <span className="sold-out">
                        ENJOY NOW
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
