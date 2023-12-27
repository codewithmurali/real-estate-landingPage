import React from 'react';
import styled, { keyframes } from 'styled-components';
import Dove from '../assets/dove.png';

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
                <img src={Dove} alt="Dove" />
            </Left>
            <Right>
                <h1>About Us</h1>
                <p>
                    Discover the essence of elevated living through <span>K&L Life Spaces</span>, an integral subsidiary within the
                    esteemed <span>Nakshatra Builders</span> and <span>HavinHomes Realty family</span>. As specialists in property
                    development and construction, we redefine spaces into captivating narratives of modern luxury. Our unwavering
                    dedication to craftsmanship and innovation drives us to curate living experiences that transcend the ordinary.
                    With a solid foundation of expertise from our parent companies, we turn blueprints into realities, and
                    aspirations into addresses that resonate with sophistication. Join us in creating a future where each structure
                    we build is infused with passion, and every space becomes a testament to our commitment to crafting exceptional
                    lifestyles.
                </p>
            </Right>
        </StyledAboutUsSection>
    );
};

export default AboutUs;

const StyledAboutUsSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const Left = styled.div`
  flex: 1;

  img {
    width: 100%;
    animation: ${fadeInImage} 1s ease-in-out;
  }

  @media only screen and (max-width: 768px) {
    margin-bottom: 10px;

    img {
      width: 100%;
    }
  }
`;

const Right = styled.div`
  flex: 1;
  animation: ${fadeInRight} 1s ease-in-out;

  h1 {
    font-size: 36px;
    margin-bottom: 10px;
  }

  span {
    color: #7065f0;
    font-weight: bold;
  }

  @media only screen and (max-width: 768px) {
    font-size: 12px;
    animation: ${fadeInLeft} 1s ease-in-out;
  }
`;
