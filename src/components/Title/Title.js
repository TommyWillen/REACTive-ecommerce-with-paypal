import React from 'react'
import {Row, Col} from 'react-bootstrap'
export default function Title({name,title}) {
    return (
        <Row>
            <Col xs={10} className="mx-auto my-2 text-center text-title">
                <h1 className='font-weight-bold text-capitalize'>
                    {name} <strong className="text-blue">{title}</strong>
                </h1>
            </Col>
        </Row>
    )
}
