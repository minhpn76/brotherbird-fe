import React, { memo, useState } from "react";

import Container from "react-bootstrap/Container";
import Storage from "../../../../helper/storage";
import EmptyCart from './EmptyCart';
import DetailCart from './DetailCart';
import './cart.css';
import { isEmpty } from "lodash";

function Cart() {
  const [cart, setCart] = useState(Storage.get('cart') ? JSON.parse(Storage.get('cart')) : [])

  return (
    <div className="cart-section">
      <Container style={{padding: '50px 0'}}> 
        {
          isEmpty(cart) ? (
            <EmptyCart/>
          ) : (
            <DetailCart 
              cart={cart}
              setCart={setCart}
            />
          )
        }
      </Container>
    </div>
  );
}

export default memo(Cart);
