import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../../context";
import { Card } from "react-bootstrap";

const ProductWrapper = styled.div``;

const Product = (props) => {
  const { id, title, img, price, inCart } = props.product;
  return (
    <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
      <Card>
        <div
          className="img-container p-5"
          onClick={() => console.log("you clicked me?")}
        >
          <Link to="/details">
            <img src={img} alt="product image" className="card-img-top" />
          </Link>
          <button
            className="cart-btn"
            disabled={inCart ? true : false}
            onClick={() => console.log("you clicked the cart button")}
          >
            {inCart ? (
              <p className="mb-0" disabled>
                In Cart
              </p>
            ) : (
              <i className="fas fa-cart-plus" />
            )}
          </button>
        </div>
        <Card.Footer className='d-flex justify-content-between'>
          <p className='align-self-center mb-0'>{title}</p>
          <h5 className="text-blue font-italic mb-0"><span className="mr-1">$</span>{ price}</h5>
        </Card.Footer>
      </Card>
    </ProductWrapper>
  );
};

export default Product;
