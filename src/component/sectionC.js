import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container,
         Row,
         Col,
         Card,
         CardDeck, 
         Carousel } from 'react-bootstrap';

import product_1 from '../images/product-1.jpg';
import product_2 from '../images/product-2.jpg';
import product_3 from '../images/product-3.jpg';
import product_4 from '../images/product-4.jpg';

import "./css/sectionC.css";



function SectionC() {
    
    return(

        <Container fluid className="custom-sectionC-container">

                <Row className="custom-row-header-C ">

                    <Col xs = {9} className="col-9 mx-auto custom-header-C ">
                        <h3 className="custom-title-C ">ΕΒΔΟΜΑΔΙΑΙΕΣ ΠΡΟΤΑΣΕΙΣ</h3>
                        <p className="custom-text-C ">Lorem ipsum dolor sit amet consectetur adipisicing elit illum amet excepturi labore id. </p>
                    </Col>

                </Row>

                <Row className="custom-card-row-C">

                    <Col xs = {9} className="mx-auto custom-card-col-C">
                        
                        <CardDeck className="d-flex align-items-center justify-content-between custom-card-deck "> 

                            <Card className=" bg-transparent border-0 custom-card-C">
                                <Card.Img src = {product_1} className = "card-img-top custom-card-image-C custom-exclusion-image-1" alt= "product_1" />    
                                <Card.Body className=" custom-card-body-C custom-exclusion-body-1">
                                    <Card.Title className=" custom-card-title-C">BAGS</Card.Title>
                                    <Card.Text className=" text-muted custom-card-price-C">$6.00</Card.Text>
                                    <Card.Text className=" text-muted custom-card-text-C">Paper bag</Card.Text>         
                                </Card.Body>
                            </Card>
                            
                            <Card className=" bg-transparent border-0 custom-card-C">
                                <Card.Img src = {product_2} className = "card-img-top custom-card-image-C custom-exclusion-image-2" alt= "product_2" />    
                                <Card.Body className="custom-card-body-C custom-exclusion-body-2">
                                    <Card.Title className="custom-card-title-C">CANS</Card.Title>
                                    <Card.Text className=" text-muted custom-card-price-C"> $7.00</Card.Text>
                                    <Card.Text className=" text-muted custom-card-text-C">Packaging</Card.Text>                              
                                </Card.Body>
                            </Card>

                            <Card className=" bg-transparent border-0 custom-card-C">
                                <Card.Img src = {product_3} className = "card-img-top custom-card-image-C custom-exclusion-image-3" alt= "product_3" />    
                                <Card.Body className="custom-card-body-C custom-exclusion-body-3">
                                    <Card.Title className=" custom-card-title-C">SHUTTER</Card.Title>
                                    <Card.Text className=" text-muted custom-card-price-C">$10.00</Card.Text>
                                    <Card.Text className=" text-muted custom-card-text-C">Packaging</Card.Text>                              
                                </Card.Body>
                            </Card>
                            
                            <Card className=" bg-transparent border-0 custom-card-C">
                                <Card.Img src = {product_4} className = "card-img-top custom-card-image-C custom-exclusion-image-4" alt= "product_4" />    
                                <Card.Body className="custom-card-body-C custom-exclusion-body-4">
                                    <Card.Title className="custom-card-title-C">CORK</Card.Title>
                                    <Card.Text className=" text-muted custom-card-price-C">$10.00</Card.Text>
                                    <Card.Text className=" text-muted custom-card-text-C">Magazine</Card.Text>                              
                                </Card.Body>
                            </Card>

                        </CardDeck>

                    </Col>

            </Row>


            <Row className="custom-carusel-layer">

                <Carousel className="custom-carusel" >
                        
                        <Carousel.Item className="custom-carusel-item ">
                            <img src= {product_1} alt="First slide" className="custom-carusel-image"  />
                            <Carousel.Caption className = "custom-caption">
                                <h3 className=" custom-carusel-title-C">BAGS</h3>
                                <p className=" text-muted custom-carusel-price-C">$6.00</p>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item className="custom-carusel-item">
                            <img src= {product_2} alt="Second slide" className="custom-carusel-image"  />
                            <Carousel.Caption className = "custom-caption">
                                <h3 className="custom-carusel-title-C">CANS</h3>
                                <p className=" text-muted custom-carusel-price-C"> $7.00</p>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item className=" custom-carusel-item">
                            <img src= {product_3} alt="Third slide" className="custom-carusel-image"  />
                            <Carousel.Caption className = "custom-caption">
                                <h3 className=" custom-carusel-title-C">SHUTTER</h3>
                                <p className=" text-muted custom-carusel-price-C">$10.00</p>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item className=" custom-carusel-item">
                            <img src= {product_4} alt="Forth slide" className="custom-carusel-image"  />
                            <Carousel.Caption className = "custom-caption">
                                <h3 className="custom-carusel-title-C">CORK</h3>
                                <p className=" text-muted custom-carusel-price-C">$10.00</p>
                            </Carousel.Caption>
                        </Carousel.Item>

                </Carousel>
            </Row>
        
        </Container>
    )
}

export default SectionC