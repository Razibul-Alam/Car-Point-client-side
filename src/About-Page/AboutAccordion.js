import React from 'react';
import { Accordion } from 'react-bootstrap';
import QuestionAns from './QuestionAns';
const questionAndAns=[
    {
        id:1,question:'Why you chose us?',
        ans:'We are selling car a long time. We have more experience about car.'
    },
    {
        id:2,question:'Can we solve your problem?',
        ans:'Yes, you can get any solution about car.'
    },
    {
        id:3,question:'Is recondition car good?',
        ans:'Yes it is good most of the time.If you are not unlucky'
    },
    {
        id:4,question:'Can you get discount on product?',
        ans:'You can get discount. But amount of discount depends on your facilities'
    },
]

const AboutAccordion = () => {
    return (
        <>
        <h5 className='text-center text-primary mb-3'>Ask Something</h5>
        <div className='container mb-3'>

            <Accordion defaultActiveKey="0" flush>
            {questionAndAns?.map(faq=><QuestionAns key={faq.id} faq={faq}/>)}
            </Accordion>
        </div>
        </>
    );
};

export default AboutAccordion;