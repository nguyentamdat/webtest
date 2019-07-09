import React, { Component } from "react"
import { Table, InputGroup, FormControl, Container, Row, Col, Dropdown, DropdownButton, Button, Pagination } from "react-bootstrap"

export default class PatientInfo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            patientList: []
        }
    }
    sendPage(x) {
        // send GET request to server
        // received data and use this.setState({patientList:data})
        // data is list of patient information
    }

    render() {
        return (
            <div>
                <h1>Patient Information</h1>
                <Container>
                    <Row>
                        <Col>
                            <InputGroup className="mb-3">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroup-sizing-default">Search</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl
                                    aria-label="Search"
                                    aria-describedby="inputGroup-sizing-default"
                                />
                            </InputGroup>
                        </Col>
                        <Col>
                            <InputGroup className="mb-3">
                                <DropdownButton
                                    as={InputGroup.Prepend}
                                    variant="outline-secondary"
                                    title="Show"
                                    id="input-group-dropdown-1"
                                >
                                    <Dropdown.Item href="#">10</Dropdown.Item>
                                    <Dropdown.Item href="#">30</Dropdown.Item>
                                    <Dropdown.Item href="#">50</Dropdown.Item>
                                </DropdownButton>
                                <p>Entries</p>
                            </InputGroup>
                        </Col>
                    </Row>
                <Row>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Mobile</th>
                            <th>Gender</th>
                            <th>Date of Birth</th>
                            <th>Option</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>
                                <Button>Edit</Button>
                                <Button>Delete</Button>
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td colSpan="2">Larry the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </Table>
                </Row>
                <Row>
                    <Col>
                    <Pagination>
                        <Pagination.Prev />
                        <Pagination.Item onClick={() => {this.sendPage(1)}} active>{1}</Pagination.Item>
                        <Pagination.Next />
                    </Pagination>
                    </Col>
                </Row>
                </Container>
            </div>
        )
    }
}