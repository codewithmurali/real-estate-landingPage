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
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 3rem;
`;

const Feature = styled.div`
  width: 600px;
  height: 60px;
  margin-inline: 3rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.15);
`;

const Circle = styled.div`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  border: 1px solid #ccc;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.15);
  position: absolute;
  left: -40px;
  background-color: var(--secondary-color);
  z-index: 2;
`;

const TextContainer = styled.div`
  text-align: center;
  width: 80%;
 

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