import React, { memo, useState, useImperativeHandle, forwardRef, useRef } from "react";
import Button from "react-bootstrap/Button";
import {RESTFUL_URL} from '../../../../helper/consts'
import {typeActionKind} from '../../../../helper/utils'

function Kind(props, ref) {
  const {
    quanlityItemBase, kindProduct, 
    handleChooseKind,
    handleSoldOut
  } = props;

  return (
    <>
      <div className="kind">
        <div className="quanlity">
          <span>Quanlity</span>
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
        <Button variant="dark" onClick={handleSoldOut}>Sold out</Button>
      </div>
    </>
  );
}

export default memo(forwardRef(Kind));
