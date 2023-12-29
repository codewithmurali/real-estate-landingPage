import React from "react";
import styled from "styled-components";
import { KEY_FEATURES } from "../data";
import BackgroundImage from '../assets/bg-2.png';

const Container = styled.div`
  position: relative;
  overflow: hidden;
  background-image: url(${BackgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

const Title = styled.h1`
  position: relative;
  color: white;
  margin: 10px 0;
  text-align: center;
  z-index: 3; 
  font-size: var(--large-font-size);
`;

const FeatureContainer = styled.div`
  position: relative;
  margin: auto;
  width: 85%;
  padding: 100px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  z-index: 2;

  @media (max-width: 768px) {
    padding: 20px;
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
  cursor: pointer;
  background-color: #fff;

  @media (max-width: 768px) {
    height: 80px;
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
    transition: all 300ms ease-in;
  }

  &:hover .text {
    color: #fff;
  }

  &:hover .ag-courses-item_bg {
    transform: scale(10);
  }
`;

const TextContainer = styled.div`
  text-align: center;
  width: 80%;
  margin: auto;
  font-size: 14px;
  padding: 0 20px;
  z-index: 2;
  font-weight: 550;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const KeyFeatures = () => {
  return (
    <Container>
      <Overlay />
      <Title>What makes us Different</Title>
      <FeatureContainer>
        {KEY_FEATURES.map((item) => (
          <Feature key={item.id}>
            <div className="ag-courses-item_bg"></div>
            <TextContainer className="text">{item.feature}</TextContainer>
          </Feature>
        ))}
      </FeatureContainer>
    </Container>
  );
};

export default KeyFeatures;

