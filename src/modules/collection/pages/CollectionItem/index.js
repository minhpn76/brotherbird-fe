import React, { memo, useMemo, useState } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button'
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation, useParams } from "react-router-dom";
import IconShuShi from '../../../../assets/images/shushi.png'
import Condition from './Condition';
import Kind from './Kind';
import pathRoutes from '../../../../helper/pathRoutes'
import './collection-item.css'
import {caculatedItem} from '../../../../helper/utils'
import Storage from '../../../../helper/storage';
import { cloneDeep, isEmpty } from "lodash";
import {RESTFUL_URL} from '../../../../helper/consts'
import { fetchCheckout } from "../../redux";
import { unwrapResult } from '@reduxjs/toolkit';

let kindProduct = []

function CollectionItem(props) {
  const history = useHistory();
  const params = useParams();
  const dispatch = useDispatch();

  const shopSelected = useSelector(
    state => state.home.data.shop
  );

  const {products, product} = useSelector(
    state => state.collection
  )

  const cart = useSelector(state => state.collection.cart || [])

  const handleBackShop = (e) => {
    e.preventDefault();
    history.push(`${pathRoutes.collection}/${shopSelected.slugs}`)
  }

  const handleSoldOut = async (e) => {
    e.preventDefault();
    const resps = await dispatch(fetchCheckout(true))
    const status = unwrapResult(resps);
    if (status) {
      history.push(pathRoutes.cart)
    }
  }

  return (
    <div className="collection-item">
      {
        !isEmpty(product) && (
          <Container style={{ padding: "50px 0" }}>
            <Row>
              <Col md="6" style={{ textAlign: "center" }}>
                <img style={{width: '100%'}} src={`${RESTFUL_URL}${product.productImage[0]['url']}`} alt={product.ProductTitle}/>
              </Col>
              <Col md="6">
                <div className="path">
                  <p className="name">{product.ProductTitle}</p>
                  <span className="price">$32.00</span>
                  <span className="status-item">SOLD OUT</span>
                </div>
                <Kind 
                  quanlityItemBase={product.quanlity}
                  kindProduct={product.ProductItems}
                  handleSoldOut={handleSoldOut}
                  cart={cart}
                  
                />
                <Condition
                  description={product.Description}
                />
              </Col>
              <Col md="12" style={{textAlign: 'center', marginTop: '100px'}}>
                <Button variant="outline-dark"
                  onClick={(e) => handleBackShop(e)}
                >
                  {`BACK TO ${shopSelected.collectionName}`}
                </Button>
              </Col>
            </Row>
          </Container>
        )
      }
      
    </div>
  );
}

export default memo(CollectionItem);
