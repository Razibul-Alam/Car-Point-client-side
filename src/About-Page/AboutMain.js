import React from 'react';
import AboutAccordion from './AboutAccordion';
import AboutInfo from './AboutInfo';

const AboutMain = () => {
    return (
        <div className='container'>
        <div className='row my-5'> 
            <div className='col-lg-6'>  
            <AboutInfo/>   
        </div>
        <div className='col-lg-6'>   
        <AboutAccordion/>  
        </div>    
        </div>
        </div>
    );
};

export default AboutMain;