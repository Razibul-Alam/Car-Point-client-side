
import React from 'react';
import { Link } from 'react-router-dom';

const BannerItem = () => {
    return (
        <main style={{height:'500px'}} className="row d-flex align-items-center bg-dark text-light">
        <div className="col-md-4 offset-md-1">
            <h1 className='text-primary'>TAKE ORDER<br/>BECOME WONER</h1>
            <p className="text-light">
            You can become a car woner taking order. Dream will be true now.
            You can become a car woner taking order. Dream will be true now.
            </p>
            <Link to ="/adventures"><button className="btn btn-primary">Buy Now</button></Link>
        </div>
        <div className="col-md-7">
            <img src='https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2FyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' alt="" className="img-fluid"/>
        </div>
    </main>
    );
};

export default BannerItem;