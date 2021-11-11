import React,{useState,useEffect} from 'react';
import useAuth from './../../Hooks/useAuth';
import MySingleOrder from './MySingleOrder';
import { Row } from 'react-bootstrap';
import axios from 'axios'

const MyOrders = () => {
    const[myOrders,setMyOrders]=useState()
    const{user}=useAuth()
    // load all orders
    useEffect(()=>{
        axios.get(`http://localhost:5000/getOrdersByEmail?email=${user?.email}`)
        .then(res => {
          const allOrders = res.data;
        //   console.log(allBookings)
          setMyOrders(allOrders)
          
        })
    },[myOrders])

    return (
        <>
        {/* <ModalMessage show={show} setShow={setShow} message={'Succesfully deleted'} /> */}
        <div className='container w-75 my-5'>
            <h2 className='text-center text-danger mb-5'>The number of bookings {myOrders?.length}</h2>
            <Row xs={1} md={3} className="g-4">
           {myOrders?.map(order=><MySingleOrder order={order} key={order._id}/>)}
           </Row>
        </div>
        </>
    );
};

export default MyOrders;