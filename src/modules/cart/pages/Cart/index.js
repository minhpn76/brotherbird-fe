import React, { memo } from "react";
import Container from "react-bootstrap/Container";
import EmptyCart from './EmptyCart';
import DetailCart from './DetailCart';
import './cart.css';
import { isEmpty } from "lodash";
import { useSelector } from "react-redux";

function Cart() {
  const cart = useSelector(state => state.collection.cart || [])


  return (
    <div className="cart-section">
      <Container style={{padding: '50px 0'}}> 
        {
          isEmpty(cart) ? (
            <EmptyCart/>
          ) : (
            <DetailCart 
              cart={cart}
            />
          )
        }
      </Container>
    </div>
  );
}

export default memo(Cart);
