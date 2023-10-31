
import 'bootstrap/dist/css/bootstrap.min.css'; // Muy importante 
import PriceDetails from "../priceDetails";
import FlyDetails from "../flyDetails";
import Ticket from '../Ticket';

import ButtonLastView from '../Button';


import { Container, Row, Col } from "react-bootstrap";


const LastView =() =>{
    return(
        <>
      
                    
                    <Ticket/>
                    <ButtonLastView/>
                    </>      
    )
}
export default LastView;