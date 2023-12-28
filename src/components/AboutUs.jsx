import React from 'react';
import styled, { keyframes } from 'styled-components';
import Image1 from '../assets/image 1.jpg';
import '../index.css'

const fadeInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const fadeInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const fadeInImage = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const AboutUs = () => {
  return (
    <StyledAboutUsSection>
      <Left>
        <Image>
          <img src={Image1} alt="Dove" />
        </Image>
      </Left>
      <Right>
        <h1>About Us</h1>
        <p>
          Experience elevated living with <span>K&L Life Spaces</span>, a subsidiary of <span>Nakshatra Builders</span> and{' '}
          <span>HavinHomes Realty</span>. We specialize in crafting modern luxury living spaces, transforming blueprints into
          realities that resonate with sophistication. Join us in creating a future where every structure is infused with
          passion, and every space reflects our commitment to crafting exceptional lifestyles.
        </p>
      </Right>
    </StyledAboutUsSection>
  );
};

const StyledAboutUsSection = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 20px; 
  align-items: center;
  padding: 50px;
  background-color: var(--secondary-color); /* Use variable for background color */

  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    row-gap: 20px;
    text-align: center;
  }
`;

const Left = styled.div`
  img {
    border-radius: 10px;
    width: 100%;
    animation: ${fadeInImage} 1s ease-in-out;
  }
`;

const Right = styled.div`
  h1 {
    font-size: var(--h1-font-size); 
    margin-bottom: 10px;
    color: var(--primary-color);
  }

  span {
    color: var(--accent-color);
    font-weight: bold;
  }

  @media only screen and (max-width: 768px) {
    font-size: var(--small-font-size); 
    animation: ${fadeInLeft} 1s ease-in-out;
  }
`;

const Image = styled.div`
  width: 100%;
`;

export default AboutUs;
