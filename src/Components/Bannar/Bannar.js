import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
// import '../Bannar/Bannar.css'

const Bannar = () => {
    const image = ['https://cdn1.vectorstock.com/i/1000x1000/50/90/logo-for-shop-of-handmade-jewelry-vector-12475090.jpg']
    return ( 
        <div>
            <Container>
  <Row>
    <Col><div className=' m-2 p-5'>
                     <div>
                     <h1>
                        <strong>
                        CHOOSE YOUR DESIRE JWELLERIES

                        </strong>
                      </h1>
                      <p>The art of creating bamboo jewellery is a unique craft, usually done by highly skilled artisans. These handcrafted collections, made by splicing, weaving, and polishing bamboo and intertwining them with braided wire, adding silver, ruby, coral or turquoise stones, requires many hours of painstaking work.

                      </p>
                      {/* <Link to='/Appoinment'><Button variant="outline-dark" className='btn btn-secondary text-white button'>Make An Appoinment <i class="fas fa-arrow-right"></i></Button></Link> */}
                     </div>
                  </div></Col>
    <Col><Image src={image} fluid/></Col>
  </Row>
  
</Container>
        </div>
    );
};

export default Bannar;