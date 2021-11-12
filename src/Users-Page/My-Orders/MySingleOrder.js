import React from 'react';
import {Button,Col,Card} from 'react-bootstrap'
import axios from 'axios';

const MySingleOrder = ({order,cancelOrder}) => {
    const{_id,title,status,name,address,phone}=order;
  
    // booking approve handle
    const approveBooking=(id)=>{
      const approval={status:'Approved',id:id}
axios.put('https://hidden-bayou-72012.herokuapp.com/updateStatus',approval)
.then((result)=>console.log(result))
    }
    return (
        <Col>
        <Card>
          <Card.Body className='text-center'> 
           <Card.Text className='text-danger'>
              {title}
            </Card.Text>
            <Card.Text className=''>
             booked by {name}
            </Card.Text>
            <Card.Text className='text-primary'>
             address: {address}
            </Card.Text>
            <Card.Text className='text-warning'>
             {status}
            </Card.Text>
            <Button onClick={()=>{cancelOrder(_id)}}>Cancel</Button>
          </Card.Body>
          
        </Card>
      </Col>
    );
};

export default MySingleOrder;