import React, { useState } from 'react'
import { Form, InputGroup, Row, Table } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleUp, faAngleLeft } from '@fortawesome/free-solid-svg-icons'

const Request = ({text,url,method}) => {

    const [isActive, setIsActive] = useState(false);

    const color = () => {
        switch(method){
            case 'post': return "#79bc64";
            case 'get': return "#40a9b4";
            case 'put': return "#e6c33b";
            case 'delete': return "#ec6c5e";
        }
    }

    return (
        <Row>
            <div className="d-flex mt-2 shadow-sm px-0 mx-1">
                <span className="text-white fw-bolder text-center" style={{fontSize: "15px", backgroundColor: color(), padding: "12px 0px", width: "110px"}}>{method.toUpperCase()}</span>
                <span className="align-self-center mx-4 fw-bolder" style={{fontSize: "15px"}}>{url}</span>
                <span className="align-self-center">{text}</span>
                <FontAwesomeIcon style={{cursor: "pointer"}} className="align-self-center ms-auto me-3 p-2" icon={isActive ? faAngleDown : faAngleLeft} onClick={()=> {
                    setIsActive(!isActive);
                }}/>
            </div>
            <div className={isActive ? "d-inline shadow-sm mx-1 py-3 px-0" : "d-none"}>
                <span className="d-block px-4">Before you want to display data at all, you have to adding data to the database. To adding data, you must send a POST request to the given URL with the given parameters. </span>
                <span className="d-block py-3 px-4">After sending the request, it will either save to the database or some error message.</span>
                <div className="bg-light py-3 mx-0 px-4 fw-bolder mb-5">Parametres</div>
                <div className="px-4 py-3">
                    <Table responsive>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Value</th>
                                <th className="ps-5">Type</th>
                                <th>Information</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="fw-bolder" style={{width: "25%"}}>dataCreated</td>
                                <td style={{width: "23%"}}><InputGroup><Form.Control aria-label="First name" value="2021-11-06T17:41:35.640Z" disabled/></InputGroup></td>
                                <td className="fw-bold ps-5">Date</td>
                                <td className="text-muted">Record date</td>
                            </tr>
                            <tr>
                                <td className="fw-bolder" style={{width: "25%"}}>dallasTemperature1</td>
                                <td style={{width: "23%"}}><InputGroup><Form.Control aria-label="First name" value="22.5" disabled/></InputGroup></td>
                                <td className="fw-bold ps-5">Float</td>
                                <td className="text-muted">Temperature BS18B20 sensor</td>
                            </tr>
                            <tr>
                                <td className="fw-bolder" style={{width: "25%"}}>dallasTemperature2</td>
                                <td style={{width: "23%"}}><InputGroup><Form.Control aria-label="First name" value="23" disabled/></InputGroup></td>
                                <td className="fw-bold ps-5">Float</td>
                                <td className="text-muted">Temperature BS18B20 sensor</td>
                            </tr>
                            <tr>
                                <td className="fw-bolder" style={{width: "25%"}}>dallasTemperature3</td>
                                <td style={{width: "23%"}}><InputGroup><Form.Control aria-label="First name" value="22.875" disabled/></InputGroup></td>
                                <td className="fw-bold ps-5">Float</td>
                                <td className="text-muted">Temperature BS18B20 sensor</td>
                            </tr>
                            <tr>
                                <td className="fw-bolder" style={{width: "25%"}}>bmeTemperature</td>
                                <td style={{width: "23%"}}><InputGroup><Form.Control aria-label="First name" value="23.76" disabled/></InputGroup></td>
                                <td className="fw-bold ps-5">Float</td>
                                <td className="text-muted">Temperature BME sensor</td>
                            </tr>
                            <tr>
                                <td className="fw-bolder" style={{width: "25%"}}>bmePressure</td>
                                <td style={{width: "23%"}}><InputGroup><Form.Control aria-label="First name" value="969.2873" disabled/></InputGroup></td>
                                <td className="fw-bold ps-5">Float</td>
                                <td className="text-muted">Pressure BME sensor</td>
                            </tr>
                            <tr>
                                <td className="fw-bolder" style={{width: "25%"}}>bmeHumidity</td>
                                <td style={{width: "23%"}}><InputGroup><Form.Control aria-label="First name" value="46.08203" disabled/></InputGroup></td>
                                <td className="fw-bold ps-5">Float</td>
                                <td className="text-muted">Humidity BME sensor</td>
                            </tr>
                            <tr>
                                <td className="fw-bolder" style={{width: "25%"}}>bmeAltitude</td>
                                <td style={{width: "23%"}}><InputGroup><Form.Control aria-label="First name" value="372.6226" disabled/></InputGroup></td>
                                <td className="fw-bold ps-5">Float</td>
                                <td className="text-muted">Altitude BME sensor</td>
                            </tr>
                            <tr>
                                <td className="fw-bolder" style={{width: "25%"}}>mqGas</td>
                                <td style={{width: "23%"}}><InputGroup><Form.Control aria-label="First name" value="2663" disabled/></InputGroup></td>
                                <td className="fw-bold ps-5">Float</td>
                                <td className="text-muted">Gas sensor</td>
                            </tr>
                            <tr>
                                <td className="fw-bolder" style={{width: "25%"}}>mhRain</td>
                                <td style={{width: "23%"}}><InputGroup><Form.Control aria-label="First name" value="500" disabled/></InputGroup></td>
                                <td className="fw-bold ps-5">Float</td>
                                <td className="text-muted">Rain sensor</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
                <div className="bg-light py-3 mx-0 px-4 fw-bolder mb-5">Responses</div>
                <div className="px-4 py-3">
                    <Table responsive>
                        <thead>
                            <tr>
                                <th style={{width: "100px"}}>Code</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="py-4">200</td>
                                <td className="py-4">
                                    <span>Record added</span>
                                    <div className="rounded p-3 mt-3 text-white" style={{backgroundColor: "#404040"}}>
                                        <pre class="my-0">{"{"}</pre>
                                        <pre class="my-0 ms-3">{'"statusCode": "200",'}</pre>
                                        <pre class="my-0">{"}"}</pre>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="py-4">400</td>
                                <td className="py-4">
                                    <span>Record cannot be created</span>
                                    <div className="rounded p-3 mt-3 text-white" style={{backgroundColor: "#404040"}}>
                                        <pre class="my-0">{"{"}</pre>
                                        <pre class="my-0 ms-2">{'"statusCode": "400",'}</pre>
                                        <pre class="my-0 ms-2">{'"errors": ['}</pre>
                                        <pre class="my-0 ms-4">{'"status": "args"'}</pre>
                                        <pre class="my-0 ms-2">{']'}</pre>
                                        <pre class="my-0">{"}"}</pre>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="py-4">429</td>
                                <td className="py-4">
                                    <span>Too many requests!</span>
                                    <div className="rounded p-3 mt-3 text-white" style={{backgroundColor: "#404040"}}>
                                    <pre class="my-0">{"{"}</pre>
                                        <pre class="my-0 ms-2">{'"statusCode": "429",'}</pre>
                                        <pre class="my-0 ms-2">{'"errors": ['}</pre>
                                        <pre class="my-0 ms-4">{'"status": "args"'}</pre>
                                        <pre class="my-0 ms-2">{']'}</pre>
                                        <pre class="my-0">{"}"}</pre>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        </Row>
    )
}

export default Request