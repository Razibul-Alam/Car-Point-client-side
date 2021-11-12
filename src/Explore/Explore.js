import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { Row,Spinner } from 'react-bootstrap';
import SingleService from './../All-Pages/Home-Page/Services/SingleService';

const Explore = () => {
    const [initialLoading,setInitialLoading]=useState(false)
    const[Explore,setExplore]=useState([])

    useEffect(()=>{
        setInitialLoading(true)
        axios.get(`https://powerful-harbor-60466.herokuapp.com/allcars`)
        .then(res => {
          const allExplore = res.data;
          // console.log(allAdventure)
          setExplore(allExplore)
          setInitialLoading(false)
          
        })
    },[])
    return (
        <>
        {initialLoading&&<div className='d-flex justify-content-center mt-5'><Spinner animation="border" variant="danger" role="status">
  <span className="visually-hidden">Loading...</span>
</Spinner></div>}
        <div className='my-5 container'>
        <h2 className='text-center text-success'>Our All Products</h2>
        <hr className='m-auto text-danger bolder w-25'/>
        <Row xs={1} md={3} className="g-4 mt-3">
           {Explore?.map(service=><SingleService service={service} key={service._id}/>)}
        </Row>
        </div>
        </>
    );
};

export default Explore;