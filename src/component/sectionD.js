import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container,
         Row,
         Col,   
         Card
         } from 'react-bootstrap';

import category_1 from '../images/category-1.jpg';
import category_2 from '../images/category-2.jpg';
import category_3 from '../images/category-3.jpg';
import category_4 from '../images/category-4.jpg';
import category_5 from '../images/category-5.jpg';
import category_6 from '../images/category-6.jpg';

import "./css/sectionD.css";



function SectionD() {

    return(

    <Container fluid className="custom-sectionD-container">

        <Row className="row-cols-1 row-cols-md-2 gap-0 bg-success custom-row">
  

            <Card className = "text-white border-0 custom-card ">

                <Card.Img src = {category_1} className=" custom-image" alt="Responsive Category-1" />

                <Card.ImgOverlay className = "h-100 d-flex align-items-end">
                    <Col lg = {6} className = "custom-holder">
                        <Card.Text className="custom-card-text-D mb-1">Πίνακες σε καμβά</Card.Text>
                        <Card.Title className="custom-card-title-D">ΚΑΜΒΑΔΕΣ</Card.Title>
                    </Col>
                </Card.ImgOverlay>
            </Card>

            <Card className = " text-white border-0 custom-card ">
                
                <Card.Img src = {category_2} className="img-fluid custom-image" alt="Responsive Category-2" />   

                <Card.ImgOverlay className = "h-100 d-flex align-items-end">
                    <Col lg = {6} className = "p-3 custom-holder ">
                        <Card.Text className="custom-card-text-D mb-1">Αυτοκόλλητα, Αυτοκόλλητες Ταπετσαρίες</Card.Text>
                        <Card.Title className="custom-card-title-D">ΤΑΠΕΤΣΑΡΙΕΣ</Card.Title>
                    </Col>
                </Card.ImgOverlay>
            </Card>

            <Card className = " text-white border-0 custom-card ">
                
                <Card.Img src = {category_3} className="img-fluid custom-image" alt="Responsive Category-3" />

                <Card.ImgOverlay className = "h-100 d-flex align-items-end">
                    <Col lg = {6} className = "p-3 custom-holder">
                        <Card.Text className="custom-card-text-D mb-1">Κούπες, Στυλό, Δώρα</Card.Text>
                        <Card.Title className="custom-card-title-D">ΑΠΕΥΘΕΙΑΣ ΕΚΤΥΠΩΣΕΙΣ</Card.Title>
                    </Col>
                </Card.ImgOverlay>
            </Card>

            <Card className = " text-white border-0 custom-card ">
                
                <Card.Img src = {category_4} className="img-fluid custom-image" alt="Responsive Category-4" />

                <Card.ImgOverlay className = "h-100 d-flex align-items-end">
                    <Col lg = {6} className = " p-3 custom-holder">
                        <Card.Text className="custom-card-text-D mb-1">Μπλούζες, Καπέλα, Αξεσουάρ</Card.Text>
                        <Card.Title className="custom-card-title-D">ΡΟΥΧΙΣΜΟΣ</Card.Title>
                    </Col>
                </Card.ImgOverlay>
            </Card>

            <Card className = " text-white border-0 custom-card ">
                
               <Card.Img src = {category_5} className="img-fluid custom-image" alt="Responsive Category-5" />

                <Card.ImgOverlay className = "h-100 d-flex align-items-end">
                    <Col lg = {6} className = " p-3 custom-holder">
                        <Card.Text className="custom-card-text-D mb-1">Ποτήρια</Card.Text>
                        <Card.Title className="custom-card-title-D">ΠΟΛΛΑΠΛΩΝ ΧΡΗΣΕΩΝ</Card.Title>
                    </Col>
                </Card.ImgOverlay>
            </Card>

            <Card className = " text-white border-0 custom-card ">
                
                 <Card.Img src = {category_6} className="img-fluid custom-image" alt="Responsive Category-6" />

                <Card.ImgOverlay className = "h-100 d-flex align-items-end">
                    <Col lg = {6} className = "p-3 custom-holder">
                        <Card.Text className="custom-card-text-D mb-1 ">Φάκελοι, Φυλλάδια, Ημερολόγια</Card.Text>
                        <Card.Title className="custom-card-title-D">ΕΝΤΥΠΑ</Card.Title>
                    </Col>
                </Card.ImgOverlay>
            </Card>
            
        </Row>
        
    </Container>
    
    )
}

export default SectionD