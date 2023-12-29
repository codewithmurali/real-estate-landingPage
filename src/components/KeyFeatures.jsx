import React from "react";
import styled from "styled-components";
import { KEY_FEATURES } from "../data";

const Title = styled.h1`
  color: var(--main-shade);
  text-align: center;
`;

const FeatureContainer = styled.div`
  margin: auto;
  width: 85%;
  padding: 36px;
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(300px, 1fr)
  ); /* Adjust the minimum and maximum width for responsiveness */
  gap: 2rem; /* Adjust the gap according to your design */
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    padding: 20px; /* Adjust padding for smaller screens */
  }
`;

const Feature = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  position: relative;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  @media (max-width: 768px) {
    height: 80px; /* Adjust height for smaller screens */
  }

  .ag-courses-item_bg {
    height: 128px;
    width: 128px;
    background-color: #7065f0;
    z-index: 1;
    position: absolute;
    top: -90px;
    left: -90px;
    border-radius: 350px;
    -webkit-transition: all 0.5s ease;
    -o-transition: all 0.5s ease;
    transition: all 0.5s ease;
  }
  &:hover .text {
    color: #fff;
  }

  &:hover .ag-courses-item_bg {
    -webkit-transform: scale(10);
    -ms-transform: scale(10);
    transform: scale(10);
  }
`;

const TextContainer = styled.div`
  text-align: center;
  width: 80%;
  margin: auto;
  font-size: 14px;
  padding: 0px 20px;
  z-index: 2;
  font-weight: 550;
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
              <div class="ag-courses-item_bg"></div>
              <TextContainer className="text">{item.feature}</TextContainer>
            </Feature>
          );
        })}
      </FeatureContainer>
    </div>
  );
};

export default KeyFeatures;
