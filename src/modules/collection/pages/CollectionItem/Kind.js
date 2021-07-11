import React, { memo, useState, useImperativeHandle, forwardRef, useRef } from "react";
import Button from "react-bootstrap/Button";
import IconShuShi from '../../../../assets/images/shushi.png'

function Kind(props, ref) {
  const {baseProduct, kindProduct, handleChangeQuanlity} = props;

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
                <div className="type">
                  <input className="check-box" type="checkbox" />
                  <div className="inform">
                    <img src={p.image} alt="item" />
                    <div className="accessy-item">
                      <span>{p.name}</span>
                      <span className="price">{p.price}</span>
                      <input 
                        onChange={(e) => handleChangeQuanlity(p, e)} 
                        min="1" max="100" type="number" defaultValue={1} 
                        value={p.quanlity} 
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
        <Button variant="dark">Sold out</Button>
      </div>
    </>
  );
}

export default memo(forwardRef(Kind));
