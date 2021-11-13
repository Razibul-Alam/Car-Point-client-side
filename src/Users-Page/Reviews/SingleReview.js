import React from 'react';
import {Card,Col} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import RatingAPILayer from 'react-rating';
import { faStar } from '@fortawesome/free-regular-svg-icons';



const SingleReview = ({review}) => {
    const{_id,name,description,rating}=review;
    return (
      <Col>
      <Card className='text-center'>
        <Card.Body>
          <Card.Title className='text-primary'>{name}</Card.Title>
          <Card.Text>
           {description}
          </Card.Text>
          <Card.Text>
             <RatingAPILayer  emptySymbol={<FontAwesomeIcon icon={faStar} />}
  fullSymbol={<span ><FontAwesomeIcon icon={faStar} className='text-warning'/></span>}
  initialRating={rating}
  readonly/>
          </Card.Text>
      
        </Card.Body>
        
      </Card>
    </Col>
    );
};

export default SingleReview;