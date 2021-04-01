import React from "react";
import Title from "../../Title/Title";
import CartColumns from "../CartColumns/CartColumns";
import EmptyCart from "../EmptyCart/EmptyCart";
import { ProductConsumer } from "../../../context";
import CartList from "../CartList/CartList";
import CartTotals from "../CartTotals/CartTotals";

const Cart = () => {
  return (
    <section>
      <ProductConsumer>
        {(value) => {
          const { myCart } = value;
          if (myCart.length) {
            return (
              <React.Fragment>
                <Title name="your" title="cart" />
                <CartColumns />
                <CartList value={value} />
                <CartTotals value={value} />
              </React.Fragment>
            );
          } else {
            return <EmptyCart />;
          }
        }}
      </ProductConsumer>
    </section>
  );
};

export default Cart;
