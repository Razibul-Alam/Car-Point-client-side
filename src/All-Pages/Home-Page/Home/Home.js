import React from 'react';
import AboutMain from '../../../About-Page/AboutMain';
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
            <AboutMain/>
            <Reviews/>
            <Footer/>
        </div>
    );
};

export default Home;