import React from 'react'
import { Card, Col, Row } from 'react-bootstrap';
import Icons from './Icons';

const StationData = ({data,title,unit}) => {
    return (
        <>
            <Col lg={3} className="mb-4">
                <Card className="h-100">
                    <Card.Body className="card-body p-4 shadow-sm border-1">
                        <Row className="row">
                            <Col className="col-9 ps-3">
                                <Card.Title>{title}</Card.Title>
                                <Card.Text><span>{data}</span> {unit}
                                </Card.Text>
                            </Col>
                            <Col className="col-3 d-flex align-items-center justify-content-center">
                                <Icons icon={title} />
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Col>
        </>
    )
}

export default StationData
