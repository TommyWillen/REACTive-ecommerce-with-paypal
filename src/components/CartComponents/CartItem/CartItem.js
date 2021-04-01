import React from "react";
import { Col, Row } from "react-bootstrap";

const CartItem = ({ item, value }) => {
  const { id, title, img, price, total, count } = item;
  const { increment, decrement, removeItem } = value;

  return (
    <Row className="my-2 text-capitalize text-center">
      <Col xs={10} className="mx-auto" lg={2}>
        <img
          src={img}
          style={{ width: "5rem", height: "5rem" }}
          className="img-fluid"
          alt={title}
        />
      </Col>
      <Col xs={10} className="mx-auto" lg={2}>
        <span className="d-lg-none">product : </span> {title}
      </Col>
      <Col xs={10} className="mx-auto" lg={2}>
        <span className="d-lg-none">price : </span> ${price}
      </Col>
      <Col xs={10} className="mx-auto my-2 my-lg-0" lg={2}>
        <div className="d-flex justify-content-center">
          <div>
            <span className="btn btn-black mx-1" onClick={() => decrement(id)}>
              -
            </span>
            <span className="btn btn-black mx-1">{count}</span>
            <span className="btn btn-black mx-1" onClick={() => increment(id)}>
              +
            </span>
          </div>
        </div>
      </Col>
          <Col xs={10} className="mx-auto" lg={2}>
              <div className='cart-icon' onClick={() => removeItem(id)}>
               <i className='fas fa-trash' />
              </div>
      </Col>
      <Col xs={10} className="mx-auto" lg={2}>
        <strong>item total : ${total}</strong>
      </Col>
    </Row>
  );
};

export default CartItem;
