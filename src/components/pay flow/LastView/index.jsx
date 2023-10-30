
import 'bootstrap/dist/css/bootstrap.min.css'; // Muy importante 
import PriceDetails from "../priceDetails";
import FlyDetails from "../flyDetails";
import Ticket from '../Ticket';
import HeaderLastView from '../headerLastView';
import ButtonLastView from '../Button';

import { Container, Row, Col } from "react-bootstrap";


const LastView =() =>{
    return(
        <Container>
            <Row >
                <Col sm={8} >
                    <HeaderLastView/>
                    <Ticket/>
                    <ButtonLastView/>
                </Col>
                <Col sm={4}>
                    <PriceDetails/>
                    <FlyDetails/>
                </Col>
            </Row>
        </Container>
    )
}
export default LastView;