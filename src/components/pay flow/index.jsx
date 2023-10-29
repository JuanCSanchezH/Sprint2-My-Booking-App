
import 'bootstrap/dist/css/bootstrap.min.css'; // Muy importante 
import PriceDetails from "./priceDetails";
import FlyDetails from "./flyDetails";
import Ticket from './Ticket';
import HeaderLastView from './headerLastView';
import { Container, Row, Col } from "react-bootstrap";


const PayFlow =() =>{
    return(
        <Container>
            <Row >
                <Col sm={8} >
                    <HeaderLastView/>
                    <Ticket/>
                </Col>
                <Col sm={4}>
                    <PriceDetails/>
                    <FlyDetails/>
                </Col>
            </Row>
        </Container>
    )
}
export default PayFlow;