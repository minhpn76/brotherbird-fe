import React, { memo, useMemo } from 'react';
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import { typeActionKind } from '../../../../helper/utils'
import {RESTFUL_URL} from '../../../../helper/consts'
import { useDispatch, useSelector } from "react-redux";
import { fetchCart } from '../../../collection/redux';
import { isEmpty, sortBy } from 'lodash';
import pathRoutes from '../../../../helper/pathRoutes';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

function DetailCart() {
  const dispatch = useDispatch();
  const history = useHistory();
  const cart = useSelector(state => state.collection.cart || [])
  const itemRemoved = useSelector(state => state.collection.itemRemoved || {})

  const handleChooseKind = ({type, item, e}) => {
    
    if (type === typeActionKind.QUANTITY) {
      toast.info(`(${e.target.value}) ${item.ProductItemTItle} added to cart`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    }
    
    dispatch(fetchCart({
      type,
      product: item,
      valued: e
    }))
  }

  const removeItemCart = (e, item) => {
    e.preventDefault();   
    dispatch(fetchCart({
      product: item,
      valued: e,
      deleted: true,
      temp: false
    }))
  }

  const totalPriceCart = useMemo(() => {
    return cart.map(i => {
      return i.quanlity*(i.ProductItemPrice).toFixed(2)
    }).reduce((a, b) => a+b)
  }, [cart])

  return (
    <>
    <Row>
      <Col md={{ span: 8, offset: 2 }} style={{ textAlign: 'left' }}>
        <h3>Your Cart</h3>
        <div className="list-item">
          <Table responsive="md" borderless={true}>
            <thead>
              <tr>
                <th > </th>
                <th > </th>
                <th > </th>
                <th > </th>
                <th > </th>
                <th > </th>
                <th > </th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {
                !isEmpty(itemRemoved) && (
                  <tr>
                    <td colSpan="9" style={{borderBottom: '1px solid'}}>
                      <span>Removed </span>
                      <b>{`(${itemRemoved.quanlity}) ${itemRemoved.ProductItemTItle}`}</b>
                      <span> from your cart.</span>
                    </td>
                  </tr>
                )
              }

              {
                !isEmpty(cart) && sortBy(cart, ['id']).map((c, idx) => {
                  return (
                    <tr key={idx}>
                      <td colSpan="7" >
                        <div className="detail-item">
                          <img width="95" height="95" src={`${RESTFUL_URL}${c.ProductItemImage[0]['url']}`} alt={c.ProductItemTItle} />
                          <div className="view-info">
                            <span>{c.ProductItemTItle}</span>
                            <span><strong>Accessory:&nbsp;&nbsp;</strong>Yes</span>
                            <span onClick={(e) => removeItemCart(e, c)}>Remove</span>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div>
                          <input
                            onChange={(e) => {handleChooseKind({type: typeActionKind.QUANTITY,item: c, e})}}
                            min="1" max="100" type="number" value={c.quanlity} defaultValue={1}
                          />
                        </div>
                      </td>
                      <td>
                        <p style={{ fontSize: '18px', paddingTop: '10px' }}><strong>${c.ProductItemPrice.toFixed(2)}</strong></p>
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </Table>
        </div>
        <div className="bill">
          <div><b className="titleTotal">Subtotal</b><b>{`${totalPriceCart.toFixed(2)}SGD`}</b></div>
          <div className="checkOut">
            <p><i style={{ fontSize: '12px' }}>Taxes and shipping calculated at checkout</i></p>
            <Link to={pathRoutes.bill}>
              <Button variant="dark">
                CHECK OUT
            </Button>
            </Link>
          </div>
        </div>
      </Col>
    </Row>
    </>
  )
}
export default memo(DetailCart)