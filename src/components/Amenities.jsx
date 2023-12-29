import React from "react";
import styled from "styled-components";
import { AMENITIES_ELEMENTS } from "../data";

const AmenitiesContainer = styled.div`
  padding: 20px 100px; /* Adjusted padding for mobile and tablet */
  @media (max-width: 768px) {
    /* Adjusted styles for screens smaller than 768px (e.g., mobile) */
    padding: 20px 10px; /* Adjusted padding for mobile and tablet */
    width: 100%;
  }
`;

const Title = styled.h1`
  text-align: left;
  font-size: var(--h1-font-size);
`;

const CardContainer = styled.div`
  margin: auto;
  width: 75%;
  padding: 26px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  justify-content: center;

  @media (max-width: 768px) {
    /* Adjusted styles for screens smaller than 768px (e.g., mobile) */
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    width: 100%;
    padding: 10px;
  }
`;

const Card = styled.div`
  position: relative;
  width: 200px;
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

  @media (max-width: 768px) {
    /* Adjusted styles for screens smaller than 768px (e.g., mobile) */
    width: 100%;
  }

  &:hover::before {
    content: "";
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
    font-size: 1.5rem;
    font-weight: bold;
    text-align: center;
    z-index: 1;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    background-position: center;
  }

  .itemName {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    font-weight: bold;
    color: transparent;
  }

  &:hover .itemName {
    color: white;
  }
`;

const Amenities = () => {
  return (
    <AmenitiesContainer>
      <Title>AMENITIES</Title>
      <CardContainer>
        {AMENITIES_ELEMENTS.map((item) => {
          return (
            <Card key={item.id}>
              <img src={`${item.image}`} alt={`${item.name}`} />
              <div className="itemName">{item.name}</div>
            </Card>
          );
        })}
      </CardContainer>
    </AmenitiesContainer>
  );
};

export default Amenities;

// import React from "react";
// import styled from "styled-components";
// import { AMENITIES_ELEMENTS } from "../data";

// const AmenitiesContainer = styled.div`
//   padding: 50px;
// `;

// const Title = styled.h1`
//   color: var(--main-shade);
//   text-align: left;
// `;

// const CardContainer = styled.div`
//   margin: auto;
//   width: 75%;
//   padding: 36px;
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: center;
//   align-items: center;
//   gap: 2rem;
// `;

// const Card = styled.div`
//   width: 200px;
//   height: 250px;
//   margin: 0.5rem;
//   padding: 10px;
//   border: 1px solid #ccc;
//   border-radius: 10px;
//   box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.15);
//   display: flex;
//   flex-direction: column;
//   gap: 0.8rem;
//   justify-content: center;
//   align-items: center;
//   cursor: pointer;
//   perspective: 1000px; /* Define the perspective for the 3D effect */

//   &:hover {
//     transform: rotateY(180deg); /* Rotate the card on hover */
//   }
// `;

// const CardFront = styled.div`
//   width: 100%;
//   height: 100%;
//   img {
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//     border-radius: 10px;
//   }
// `;

// const Text = styled.div`
//   padding: 8px;
//   font-size: large;
//   font-weight: bolder;
//   text-align: center;
// `;

// const CardBack = styled.div`
//   width: 100%;
//   height: 100%;
//   transform: rotateY(180deg); /* Initially hide the back of the card */
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   background-color: #fff;
//   border-radius: 10px;
//   position: absolute;
//   top: 0;
//   left: 0;

//   ${Text} {
//     /* Apply styling to the text on the back of the card */
//     padding: 8px;
//     font-size: large;
//     font-weight: bolder;
//     text-align: center;
//   }
// `;

// const Amenities = () => {
//   return (
//     <AmenitiesContainer>
//       <Title>Amenities</Title>
//       <CardContainer>
//         {AMENITIES_ELEMENTS.map((item) => {
//           return (
//             <Card key={item.id}>
//               <CardFront>
//                 <img src={`${item.image}`} alt={`${item.name}`} />
//               </CardFront>
//               <CardBack>
//                 <Text>{item.name}</Text>
//               </CardBack>
//             </Card>
//           );
//         })}
//       </CardContainer>
//     </AmenitiesContainer>
//   );
// };

// export default Amenities;
