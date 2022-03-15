import React from 'react'
import { Row } from 'react-bootstrap'

const Request = ({text,url,method}) => {

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
            </div>
        </Row>
    )
}

export default Request