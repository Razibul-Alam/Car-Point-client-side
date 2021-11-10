import React from 'react';
import { Card } from 'react-bootstrap';

const OrderDetails = ({details}) => {
    const {_id,title,price,descripton,img}=details
    return (
        <div>
             <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
           {descripton}
          </Card.Text>
          <div className="d-flex justify-content-between align-items-center">
          <h5 className="text-success">Price: ${price}</h5>
          </div>
        </Card.Body>
        
      </Card> 
        </div>
    );
};

export default OrderDetails;