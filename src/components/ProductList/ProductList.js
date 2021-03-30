import React, { useState } from "react";
import Product from "../Product/Product";
import { Container, Row } from "react-bootstrap";
import Title from '../Title/Title'
import {ProductConsumer} from '../../context'

const ProductList = () => {

  return (
    <React.Fragment>
      <div className="py-5">
        <Container>
          <Title name='our' title='products'/>
          <Row>
            <ProductConsumer>
              {(val) => {
                return val.products.map(product => {
                  return <Product key={product.id} product={product}/>
                })
              } }
            </ProductConsumer>
          </Row>
        </Container>
      </div>
    </React.Fragment>
    // <Product></Product>
  );
};

export default ProductList;
