import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container,
         Row,
         Col,  
         Navbar,
         Nav
         } from 'react-bootstrap';
         
import "./css/header.css";



function Header() {

    return(

    
<Container fluid className="sticky-top custom-header-container">

    <Row className=" bg-dark custom-header-row-1">
        <Col xs = {2} xl = {3} className=" h-100 custom-header-col-1">
            <Col xl = {{span:6, offset:6}} className=" h-100 p-1 d-flex align-items-center ">        
                <a className="custom-language-logo" href="#"></a>                                 
                <a className="custom-language-text text-white" href="#">Ελληνικά</a>
            </Col>
        </Col> 
    </Row>

    <Row className=" bg-dark custom-header-row-2 ">
        <Col xs = {12} className="h-100 custom-header-strip"> </Col>                               
    </Row>

    <Row className="w-100 custom-header-row-3 align-items-top">                                   

        <Col xs = {3} md = {3} lg = {2} xl = {3} className="bg-white custom-nav-logo "> 
            <Col xl = {{span:6, offset:6}} className="">
                <a className=" custom-logo-black " href="#"></a>                                    
            </Col>
        </Col> 


        <Col xs = {5} md = {6} lg = {9} xl = {7} className="bg-white mx-auto custom-nav-col ">  

            <Navbar style={{padding: "0"}} collapseOnSelect expand="lg" class=" custom-nav-menu ">     
                   <Navbar.Toggle aria-controls="navbarCollapse" className="custom-nav-button "/>
                                <Navbar.Collapse className="custom-colapse-bar " id="navbarCollapse">
                                    <Nav className=" mx-auto w-100 custom-menu-item" >
                                        <Nav.Link className = "custom-menu-link" href = "#">ΔΩΡΑ</Nav.Link>
                                        <Nav.Link className = "custom-menu-link" href = "#">ΕΚΤΥΠΩΣΕΙΣ ΕΝΔΥΜΑΤΩΝ</Nav.Link>
                                        <Nav.Link className = "custom-menu-link" href = "#">ΑΥΤΟΚΟΛΛΗΤΑ</Nav.Link>
                                        <Nav.Link className = "custom-menu-link" href = "#">ΚΑΜΒΑΔΕΣ</Nav.Link>
                                        <Nav.Link className = "custom-menu-link" href = "#">ΚΕΝΤΗΜΑΤΑ ΕΝΔΥΜΑΤΩΝ</Nav.Link>
                                        <Nav.Link className = "custom-menu-link" href = "#">OFFSET ΕΚΤΥΠΩΣΕΙΣ</Nav.Link>
                                    </Nav>
                                </Navbar.Collapse>
                    </Navbar>
            </Col>

            <Col xs = {4} md = {3} lg = {1} xl = {2}  className=" custom-user-section bg-white">          
                <Col xs = {12}  className=" custom-navigation-user  bg-white ">
        
                    <Nav className=" ">
                        <Nav.Link className="border-0 custom-user-link custom-search" href="#"> </Nav.Link>    
                        <Nav.Link className="border-0 custom-user-link custom-login" href="#"></Nav.Link>      
                        <Nav.Link className="border-0 custom-user-link custom-basket" href="#"> </Nav.Link>    
                    </Nav>

                </Col>
            </Col>

    </Row>

</Container>

    )
}

export default Header