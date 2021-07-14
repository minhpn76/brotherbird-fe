import React, { memo, useMemo } from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import {caculatedItem, typeActionKind} from '../../../../helper/utils'
import Storage from '../../../../helper/storage'


function DetailCart({cart, setCart}) {

  const handleChooseKind = ({type, item, e}) => {
    let newArray = caculatedItem({kindProduct: cart, payload: {type, item, e}})
    setCart(newArray)
    Storage.set('cart', JSON.stringify(newArray))
    window.location.reload()
  }

  const removeItemCart = (e, item) => {
    e.preventDefault();
    const items = cart.filter(c => c.id !== item.id);
    setCart(items)
    Storage.set('cart', JSON.stringify(items))
    window.location.reload()
  }

  const totalPriceCart = useMemo(() => {
    return cart.reduce((c1, c2) => c1.quanlity*(c1.price).toFixed(2) + c2.quanlity*(c2.price).toFixed(2))
  }, [cart])

  return (
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
                cart.map((c, idx) => {
                  return (
                    <tr key={idx}>
                      <td colspan="7" >
                        <div className="detail-item">
                          <img width="95" height="95" alt={c.name} src={c.image} />
                          <div className="view-info">
                            <span>{c.name}</span>
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

                        <p style={{ fontSize: '18px' }}><strong>${c.price.toFixed(2)}</strong></p>
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
            <tfoot>
              <tr>
                <th > </th>
                <th > </th>
                <th > </th>
                <th > </th>
                <th > </th>
                <th > </th>
                <th > </th>
                <th>Subtotal</th>
                <th>${totalPriceCart.toFixed(2)}SGD</th>
              </tr>
              <tr>
                <td > </td>
                <td > </td>
                <td > </td>
                <td > </td>
                <td > </td>
                <td > </td>
                <td > </td>
                <td colSpan="2">
                  <p><i style={{ fontSize: '12px' }}>Taxes and shipping calculated at checkout</i></p>
                  <Button variant="dark"
                    onClick={(e) => { }}
                  >
                    CHECK OUT
                  </Button>
                </td>
              </tr>
            </tfoot>
          </Table>
        </div>
      </Col>
    </Row>
  )
}
export default memo(DetailCart)