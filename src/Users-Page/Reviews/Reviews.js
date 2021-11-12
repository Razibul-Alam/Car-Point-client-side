import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { Row,Spinner } from 'react-bootstrap';
import SingleReview from './SingleReview';
const Reviews = () => {
    const [initialLoading,setInitialLoading]=useState(false)
    const[Reviews,setReviews]=useState([])

    useEffect(()=>{
        setInitialLoading(true)
        axios.get(`https://powerful-harbor-60466.herokuapp.com/allReviews`)
        .then(res => {
          const allReviews = res.data;
          // console.log(allAdventure)
          setReviews(allReviews)
          setInitialLoading(false)
          
        })
    },[])
    return (
        <>
        {initialLoading&&<div className='d-flex justify-content-center mt-5'><Spinner animation="border" variant="danger" role="status">
  <span className="visually-hidden">Loading...</span>
</Spinner></div>}
        <div className='my-5 container'>
        <h2 className='text-center text-success'>What Clients say</h2>
        <hr className='m-auto text-danger bolder w-25'/>
        <Row xs={1} md={3} className="g-4 mt-3">
           {Reviews?.map(review=><SingleReview review={review} key={review._id}/>)}
        </Row>
        </div>
        </>
    );
};

export default Reviews;