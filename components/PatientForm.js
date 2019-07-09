import React, { Component } from "react"
import { Form, Button } from "react-bootstrap"

export default class PatientForm extends Component {

    render() {
        return (
            <Form>
                <h1>Patient Add</h1>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="First Name" />
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Last Name" />
                    <Form.Label>Mobile</Form.Label>
                    <Form.Control type="number" placeholder="Mobile Number" />
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Gender</Form.Label>
                        <Form.Control as="select">
                            <option>Male</option>
                            <option>Female</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Label>Date of Birth</Form.Label>
                    <Form.Control type="text" placeholder="Date of Birth" />
                    
                </Form.Group>

                
                <Button variant="primary" type="submit" onClick={() => this.submit()}>
                    Add
                </Button>
            </Form>
        )
    }
}