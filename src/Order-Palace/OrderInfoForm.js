import React,{useState} from 'react';
import { useForm } from "react-hook-form";
import { Col, Row, Toast, Button} from 'react-bootstrap';
import axios from 'axios';

// import ToastMessage from '../Toast-message/ToastMessage';
import useAuth from './../Hooks/useAuth';
import ModalMessage from './../ModalMessage/ModalMessage';
const OrderInfoForm = ({info}) => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
    const{title,descripton}=info
    const{user}=useAuth()
    const { register,reset, handleSubmit,formState: { errors } } = useForm();
    const onSubmit = data =>{
        
        // console.log(data)
        const bookingInfo={
            title:title,
            email:user.email, 
            name:user.displayName,
            status:'Pending',
            address:data.address,
            phone:data.phone
        }
      axios.post('https://powerful-harbor-60466.herokuapp.com/addOrder',bookingInfo)
      .then(response =>{
          if(response.data.insertedId){
            handleShow()
            reset()
            
          }
        });
        
        
    }
    return (
        <>
         <ModalMessage show={show} setShow={setShow} message={'Succesfully order complete'} />
        <h5 className="text-center mb-3"><span className="text-danger">{user?.displayName}</span> please confirm your order</h5>
        <div className="mt-4 d-flex justify-content-center row">
         <div className="p-4 rounded col-lg-8 col-sm-10 shadow">
        {/* <ToastMessage toastShow={toastShow} setToastShow={setToastShow}></ToastMessage> */}
            <form onSubmit={handleSubmit(onSubmit)}>
    <input className="form-control mt-3" type="text" readOnly defaultValue={user?.email} {...register("email")} /> 
    <input className="form-control mt-3" type="text" readOnly defaultValue={user?.displayName} {...register("name")} />
    <input className="form-control mt-3" type="number" placeholder="Phone" {...register("phone",{ required: true })} />
    <input className="form-control mt-3" type="text" placeholder="Address" {...register("address",{ required: true }) } />
    {errors.exampleRequired && <span>This field is required</span>}
    <input className='form-control bg-primary mt-3' type="submit" value="Confirm Book"/>
  </form>
        </div>
        </div>
        </>
    );
};

export default OrderInfoForm;