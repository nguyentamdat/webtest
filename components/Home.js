import React, { Component } from "react";
import { Nav, NavDropdown, Row, Col, Container } from "react-bootstrap"
import PatientForm from "./PatientForm"
import PatientInfo from "./PatientInfo"

export default class Home extends Component {
    render() {
        return (
            <Container>
            <Row >
                <Col xs={2}>
                <Nav defaultActiveKey="/home" className="flex-column">
                    <NavDropdown title="Patient" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Patient Registration</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Patient Information</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link>Visit</Nav.Link>
                    <Nav.Link>Prescription</Nav.Link>
                    <Nav.Link>
                        Lab Test Order
            </Nav.Link>
                    <Nav.Link>Drug</Nav.Link>
                </Nav>
                </Col>
                <Col xs={6}>
                <PatientInfo />
                </Col>
            </Row>
            </Container>
        )
    }
}