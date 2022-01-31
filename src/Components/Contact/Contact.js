import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';

const Contact = () => {
    return (
        <div>
            <div className='my-5'>
                <h1 className='title w-50 mx-auto'>Contact</h1>
            <Container>
  <Row>
    <Col xs={12} lg={4}>
    <div>
        <div>
        <h5><i class="fas fa-home text-primary"></i> Binghamton, New York</h5>
            <p>4343 Hinkle Deegan Lake Road</p>
        </div>
        <div>
        <h5><i class="fas fa-phone-volume text-primary"></i> 00 (958) 9865 562</h5>
        <p>Mon to Fri 9am to 6 pm</p>
        </div>
        <div>
        <h5><i class="fas fa-envelope text-primary"></i> support@colorlib.com</h5>
            <p>Send us your query anytime!</p>
        </div>
        
    </div>    
    </Col>
    <Col xs={12} lg={4}>
    <div>
        <input type='text' className='w-75 mx-auto my-2 ' placeholder='Enter Your Name'/>
        <br/>
        <input type='email' className='w-75 mx-auto my-2' placeholder='Enter Your Email'/>
        <br/>
        <input type='text' className='w-75 mx-auto my-2' placeholder='Enter Your Subject'/>
    </div>
    </Col>
    <Col xs={12} lg={4}>
    <div>
    <input type='text' className=' m-2 p-5' placeholder='Enter Your Messege'/>
    <br/>
    <Button className='btn btn-secondary'>Send Messege</Button>
    </div>
    </Col>
  </Row>
</Container>
            </div>
        </div>
    );
};

export default Contact;