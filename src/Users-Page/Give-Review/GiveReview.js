import React,{useState} from 'react';
import { useForm } from "react-hook-form";
import { Col, Row, Toast, Button} from 'react-bootstrap';
import axios from 'axios';
import useAuth from './../../Hooks/useAuth';
import ModalMessage from './../../ModalMessage/ModalMessage';

const GiveReview = () => {
  const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const{user}=useAuth()
    const { register,reset, handleSubmit,formState: { errors } } = useForm();
    const onSubmit = data =>{
        
        // console.log(data)
        const bookingInfo={
            name:user?.displayName,
            description:data.description,
            // email:user.email, 
            // name:user.displayName,
            rating:data.rating,
        }
      axios.post('https://powerful-harbor-60466.herokuapp.com/addReview',bookingInfo)
      .then(response =>{
          if(response.data.insertedId){
            handleShow()
            reset()
            
          }
        });
        
        
    }
    return (
        <>
        <ModalMessage show={show} setShow={setShow} message={'Feedback Succesfully given'} />
        <div className="mt-4 d-flex justify-content-center row">
         <div className="p-4 rounded col-lg-8 col-sm-10 shadow">
        
            <form onSubmit={handleSubmit(onSubmit)}> 
    <input className="form-control mt-3" type="text" readOnly defaultValue={user?.displayName} {...register("name")} />
    <input className="form-control mt-3" type="text" placeholder="description" {...register("description",{ required: true })} />
    <input className="form-control mt-3" type="number" placeholder="Rating" {...register("rating",{ required: true })} />
    {errors.exampleRequired && <span>This field is required</span>}
    <input className='form-control bg-primary mt-3' type="submit" value="Give Feedback"/>
  </form>
        </div>
        </div>
        </>
    );
};

export default GiveReview;