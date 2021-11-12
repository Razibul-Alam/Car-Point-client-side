import React,{useEffect,useState} from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import { Card } from 'react-bootstrap';
import OrderDetails from './OrderDetails';
import OrderInfoForm from './OrderInfoForm';
const OrderPalace = () => {
    const[singleItem,setSingleItem]=useState({})
    const{orderId}=useParams()
    console.log(orderId,singleItem)
    useEffect(()=>{
        axios.get(`https://powerful-harbor-60466.herokuapp.com/singleItem/${orderId}`)
        .then(res => {
          const item= res.data;
          setSingleItem(item[0])
          
        })
    },[])
    console.log(singleItem)
    return (
        <div className='row justify-content-center align-items-center my-5'>
        <div className='col-lg-6 '>
          <div className='d-flex justify-content-center'>
         <OrderDetails details={singleItem}/>
          </div>
        </div>
        <div className='col-lg-6'>
<OrderInfoForm info={singleItem}/>
        </div>
        </div>
    );
};

export default OrderPalace;