import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import '../Footer/Footer.css'

const Footer = () => {
    return (
        <div className='nav'>
            <Container className='my-5'>
  <Row>
    <Col xs={12} lg={3}>
    <h1>Quick Link</h1>
     <p>About Us</p>   
     <p>Terms and Conditions</p>   
     <p>Privacy Policy</p>   
     <p>Help</p>   
     <p>Rooms</p>   




    </Col>
    <Col xs={12} lg={3}>
    <h1>Support</h1>
    <p>Our Location</p>
    <p>The Hosts</p>
    <p>About</p>
    <p>Contact</p>
    <p>Restaurant</p>
     </Col>
     <Col xs={12} lg={3}>
     <h1>Contact Info</h1>
      <h4>Address:</h4>  
        <p>98 West 21th Street, Suite 721 New York NY 10016</p>

        <h4>Phone:</h4>
        <p>(+1) 435 3533</p>
        <h4>Email:</h4>
        <p>info@yourdomain.com</p>
        </Col>
        <Col xs={12} lg={3}>
        <div>
            <h1>Newsletter</h1>
            <p>You can trust us. we only send promo offers, not a single spam.</p>
            <input type='email'className='p-1 m-3' placeholder='Your Email Address'/>
            <Button variant="outline-secondary" className='buttn'>Subscribe <i class="fas fa-arrow-right"></i></Button>
        </div>
        </Col>

       
  </Row>
  
  <hr/>
  <Row>
    <Col className='text'>Copyright © 2021 All rights reserved by <i class="fas fa-fan"></i> Rongin Posra</Col>
  </Row>
  <Row>
 
    <Col className='text' >
        <div>
        <h1>
        <i className="fab fa-facebook-square m-2"></i>
        <i className="fab fa-whatsapp-square m-2"></i>
        <i className="fab fa-instagram-square m-2"></i>
        <i className="fab fa-viber m-2"></i>
        <i className="fab fa-google-plus-square m-2"></i>
        </h1>
        </div>
    </Col>
  </Row>
  
</Container>
        </div>
    );
};

export default Footer;