import React,{useState} from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import useAuth from './../../Hooks/useAuth';
import ModalMessage from './../../ModalMessage/ModalMessage';
import RatingAPILayer from 'react-rating'
import { faStar} from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const GiveReview = () => {
  const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const[ratingCount,setRatingCount]=useState(0)
    const{user}=useAuth()
    const { register,reset, handleSubmit,formState: { errors } } = useForm();
    const onSubmit = data =>{
        
        // console.log(data)
        const bookingInfo={
            name:user?.displayName,
            description:data.description,
            rating:ratingCount,
        }
      axios.post('https://powerful-harbor-60466.herokuapp.com/addReview',bookingInfo)
      .then(response =>{
          if(response.data.insertedId){
            handleShow()
            reset()
            
          }
        });
        
        
    }
    const ratingHandle=(e)=>{
console.log(e)
setRatingCount(e)
    }

    return (
        <>
        
        <ModalMessage show={show} setShow={setShow} message={'Feedback Succesfully given'} />
        <div className="mt-4 d-flex justify-content-center row">
         <div className="p-4 my-4 rounded col-lg-8 col-sm-10 shadow">
        <h3 className='text-center text-primary'>Send a feedback</h3>
            <form onSubmit={handleSubmit(onSubmit)}> 
            <RatingAPILayer  emptySymbol={<FontAwesomeIcon icon={faStar} />}
  fullSymbol={<span className='text-warning'><FontAwesomeIcon icon={faStar} /></span>}
  initialRating={ratingCount}
   onClick={ratingHandle}/>
    <input className="form-control mt-3" type="text" readOnly defaultValue={user?.displayName} {...register("name")} />
    <input className="form-control mt-3" type="text" placeholder="description" {...register("description",{ required: true })} />
    {errors.exampleRequired && <span>This field is required</span>}
    <input className='form-control bg-primary mt-3' type="submit" value="Give Feedback"/>
  </form>
        </div>
        </div>
        </>
    );
};

export default GiveReview;