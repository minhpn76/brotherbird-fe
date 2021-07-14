import React, { memo, useState } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button'
import { useSelector } from "react-redux";
import { useHistory, useLocation, useParams } from "react-router-dom";
import IconShuShi from '../../../../assets/images/shushi.png'
import Condition from './Condition';
import Kind from './Kind';
import pathRoutes from '../../../../helper/pathRoutes'
import './collection-item.css'
import {caculatedItem} from '../../../../helper/utils'
import Storage from '../../../../helper/storage';

let kindProduct = [
  { id: 1, name: 'ICED COLD BREW (WHITE)', price: 7, quanlity: 1, image: IconShuShi, selected: false},
  { id: 2, name: 'CED COLD BREW (BLACK)', price: 7, quanlity: 1, image: IconShuShi, selected: false},
  { id: 3, name: 'ICED MATCHA COLD BREW', price: 7, quanlity: 1, image: IconShuShi, selected: false},
]

function CollectionItem(props) {
  const history = useHistory();
  
  const shopSelected = useSelector(
    state => state.home.data.shop
  );
  
  const handleBackShop = (e) => {
    e.preventDefault();
    history.push(`${pathRoutes.collection}/${shopSelected.path}`)
  }

  const [baseProduct, setBaseProduct] = useState({
    id: 0,
    quanlity: null
  })
  
  const handleChooseKind = ({type, item, e}) => {
    let newArray = caculatedItem({kindProduct, payload: {type, item, e}})
    kindProduct = newArray
  }

  const handleSoldOut = (e) => {
    e.preventDefault();
    Storage.set('cart', JSON.stringify(kindProduct.filter(i => i.selected)))
    history.push(pathRoutes.cart)
  }

  
  const params = useParams();
  return (
    <div className="collection-item">
      <Container style={{ padding: "50px 0" }}>
        <Row>
          <Col md="6" style={{ textAlign: "center" }}>
            <img src={IconShuShi} style={{width: '100%'}} alt="product"/>
          </Col>
          <Col md="6">
            <div className="path">
              <p className="name">*{params['item'].toUpperCase()}</p>
              <span className="price">$32.00</span>
              <span className="status-item">SOLD OUT</span>
            </div>
            <Kind 
              baseProduct={baseProduct}
              kindProduct={kindProduct}
              handleChooseKind={handleChooseKind}
              handleSoldOut={handleSoldOut}
            />
            <Condition/>
          </Col>
          <Col md="12" style={{textAlign: 'center', marginTop: '100px'}}>
            <Button variant="outline-dark"
              onClick={(e) => handleBackShop(e)}
            >
              {`BACK TO ${shopSelected.month} ${shopSelected.year}`.toUpperCase()}
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default memo(CollectionItem);
