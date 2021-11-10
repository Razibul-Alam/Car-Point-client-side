import React from 'react';
import Reviews from '../../../Users-Page/Reviews/Reviews';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Services/>
            <Reviews/>
            <Footer/>
        </div>
    );
};

export default Home;