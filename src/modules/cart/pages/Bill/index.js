import React, { memo, useMemo, useState } from "react";
import { Container, Row, Col, Form, Tab, Nav, Button } from "react-bootstrap";
import "./bill.css";
import { useDispatch, useSelector } from "react-redux";
import { isEmpty } from "lodash";
import { RESTFUL_URL } from "../../../../helper/consts";
import moment from "moment";
import { unwrapResult } from '@reduxjs/toolkit';
import { validateEmail, validatePhonenumber } from "../../../../helper/utils";
import { saveReceipt } from '../../redux'
import pathRoutes from '../../../../helper/pathRoutes'
import { useHistory } from "react-router";

function Bill(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const cart = useSelector((state) => state.collection.cart || []);
  const totalPriceCart = useMemo(() => {
    return cart
      .map((i) => {
        return i.quanlity * i.ProductItemPrice.toFixed(2);
      })
      .reduce((a, b) => a + b);
  }, [cart]);
  const [infoCustomer, setInfoCustomer] = useState({
    CustomerName: "",
    CustomerEmail: "",
    CustomerPhoneNumber: "",
    CustomerStreetAddress: "",
    CustomerAddressDetail: "",
    PostalCode: "",
  })
  const [isValidateEmail, setIsValidateEmail] = useState(true)
  const [isValidatePhone, setIsValidatePhone] = useState(true)

  const enabledSubmit = useMemo(() => {
    if (!isValidateEmail) return isValidateEmail
    if (!isValidatePhone) return isValidatePhone
    const {
      CustomerName, CustomerEmail, CustomerPhoneNumber, CustomerStreetAddress, CustomerAddressDetail, PostalCode
    } = infoCustomer;
    if (
      !CustomerName || !CustomerEmail || !CustomerPhoneNumber || !CustomerStreetAddress || !CustomerAddressDetail || !PostalCode
    ) {
      return false
    }
    return true
  }, [infoCustomer, isValidateEmail, isValidatePhone])

  const handleChange = (key, value) => {
    if (key === 'CustomerEmail') {
      setIsValidateEmail(value?validateEmail(value):true)
    }
    if (key === 'CustomerPhoneNumber') {
      setIsValidatePhone(value?validatePhonenumber(value):true)
    }
    setInfoCustomer({
      ...infoCustomer,
      [key]: value
    })
  }
  

  const onSubmit = async () => {
    const body = {
      receipt: {
        ReceiptTitle: infoCustomer.CustomerName,
        TotalProductItems: isEmpty(cart)?0:cart.length,
        CustomerName: infoCustomer.CustomerName,
        CustomerEmail: infoCustomer.CustomerEmail,
        CustomerPhoneNumber: infoCustomer.CustomerPhoneNumber,
        CustomerStreetAddress: infoCustomer.CustomerPhoneNumber,
        CustomerAddressDetail: infoCustomer.CustomerAddressDetail,
        PostalCode: infoCustomer.CustomerAddressDetail,
        DeliveryDate: moment().add(7, 'days').format('YYYY-MM-DD HH:mm:ss'),
        TotalProductItems: isEmpty(cart)?0:cart.length,
        TotalMoney: totalPriceCart,
      },
      productItems: isEmpty(cart)?[]: cart.map((c) => {
        return {
          id: c.id,
          quantity: c.quanlity
        }
      })
    };
    const resps = await dispatch(saveReceipt(body))
    console.log('resps', resps);
    const status = unwrapResult(resps);
    if (!isEmpty(status)) {
      history.push(`${pathRoutes.home}`)
    }    
  };
  return (
    <div className="bill">
      <Container style={{ paddingTop: "50px", paddingBottom: "50px" }}>
        <Row>
          <Col md="6">
            <Tab.Container id="left-tabs-example" defaultActiveKey="cod">
              <Row>
                <Col sm={3}>
                  <Nav variant="pills" className="flex-column">
                    <Nav.Item>
                      <Nav.Link eventKey="cod">COD</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="banking">Banking</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
                <Col sm={9}>
                  <Tab.Content>
                    <Tab.Pane eventKey="cod">
                      <Form.Group className="mb-3" controlId="CustomerName">
                        <Form.Label>Full name</Form.Label>
                        <Form.Control type="email" 
                          onChange={(e) => handleChange('CustomerName', e.target.value)} 
                          placeholder="Full name" 
                          className={!infoCustomer.CustomerName ? 'error-border': ''}
                        />
                        {
                          !infoCustomer.CustomerName && (
                            <Form.Text className="text-danger">
                              Fullname is required
                            </Form.Text>
                          )
                        }
                        
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="CustomerEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control 
                          type="email" placeholder="Email" 
                          onChange={(e) => handleChange('CustomerEmail', e.target.value)} 
                          className={!infoCustomer.CustomerEmail || !isValidateEmail ? 'error-border': ''}
                        />
                        {
                          !infoCustomer.CustomerEmail && (
                            <Form.Text className="text-danger">
                              Email is required
                            </Form.Text>
                          )
                        }
                        {
                          !isValidateEmail && (
                            <Form.Text className="text-danger">
                              Invaild format email
                            </Form.Text>
                          )
                        }
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="CustomerPhoneNumber">
                        <Form.Label>Phone number</Form.Label>
                        <Form.Control 
                          type="email" placeholder="Phone number" 
                          onChange={(e) => handleChange('CustomerPhoneNumber', e.target.value)} 
                          className={!infoCustomer.CustomerPhoneNumber || !isValidatePhone ? 'error-border': ''}
                        />
                        {
                          !infoCustomer.CustomerPhoneNumber && (
                            <Form.Text className="text-danger">
                              Phone number is required
                            </Form.Text>
                          )
                        }
                        {
                          !isValidatePhone && (
                            <Form.Text className="text-danger">
                              Invaild format phone number
                            </Form.Text>
                          )
                        }
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="CustomerStreetAddress">
                        <Form.Label>Street address</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="Street address"
                          onChange={(e) => handleChange('CustomerStreetAddress', e.target.value)} 
                          className={!infoCustomer.CustomerStreetAddress ? 'error-border': ''}
                        />
                        {
                          !infoCustomer.CustomerStreetAddress && (
                            <Form.Text className="text-danger">
                              Street address is required
                            </Form.Text>
                          )
                        }
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="CustomerAddressDetail">
                        <Form.Label>Address</Form.Label>
                        <Form.Control 
                          type="email" placeholder="Address" 
                          onChange={(e) => handleChange('CustomerAddressDetail', e.target.value)} 
                          className={!infoCustomer.CustomerAddressDetail ? 'error-border': ''}
                        />
                        {
                          !infoCustomer.CustomerAddressDetail && (
                            <Form.Text className="text-danger">
                              Address is required
                            </Form.Text>
                          )
                        }
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="PostalCode">
                        <Form.Label>Postal code</Form.Label>
                        <Form.Control 
                          type="email" placeholder="Postal code" 
                          onChange={(e) => handleChange('PostalCode', e.target.value)} 
                          className={!infoCustomer.PostalCode ? 'error-border': ''}
                        />
                        {
                          !infoCustomer.PostalCode && (
                            <Form.Text className="text-danger">
                              Postal code is required
                            </Form.Text>
                          )
                        }
                      </Form.Group>
                      <div>
                        <Button variant="primary"
                          onClick={() => onSubmit()}
                          disabled={!enabledSubmit}
                        >
                          Continute to shipping
                        </Button>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="banking">Comming soon!</Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </Col>
          <Col md="6">
            <div className="list-cart">
              {!isEmpty(cart) &&
                cart.map((c, idx) => {
                  return (
                    <div className="item" key={idx}>
                      <div className="bill-info">
                        <div style={{ position: "relative" }}>
                          <img
                            width="80"
                            height="80"
                            src={`${RESTFUL_URL}${c.ProductItemImage[0]["url"]}`}
                            alt={c.ProductItemTItle}
                          />
                          <span className="quantity">{c.quanlity}</span>
                        </div>
                        <div className="view-info">
                          <p>{c.ProductItemTItle}</p>
                          <p>
                            <strong>Accessory:&nbsp;&nbsp;</strong>Yes
                          </p>
                        </div>
                      </div>
                      <div className="bill-price">
                        <p>
                          <strong>${c.ProductItemPrice.toFixed(2)}</strong>
                        </p>
                      </div>
                    </div>
                  );
                })}
            </div>
            <hr></hr>
            <div className="sub-total">
              <div>Subtotal</div>
              <div>
                <strong>{`$${totalPriceCart.toFixed(2)}`}</strong>
              </div>
            </div>
            <div className="sub-total">
              <div>Shipping</div>
              <div style={{ fontSize: "13px" }}>Calculated at next step</div>
            </div>
            <hr></hr>
            <div className="sub-total">
              <div>Total</div>
              <div>
                SGD&nbsp;&nbsp;
                <strong className="total-price">{`$${totalPriceCart.toFixed(
                  2
                )}`}</strong>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default memo(Bill);
