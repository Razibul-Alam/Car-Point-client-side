import React from 'react';
import {Button,Card,Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const SingleReview = ({review}) => {
    const{_id,name,description,rating}=review;
    return (
      <Col>
      <Card className='text-center'>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
           {description}
          </Card.Text>
          <Card.Text>
           {rating}<span className='text-warning'><FontAwesomeIcon icon={faStar}/></span>
          </Card.Text>
      
        </Card.Body>
        
      </Card>
    </Col>
    );
};

export default SingleReview;