import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import PayPalButton from "../PayPalButton/PayPalButton";

const CartTotals = ({ value, history }) => {
  const { cartSubTotal, cartTax, cartTotal, clearCart } = value;

  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col
            xs={10}
            sm={8}
            className="mt-2 ml-sm-5 ml-md-auto text-capitalize text-right"
          >
            <Link to="/">
              <Button
                variant="outline-danger"
                className="text-uppercase mb-3 px-5"
                type="button"
                onClick={() => clearCart()}
              >
                clear cart
              </Button>
            </Link>
            <h5>
              <span className="text-title">subtotal : </span>
              <strong>$ {cartSubTotal}</strong>
            </h5>
            <h5>
              <span className="text-title">tax : </span>
              <strong>$ {cartTax}</strong>
            </h5>
            <h5>
              <span className="text-title">total : </span>
              <strong>$ {cartTotal}</strong>
            </h5>
            <PayPalButton
              total={cartTotal}
              clearCart={clearCart}
              history={history}
            />
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default CartTotals;
