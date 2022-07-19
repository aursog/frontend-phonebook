import '../css/Datacomponent.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {BsFillTelephoneFill, BsFillTrashFill} from "react-icons/bs";
import Button from "react-bootstrap/Button";
import axios from "axios";

function writeFormatPhone(phone) {
    return phone.substr(0, 3) + "-" + phone.substr(3, 3) + "-" + phone.substr(6, 4);
}

const PhonebootData = ({ name, phone, id }) => {
    const handleSubmit = () => {
        axios.delete("http://localhost:8080/phonebook/delete/" + id)
            .then(res => {
                console.log(res);
            });
    }

    return (
        <Container className="phonebook_container">
            <Row>
                <Col sm={10}>
                    <h3>{name}</h3>
                    <h4><BsFillTelephoneFill /> {writeFormatPhone(phone)}</h4>
                </Col>
                <Col sm={2} className="actionColumn">
                    <Button variant="danger" className="trashButton" onClick={handleSubmit}><BsFillTrashFill size={30} /></Button>
                </Col>
            </Row>
        </Container>
    );
}

export default PhonebootData;
