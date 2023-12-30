// Amenities.jsx
import React, { useState } from 'react';
import styled from 'styled-components';
import { AMENITIES_ELEMENTS } from '../data';
import ContactForm from './ContactForm';

const Amenities = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const openForm = () => {
    setIsFormVisible(true);
  };

  return (
    <AmenitiesContainer id="amenities">
      <Title>AMENITIES</Title>
      <CardContainer>
        {AMENITIES_ELEMENTS.map((item) => (
          <Card key={item.id}>
            <CardImage src={`${item.image}`} alt={`${item.name}`} />
            <div className="itemName">{item.name}</div>
          </Card>
        ))}
      </CardContainer>
      <ButtonContainer>
        <Button onClick={openForm}>Open Form</Button>
        {isFormVisible && <ContactForm onClose={() => setIsFormVisible(false)} />}
      </ButtonContainer>
    </AmenitiesContainer>
  );
};

const AmenitiesContainer = styled.div`
  padding: 20px 5vw 25px; 
  margin: 25px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  color: var(--main-shade);
  text-align: center;
  font-size: var(--large-font-size); 
`;

const CardContainer = styled.div`
  margin: auto;
  width: 75%;
  padding: 26px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 1rem;
  @media (max-width: 768px) {
    width: 90%; 
    padding: 16px;
  }
`;

const Card = styled.div`
  position: relative;
  width: 100%;
  height: 250px;
  margin: 0.5rem;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  cursor: pointer;
  transition: all 500ms ease-in;
  background-color: #fff;

  &:hover::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 1rem;
    font-weight: bold;
    text-align: center;
    z-index: 1;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    background-position: center;

    @media (max-width: 768px) {
      object-fit: contain;
    }
  }

  .itemName {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    font-weight: bold;
    color: transparent;
    font-size: 1rem;
    text-align: justify;
  }

  &:hover .itemName {
    color: white;
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-position: center;

  @media (max-width: 768px) {
    object-fit: contain;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const Button = styled.button`
  border-radius: 28px;
  color: #ffffff;
  font-size: 1rem;
  background: #7065f0;
  padding: 15px 30px;
  text-decoration: none;
  border: none;
  cursor: pointer;
`;

export default Amenities;
