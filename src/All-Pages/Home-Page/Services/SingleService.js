import React from 'react';
import {Button,Card,Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const SingleService = ({service}) => {
    const{_id,img,title,descripton,price}=service;
    return (
      <Col>
      <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
           {descripton}
          </Card.Text>
          <div className="d-flex justify-content-between align-items-center">
          <Link to={`/order/${_id}`}><Button>Buy Now</Button></Link>
          <h5 className="text-success">Price: ${price}</h5>
          </div>
        </Card.Body>
        
      </Card>
    </Col>
    );
};

export default SingleService;