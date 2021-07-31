import React, { memo, useState, useImperativeHandle, forwardRef, useRef } from "react";
import Button from "react-bootstrap/Button";
import {RESTFUL_URL} from '../../../../helper/consts'
import {typeActionKind} from '../../../../helper/utils'
import {caculatedItem} from '../../../../helper/utils'
import { fetchCart, fetchCheckout } from "../../redux"
import { useDispatch, useSelector } from "react-redux"
import { cloneDeep } from "lodash";

function Kind(props, ref) {
  const dispatch = useDispatch();

  const {
    quanlityItemBase, kindProduct, 
    handleSoldOut, cart, productParentItem
  } = props;

  const handleChooseKind = ({type, item, e}) => {
    dispatch(fetchCart({
      type,
      product: {
        ...item,
        productParentItem
      },
      valued: e,
      deleted: false,
      temp: true  
    }))
  }
  return (
    <>
      <div className="kind">
        <div className="quanlity">
          <span>Quantity</span>
          <input min="1" max="100" type="number" defaultValue={1}
          value={quanlityItemBase || 1}/>
        </div>
        <div className="list-kind">
          {
            kindProduct.map((p, idx) => {
              return (
                <div className="type" key={idx}>
                  <input className="check-box" type="checkbox" 
                    onChange={(e) => {handleChooseKind({type: typeActionKind.SELECT,item: p, e})}}
                  />
                  <div className="inform">
                    <img src={`${RESTFUL_URL}${p.ProductItemImage[0]['url']}`} alt={p.ProductItemTItle} />
                    <div className="accessy-item">
                      <span>{p.ProductItemTItle}</span>
                      <span className="price">${p.ProductItemPrice.toFixed(2)}</span>
                      <input 
                        onChange={(e) => {handleChooseKind({type: typeActionKind.QUANTITY,item: p, e})}}
                        min="1" max="100" type="number" defaultValue={1} 
                      />
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
      <div className="checkout">
        <Button variant="dark" onClick={(e) => handleSoldOut(e)}>Order</Button>
      </div>
    </>
  );
}

export default memo(forwardRef(Kind));
