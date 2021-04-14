import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container,
         Row,
         Col,   
         Card,
         Button
         } from 'react-bootstrap';

import "./css/sectionA.css";



function SectionA() {

    return(
        
    <Container fluid className = "custom-sectionA-container">

        <Row className = " position-relative custom-section-a ">

            <Col className = "position-absolute section-imageA"></Col>  
                <Col sm = {8} className = " position-absolute start-0 ">
                    <Col md = {9} lg = {{offset:2}} className = "custom-card-section-A ">

                        <Card className = " border-0 position-relative bg-transparent custom-card-A">
                            <Card.Body className = " custom-card-body-A "> 

                                <Card.Title className = "custom-card-title-A ">ΕΚΤΥΠΩΜΕΝΑ ΠΟΛΛΑΠΛΩΝ ΧΡΗΣΕΩΝ ΠΟΤΗΡΙΑ</Card.Title>  

                                <Card.Text className = " text-white custom-card-text-A">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla velit
                                    tortor, rutrum eget quam non, feugiat commodo sem. Proin id tempor
                                    nibh. In efficitur tincidunt diam. Nulla convallis ex risus.
                                </Card.Text>   
                                        
                                <Button variant = "outline-light" className = "custom-button-a " a href = "#">ΦΤΙΑΞΕ ΤΟ ΔΙΚΟ ΣΟΥ</Button>
                                <Button variant = "outline-light" className = "custom-button-b " a href = "#" >ΓΙΑ ΕΠΑΓΓΕΛΜΑΤΙΕΣ</Button>
                
                            </Card.Body>
                        </Card>
                    </Col>
                </Col>

        </Row>

    </Container>

    )
}

export default SectionA