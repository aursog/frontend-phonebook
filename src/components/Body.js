import '../css/Body.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from "react-bootstrap/Button";
import Results from "./Results";
import {Form, InputGroup} from "react-bootstrap";
import {BsSearch} from "react-icons/bs";

function Body() {
    return(
        <Container>
            <Row>
                <Col md={8}>
                    <h1>Contacts</h1>
                </Col>
                <Col md={4} className="button-column">
                    <Button variant="primary">+ Add Contact</Button>
                </Col>
            </Row>

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
