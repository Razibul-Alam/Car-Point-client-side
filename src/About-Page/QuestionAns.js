import React from 'react';
import { Accordion } from 'react-bootstrap';

const QuestionAns = ({faq}) => {
  const{question,ans,id}=faq;
    return (
        <div>
        
  <Accordion.Item eventKey={id}>
    <Accordion.Header>{question}</Accordion.Header>
    <Accordion.Body>
     {ans}
    </Accordion.Body>
  </Accordion.Item>
        </div>
    );
};

export default QuestionAns;