import React from "react";
import styled from "styled-components";
import { AMENITIES_ELEMENTS } from "./constants/constant.js";

const AmenitiesContainer = styled.div`
  padding: 50px;
`;

const Title = styled.h1`
  color: var(--main-shade);
  text-align: center;
`;

const CardContainer = styled.div`
  margin: auto;
  width: 75%;
  padding: 36px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 2rem; 
`;

const Card = styled.div`
  width: 280px;
  height: 370px;
  margin: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  justify-content: center;
  align-items: center;
`;

const Text = styled.div`
  padding: 8px;
  font-size: large;
  font-weight: bolder;
  text-align: center;
`;

const image = styled.img`
  padding: 8px;
  border-radius: 10px 10px 0px 0px;
`;

const Amenities = () => {
  return (
    <AmenitiesContainer>
      <Title>Amenities</Title>
      <CardContainer>
        {AMENITIES_ELEMENTS.map((item) => {
          return (
            <Card key={item.id}>
              <image src={`~${item.image}`} alt={`${item.name}`} />
              <Text>{item.name}</Text>
            </Card>
          );
        })}
      </CardContainer>
    </AmenitiesContainer>
  );
};

export default Amenities;
