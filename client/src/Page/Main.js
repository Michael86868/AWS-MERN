import React,{useState, useEffect} from 'react'
import StationData from '../Component/StationData';
import { Alert, Card, Col, Container, Row } from 'react-bootstrap';
import Moment from 'react-moment';
import Icons from '../Component/Icons';
import TemperatureChart from '../Component/TemperatureChart';


const Main = () => {
    const [stationdata, setstationdata] = useState([]);
    const [serverMessage, setserverMessage] = useState("");
    const [show, setShow] = useState(false);

    useEffect(() => {
        AddStationData();
    }, [])

    const AddStationData = async () => {
        const data = await fetch("http://192.168.0.186:5000/api/station-data/-1");
        const finalData = await data.json();
        const {document} = finalData;
        document.dataCreated = new Date(document.dataCreated)-3600000;
        //document.dataCreated = new Date();
        setstationdata(document);
        setserverMessage("Data byly úspěšně načteny ze serveru.");
        setShow(true);
    }


    return (
        <Container className="mt-5">
            <Alert variant="success" show={show} onClose={() => setShow(false)} dismissible>
                <p className="m-0 fw-bolder">{serverMessage}</p>
            </Alert>
            <Row>
                <Col xl={12} className="mb-5">
                    <h1 className="text-center fw-bold">Meteostanice - (ARDUINO)</h1>
                </Col>
            </Row>
            <Row className="weather-data">
                <Col lg={12} className="mb-4">
                    <Card className="card h-100">
                        <Card.Body className="p-4 shadow-sm border-1">
                            <Row className="d-flex justify-content-center pt-3">
                                <Col lg={6} id="time" className="text-lg-end text-center"><Moment interval={1000} format="HH:mm:ss" /></Col>
                                <Col lg={6} id="date" className="text-lg-start text-center"><Moment interval={1000} format="DD.MM.YYYY" /></Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
                <StationData title="Teplota" data={parseFloat(stationdata.bmeTemperature).toFixed(2)} unit="°C"/>
                <StationData title="Vlhkost vzduchu" data={parseFloat(stationdata.bmeHumidity).toFixed(2)} unit="%"/>
                <StationData title="Atmosférický tlak" data={parseFloat(stationdata.bmePressure).toFixed(2)} unit="hPa"/>
                <StationData title="Nadmořská výšky" data={parseFloat(stationdata.bmeAltitude).toFixed(2)} unit="m.n.m."/>
                <StationData title="Rychlost větru" data="Nedoplněné" unit=""/>
                <StationData title="UV Index" data="Nedoplněné" unit=""/>
                <StationData title="Východ slunce" data={stationdata.sunrise} unit=""/>
                <StationData title="Západ slunce" data={stationdata.sunset} unit=""/>
                <Col lg={12} className="mb-4">
                    <Card className="h-100">
                        <Card.Body className="p-4 shadow-sm border-1">
                            <Row className="d-flex justify-content-center pt-3 pb-2">
                                <b>
                                    <span className="me-5 me-sm-3">Poslední synchronizace se serverem: </span><span className="float-start float-md-none" style={{fontSize: "1.2rem"}}><Moment date={stationdata.dataCreated} format="HH:mm:ss DD.MM.YYYY" /></span>
                                    <span style={{cursor:"pointer"}}className="float-end" onClick={() => AddStationData()}>
                                        <Icons icon="Synchronizace"/>
                                    </span>
                                </b>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className="mt-5">
                <Col xl={12} className="mt-5">
                    <h2 className="text-center fw-bold">Graf teplotních senzorů Dallas DS18B20</h2>
                </Col>
            </Row>
            <Row className="mt-5 mb-5">
                <Col lg={12}>
                    <TemperatureChart />
                </Col>
            </Row>
        </Container>
    )
}

export default Main
