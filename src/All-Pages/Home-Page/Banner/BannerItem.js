
import React from 'react';
import { Link } from 'react-router-dom';

const BannerItem = () => {
    return (
        <main style={{height:'500px'}} className="row d-flex align-items-center bg-dark text-light">
        <div className="col-md-4 offset-md-1">
            <h1 className='text-primary'>FEEL THE WORLD <br/>FROM HEART</h1>
            <p className="text-light">
               We are ready to fly with you.Book a ticket and fly with us.Also feel the earth from deep.
               We are ready to fly with you.Book a ticket and fly with us.Also feel the earth from deep.
            </p>
            <Link to ="/adventures"><button className="btn btn-primary">Buy NOW</button></Link>
        </div>
        <div className="col-md-7">
            <img src='https://i.ibb.co/QX7htmz/pajero.jpg' alt="" className="img-fluid"/>
        </div>
    </main>
    );
};

export default BannerItem;