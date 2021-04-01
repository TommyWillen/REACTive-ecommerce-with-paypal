import React from "react";
import styled from "styled-components";
import { ProductConsumer } from "../../context";
import { ButtonContainer } from "../Button/Button";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  #modal{
      background: var(--mainWhite);
  }
`

const Modal = () => {
  return (
    <ProductConsumer>
      {(value) => {
              const { modalState, closeModal } = value;
              const { img, title, price } = value.modalProduct;
              if (!modalState) {
                  return null
              } else {
                return <ModalContainer>
                      <Container>
                          <Row>
                              <Col id='modal' xs={8} md={6} lg={4} className='mx-auto text-center text-capitalize p-5'>
                                <h5>item added to the cart</h5>
                                <img src={img} className="img-fluid" alt={title} />
                                <h5>{title}</h5>
                                <h5 className='text-muted'>price : $ {price}</h5>
                                <Link to='/'>
                                    <ButtonContainer onClick={() => closeModal()}>
                                        Store
                                    </ButtonContainer>
                                </Link>
                                <Link to='/cart'>
                                    <ButtonContainer cart onClick={() => closeModal()}>
                                        Go to Cart
                                    </ButtonContainer>
                                </Link>
                              </Col>
                          </Row>
                    </Container>
                  </ModalContainer>
              }
      }}
    </ProductConsumer>
  );
};

export default Modal;
