import React, { useState } from 'react';
import styled from 'styled-components';
import { faqData } from '../data';

const FAQSection = styled.div`
  width: 100%;
  height: 100%;

  h1{
    text-align: center;
  }
`;

const FAQWrapper = styled.div`
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  background-color: var(--secondary-color);
    

`;

const FAQItem = styled.div`
  margin-bottom: 20px;
`;

const Question = styled.div`
  font-weight: bold;
  cursor: pointer;
  padding: 10px;
  background-color: white;
  color: ${(props) => (props.active ? 'var(--accent-color)' : 'black')};
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: background-color 200ms ease-in-out;
`;

const Answer = styled.div`
  margin-top: 10px;
  display: ${(props) => (props.visible ? 'block' : 'none')};
  padding: 10px;
  border-top: 1px solid #ddd;
  transition: display 200ms ease-in-out, opacity 300ms ease-in-out;
`;

const Arrow = styled.span`
  font-size: 16px;
  margin-left: 10px;
  transform: ${(props) => (props.active ? 'rotate(180deg)' : 'rotate(0)')};
  transition: transform 200ms ease-in-out;
`;

const FAQ = () => {
    const [activeQuestions, setActiveQuestions] = useState([]);

    const toggleQuestion = (index) => {
        setActiveQuestions((prev) =>
            prev.includes(index) ? prev.filter((item) => item !== index) : [...prev, index]
        );
    };

    return (
        <FAQSection>
            <h1>Frequently Asked Questions</h1>
            <FAQWrapper>
                {faqData.map((faq, index) => (
                    <FAQItem key={index}>
                        <Question onClick={() => toggleQuestion(index)} active={activeQuestions.includes(index)}>
                            {faq.question}
                            <Arrow active={activeQuestions.includes(index)}>▼</Arrow>
                        </Question>
                        <Answer visible={activeQuestions.includes(index)}>{faq.answer}</Answer>
                    </FAQItem>
                ))}
            </FAQWrapper>
        </FAQSection>
    );
};

export default FAQ;
