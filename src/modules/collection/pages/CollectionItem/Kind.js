import React, { memo } from "react";
import Button from "react-bootstrap/Button";
import IconShuShi from '../../../../assets/images/shushi.png'

function Kind() {
  return (
    <>
      <div className="kind">
        <div className="quanlity">
          <span>Quanlity</span>
          <input min="1" max="100" type="number" value="1" />
        </div>
        <div className="list-kind">
          <div className="type">
            <input className="check-box" type="checkbox" />
            <div className="inform">
              <img src={IconShuShi} alt="item" />
              <div className="accessy-item">
                <span>ICED COLD BREW (WHITE)</span>
                <span>$7.00</span>
              </div>
            </div>
          </div>
          <div className="type">
            <input className="check-box" type="checkbox" />
            <div className="inform">
              <img src={IconShuShi} alt="item" />
              <div className="accessy-item">
                <span>ICED COLD BREW (WHITE)</span>
                <span>$7.00</span>
              </div>
            </div>
          </div>
          <div className="type">
            <input className="check-box" type="checkbox" />
            <div className="inform">
              <img src={IconShuShi} alt="item" />
              <div className="accessy-item">
                <span>ICED COLD BREW (WHITE)</span>
                <span>$7.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="checkout">
        <Button variant="dark">Sold out</Button>
      </div>
    </>
  );
}

export default memo(Kind);
