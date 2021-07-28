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
import Slider from "react-slick";

function CollectionItem(props) {
  const history = useHistory();
  const params = useParams();
  const dispatch = useDispatch();
  const location = useLocation()

  const {collections, product} = useSelector(
    state => state.collection
  )

  const collectionSelected = useMemo(() => {
    return collections.find(c => c.slugs === params.shop)
  }, [params.shop, location.key])

  const cart = useSelector(state => state.collection.cart || [])

  const handleBackShop = (e) => {
    e.preventDefault();
    history.push(`${pathRoutes.collection}/${collectionSelected.slugs}`)
  }

  const handleSoldOut = async (e) => {
    e.preventDefault();
    const resps = await dispatch(fetchCheckout(true))
    const status = unwrapResult(resps);
    if (status) {
      history.push(pathRoutes.cart)
    }
  }

  const listProducImg = useMemo(() => {
    if(isEmpty(product)) {
      return []
    }
    const prodImage = product.productImage[0]['url']
    let temp = [prodImage]
    if (!isEmpty(product.ProductItems)) {
      product.ProductItems.forEach(element => {
        temp = [
          ...temp,
          element.ProductItemImage[0]['url']
        ]
      });
    }
    return temp
  }, [product])

  const settings = {
    dots: false,
    infinite: false,
    vertical: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    initialSlide: 0,
    arrows: false,
  }

  const [selectedImage,setSelectedImage] = useState('')
  return (
    <div className="collection-item">
      {
        !isEmpty(product) && (
          <Container style={{ paddingTop: "50px", paddingBottom: "50px" }}>
            <Row>
              <Col md="6" style={{ textAlign: "center" }}>
                <img style={{width: '100%'}} 
                  src={selectedImage?`${RESTFUL_URL}${selectedImage}`:`${RESTFUL_URL}${product.productImage[0]['url']}`} 
                  alt={product.ProductTitle}/>
                <div className="slideImgProd">
                  <Slider {...settings}>
                    {
                      listProducImg.map((prodImg, idx) => {
                        return (
                          <div className="blockImg" onClick={() => setSelectedImage(prodImg)}>
                            <img style={selectedImage===prodImg?{border: '2px solid'}:{}} src={`${RESTFUL_URL}${prodImg}`} alt={idx}/>
                          </div>
                        )
                      })
                    }
                  </Slider>
                  
                </div>
              </Col>
              <Col md="6">
                <div className="path">
                  <p className="name">{product.ProductTitle}</p>
                  {/* <span className="price">$32.00</span> */}
                  <span className="status-item">BUY NOW</span>
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
                  {`BACK TO ${collectionSelected?collectionSelected.collectionName:params.item.replace('-', '').toUpperCase()}`}
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
