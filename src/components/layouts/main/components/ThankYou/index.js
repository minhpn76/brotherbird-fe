import React, { memo, useEffect, useState } from 'react';

import Modal from 'react-bootstrap/Modal'
import ImgThankYou from "../../../../../assets/images/thank.png";

import './thank-you.css';


function ThankYou() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShow(true)
    }, 1000)
  }, [])
  const handleClose = () => setShow(false);
  return (
    <div className="thank-you">
      <Modal className="dialog-th" show={show} onHide={handleClose} centered>
        <Modal.Header closeButton></Modal.Header>
        <img src={ImgThankYou} alt="thankyou"/>
      </Modal>
    </div>
  )
}

export default memo(ThankYou);