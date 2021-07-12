import React, { memo, useState, useImperativeHandle, forwardRef, useRef } from "react";
import Button from "react-bootstrap/Button";
import IconShuShi from '../../../../assets/images/shushi.png'
import {typeActionKind} from '../../../../helper/utils'

function Kind(props, ref) {
  const {
    baseProduct, kindProduct, 
    handleChooseKind,
    handleSoldOut
  } = props;

  return (
    <>
      <div className="kind">
        <div className="quanlity">
          <span>Quanlity</span>
          <input min="1" max="100" type="number" defaultValue={1}
          value={baseProduct.quanlity}/>
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
                    <img src={p.image} alt="item" />
                    <div className="accessy-item">
                      <span>{p.name}</span>
                      <span className="price">{p.price}</span>
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
