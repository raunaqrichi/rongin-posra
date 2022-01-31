import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';


const About = () => {
    const image = ['https://image.shutterstock.com/image-photo/stock-vector--earring-designs-cutout-jewellery-with-exotic-plants-bamboo-palm-rope-chain-450w-1619849812.jpg']
    return ( 
        <div className='my-3'>
            <Container>
  <Row>
   
    <Col><Image src={image} fluid/></Col>
    <Col><div className=' m-2 p-5'>
                     <div>
                     <h1>
                        <strong>
                        About Bamboo jewellery

                        </strong>
                      </h1>
                      <p>The art of creating bamboo jewellery is a unique craft, usually done by highly skilled artisans. These handcrafted collections, made by splicing, weaving, and polishing bamboo and intertwining them with braided wire, adding silver, ruby, coral or turquoise stones, requires many hours of painstaking work.

                      </p>
                     </div>
                  </div></Col>
  </Row>
  
</Container>
        </div>
    );
};

export default About;