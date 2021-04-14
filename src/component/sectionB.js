import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container,
         Row,
         Col,
         Card,
         Button } from 'react-bootstrap';

import "./css/sectionB.css";



function SectionB() {

    return(

        <Container fluid className = "custom-sectionB-container">

            <Row className = "position-relative h-100">

                    <Col xs = {11} className = " position-absolute h-100 start-0 bg-transparent custom-image-one" style={{zIndex:2}}></Col> 

                    <Col sm = {8} className = " h-100 " style={{zIndex:3}}>
                        <Col md = {9} lg = {{offset:2}} className = " h-100 custom-card-section-B">

                            <Card className = "border-0 custom-card-B bg-transparent">                            
                                    <Card.Body className = "custom-card-body-B">          
                                        <Card.Title className = " fw-bold custom-card-h3-B">ΜΟΝΑΔΙΚΑ ΠΡΟΪΟΝΤΑ ΣΕ ΕΚΠΛΗΚΤΙΚΕΣ ΤΙΜΕΣ</Card.Title>           
                                        <Button variant = "outline-dark"  className = "custom-card-button-B " a href="#" >ΠΡΟΣΦΟΡΕΣ</Button>          
                                    </Card.Body>
                            </Card>

                        </Col>
                    </Col>

                    <Col md = {{span:6, offset:6}} className = "position-absolute h-100" style={{zIndex:2}}>
                        <Col className = " custom-image-two"></Col>
                    </Col>  

            </Row>
            
        </Container>
    )
}

export default SectionB