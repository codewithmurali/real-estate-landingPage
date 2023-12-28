import React from "react";
import styled from "styled-components";
import { KEY_FEATURES } from "../data";

const Title = styled.h1`
  color: var(--main-shade);
  text-align: center;
`;

const FeatureContainer = styled.div`
  margin: auto;
  width: 80%;
  padding: 36px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); /* Adjust the minimum and maximum width for responsiveness */
  gap: 20px; /* Adjust the gap according to your design */
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    padding: 20px; /* Adjust padding for smaller screens */
  }
`;

const Feature = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  align-items: center;
  gap: 10px;
  position: relative;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.15);

  @media (max-width: 768px) {
    height: 80px; /* Adjust height for smaller screens */
  }
`;

const Circle = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 1px solid #ccc;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.15);
  position: absolute;
  left: -30px;
  background-color: var(--secondary-color);
  z-index: 2;

  @media (max-width: 768px) {
    width: 40px; /* Adjust width for smaller screens */
    height: 40px; /* Adjust height for smaller screens */
    left: -20px; /* Adjust position for smaller screens */
  }
`;

const TextContainer = styled.div`
  text-align: center;
  width: 100%;
  padding: 0px 20px;

  @media (max-width: 768px) {
    font-size: 14px; /* Adjust font size for smaller screens */
  }
`;

const KeyFeatures = () => {
  return (
    <div>
      <Title>What makes us Different</Title>

      <FeatureContainer>
        {KEY_FEATURES.map((item) => {
          return (
            <Feature key={item.id}>
              <Circle></Circle>
              <TextContainer>{item.feature}</TextContainer>
            </Feature>
          );
        })}
      </FeatureContainer>
    </div>
  );
};

export default KeyFeatures;
