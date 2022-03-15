import React from 'react'
import { Container, Row } from 'react-bootstrap';
import Request from '../Component/Request';

const Api = () => {
    return (
        <Container className="my-5 pb-5" style={{width: "50%", height: "850px"}}>
            <Row className="text-center my-5 py-5 text-center d-flex justify-content-center">
                <span className="fw-bolder h2 border-warning py-2" style={{borderBottom: "3px solid", width: "auto"}} >DOCUMENTATION - API</span>
            </Row>
            <Row className="border-bottom mb-2">
                <h3 className="fw-bolder">Station Data</h3>
            </Row>
            <Request text="Creates the station data" url="/api/station-data" method="post" />
            <Request text="Retrieves the stations data" url="/api/station-data" method="get" />
            <Request text="Replaces the station data" url="/api/station-data/{id}" method="put" />
            <Request text="Removes the station data" url="/api/station-data/{id}" method="delete" />
            <Request text="Retrieves the station data" url="/api/station-data/{id}" method="get" />
        </Container>
    )
}

export default Api
