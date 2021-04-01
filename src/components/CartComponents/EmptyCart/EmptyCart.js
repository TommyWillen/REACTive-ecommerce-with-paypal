import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const EmptyCart = () => {
  return (
      <Container className="mt-5">
          <Row>
              <Col xs={10} className="mx-auto text-center text-title">
                  <h1>your cart is currently empty</h1>
              </Col>
          </Row>
    </Container>
  )
}

export default EmptyCart
