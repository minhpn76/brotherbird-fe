import React, { memo } from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'

function DetailCart({cart}) {
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
                          <img width="95" height="95" src={c.image} />
                          <div className="view-info">
                            <span>{c.name}</span>
                            <span><strong>Accessory:&nbsp;&nbsp;</strong>Yes</span>
                            <span>Remove</span>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div>
                          <input
                            onChange={(e) => { }}
                            min="1" max="100" type="number" defaultValue={1}
                          />
                        </div>
                      </td>
                      <td>

                        <p style={{ fontSize: '18px' }}><strong>{c.price}</strong></p>
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
                <th>$7.00SGD</th>
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