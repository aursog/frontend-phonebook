import '../css/Body.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from "react-bootstrap/Button";
import Results from "./Results";
import {Form, FormGroup, InputGroup} from "react-bootstrap";
import {BsSearch} from "react-icons/bs";
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import axios from "axios";
import Alert from 'react-bootstrap/Alert';

function Body() {

    const initData = {
        fullname: "",
        phone: ""
    };

    const [contactObject, setContactObject] = useState(initData);
    const [show, setShow] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleClose = () => {
        setShow(false);
    }
    const handleShow = () => setShow(true);
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(
            "http://localhost:8080/phonebook/create",
            {fullname: contactObject.fullname, phonenumber: contactObject.phone}
        ).then(res => {
            setSuccess(true);
            setTimeout(() => setShow(false), 1000);
        });
    }

    const dataChanger = (e) => {
        setContactObject({
            ...contactObject,
            [e.target.name]: e.target.value
        });
    }

    return(
        <Container>
            <Row>
                <Col md={8}>
                    <h1>Contacts</h1>
                </Col>
                <Col md={4} className="button-column">
                    <Button variant="primary" onClick={handleShow}>+ Add Contact</Button>
                </Col>
            </Row>

            <Modal show={show} onHide={handleClose} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>
                    <Modal.Title>Add new Contact</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    { success ? <Alert key='success' variant='success'>Register successfully created.</Alert> : '' }
                    <Form name="new-contact">
                        <FormGroup>
                            <Form.Label>Full name</Form.Label>
                            <Form.Control type="text" placeholder="Contact full name" name="fullname" autoFocus value={contactObject.fullname} onChange={dataChanger} />
                        </FormGroup>

                        <br />

                        <FormGroup>
                            <Form.Label>Phone number</Form.Label>
                            <Form.Control type="text" placeholder="Phone number of your contact" name="phone" value={contactObject.phone} onChange={dataChanger} />
                        </FormGroup>
                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSubmit}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>

            <Row className="input_search">
                <InputGroup>
                    <InputGroup.Text><BsSearch /></InputGroup.Text>
                    <Form.Control placeholder="Search for contact by last name..." />
                </InputGroup>
            </Row>

            <Results />
        </Container>
    );
}

export default Body;
