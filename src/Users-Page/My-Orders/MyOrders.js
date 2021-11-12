import React,{useState,useEffect} from 'react';
import useAuth from './../../Hooks/useAuth';
import MySingleOrder from './MySingleOrder';
import { Row } from 'react-bootstrap';
import axios from 'axios'
import ModalMessage from './../../ModalMessage/ModalMessage';

const MyOrders = () => {
    const[myOrders,setMyOrders]=useState()
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const{user}=useAuth()
    // load all orders
    useEffect(()=>{
        axios.get(`https://powerful-harbor-60466.herokuapp.com/getOrdersByEmail?email=${user?.email}`)
        .then(res => {
          const allOrders = res.data;
        //   console.log(allBookings)
          setMyOrders(allOrders)
          
        })
    },[myOrders])

       // cancel booking
       const cancelOrder=(_id)=>{
        const confirmDelete=window.confirm('Are you sure? Do you want to remove?')
        if(confirmDelete){
         axios.delete(`https://powerful-harbor-60466.herokuapp.com/removeItem/${_id}`)
         .then((result) =>{if(result.data.deletedCount>0){
 const remainingItems=myOrders?.filter(booking=>!booking._id==_id)
 handleShow()
 setMyOrders(remainingItems)
         }});
        }
       }

    return (
        <>
        <ModalMessage show={show} setShow={setShow} message={'Succesfully deleted'} />
        <div className='container w-75 my-5'>
            <h2 className='text-center text-danger mb-5'>The number of Orders {myOrders?.length}</h2>
            <Row xs={1} md={3} className="g-4">
           {myOrders?.map(order=><MySingleOrder order={order} key={order._id} cancelOrder={cancelOrder}/>)}
           </Row>
        </div>
        </>
    );
};

export default MyOrders;