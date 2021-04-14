import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Icon, InlineIcon } from '@iconify/react';
import paperPlane from '@iconify-icons/fa/paper-plane';

import { Container,
    Row,
    Col,
    Nav,
    ListGroup, 
    InputGroup,
    FormControl,
    Button
    } from 'react-bootstrap';

import "./css/footer.css";

function Footer() {

    return(

    <Container fluid className="custom-footer-container">

            <Row className="custom-row-footer" >

                <Col xs={{span:6, offset:0}} sm={{span:6, offset:0}} md={{span:4, offset:0}} xl={{span:3, offset:0}} className="custom-footer-col-left">

                    <h2 className="custom-footer-title">PRINT SHOP</h2>

                    <p className="custom-footer-text">Suspendisse hendrerit tellus laoreet luctus pharetra. 
                        Aliquam porttitor vitae orci nec ultricies. Curabitur vehicula, 
                        libero eget faucibus faucibus, purus erat.
                    </p>

                </Col>

                <Col xs={{span:6, offset:0}} sm={{span:6, offset:0}} md={{span:4, offset:0}} xl={{span:3, offset:0}}  className="custom-footer-col-middle">

                    <h4 className="custom-footer-header">ΧΡΗΣΙΜΑ LINKS</h4>
                        
                        <Nav className="custom-footer-nav">
                            <Nav.Item className= "custom-footer-item"> <Nav.Link className= "custom-footer-link" href="#">Όροι χρήσης</Nav.Link> </Nav.Item>
                            <Nav.Item className= "custom-footer-item"> <Nav.Link className= "custom-footer-link" href="#">Τρόποι αποστολής</Nav.Link> </Nav.Item>
                            <Nav.Item className= "custom-footer-item"> <Nav.Link className= "custom-footer-link" href="#">Τρόποι πληρωμής</Nav.Link> </Nav.Item>
                            <Nav.Item className= "custom-footer-item"> <Nav.Link className= "custom-footer-link" href="#">Επικοινωνία</Nav.Link> </Nav.Item>
                        </Nav>                     

                </Col>

                <Col xs={{span:6, offset:6}} sm={{span:6, offset:6}} md={{span:4, offset:0}} xl={{span:6, offset:0}}  className="custom-footer-col-right">

                    <h4 className="custom-footer-header">ΕΠΙΚΟΙΝΩΝΙΑ </h4>
                
                        <ListGroup variant="flush" className="custom-footer-contact">
                            <ListGroup.Item className="bg-transparent border-0 custom-footer-list-item">New York, NY 10013</ListGroup.Item>
                            <ListGroup.Item className="bg-transparent border-0 custom-footer-list-item">(315)5512-2579</ListGroup.Item>
                            <ListGroup.Item className="bg-transparent border-0 custom-footer-list-item">etchy@qode.com</ListGroup.Item>
                        </ListGroup>

                        <InputGroup className="custom-footer-input-group">

                            <FormControl className="custom-footer-form  bg-transparent border-0" placeholder="Get weekly newsletters" />

                            <InputGroup.Append className="custom-footer-button-slot">

                                <Button className="custom-footer-button bg-transparent border-0" >
                                    <Icon className="custom-icon" icon={paperPlane} />
                                </Button> 
                                
                            </InputGroup.Append>                                    

                        </InputGroup>

                </Col>
                   
            </Row>

</Container>
    )

}

export default Footer

