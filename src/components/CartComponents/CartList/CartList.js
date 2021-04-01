import React from "react";
import { Container } from "react-bootstrap";
import CartItem from "../CartItem/CartItem";
const CartList = ({ value }) => {
  const { myCart } = value;
  return (
    <Container fluid>
          {myCart.map(item => {
              return <CartItem key={item.id} item={item} value={value}/>
      })}
     
    </Container>
  );
};

export default CartList;
