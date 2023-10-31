import 'bootstrap/dist/css/bootstrap.min.css'; // Muy importante 
import PriceDetails from "../priceDetails";
import FlyDetails from "../flyDetails";
import MyStepper from '../passengerDetails/stepper';

import { Container, Row, Col } from "react-bootstrap";


const SecondView =() =>{
    return(
        <Container>
            <Row >
                <Col sm={8} >
                    <MyStepper/>
                </Col>
                <Col sm={4}>
                    <PriceDetails/>
                    <FlyDetails/>
                </Col>
            </Row>
        </Container>
    )
}
export default SecondView;