import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FloorImages } from '../data';

const FloorSection = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  justify-content: center;
  padding: 20px 5vw;
  margin: 25px 0;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
  }
`;

const LeftDiv = styled.div`
  h1 {
    font-size: 2rem;
    margin-bottom: 10px;
    color: var(--primary-color);
    text-align: left;
  }

  p {
    line-height: 1.5;
    text-align: justify;
  }
`;

const RightDiv = styled.div`
  display: flex;
  justify-content: center;

  h3{
    text-align: center;
  }
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: flex-end;
  }
`;

const Carousel = styled(Slider)`
  width: 100%;
  max-width: 400px;
  height: auto;
  overflow: hidden;
  background-color: #f9f5f2;

  .slick-track {
    display: flex;
  }

  .slick-slide {
    flex: 0 0 auto;
    margin: 0 5px;
    outline: none;
    border: none;
  }

  img {
    width: 100%;
    height: auto;
    object-fit: contain;
  }

  .slick-prev,
  .slick-next {
    font-size: 24px;
    color: #333;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  &::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;
`;

const Floor = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <FloorSection id="floor" role="region" aria-label="Floor Section">
      <LeftDiv role="region" aria-label="Left Content">
        <h1>SRICITY</h1>
        <h1>Villa Floor Plan</h1>
        <p>
          Located in the tranquil and picturesque locale of Tada, our
          western-facing villas redefine the art of luxurious living. Each
          villa is a masterpiece of thoughtful design, meticulously crafted to
          offer you an exclusive range of 3BHK and 4BHK residences, set on
          expansive 30x50 plots. With Sricity on your doorstep, these villas are
          a testament to prosperity and a future where elegance seamlessly
          intertwines with comfort. Every villa is a sanctuary of space, adorned
          with top-notch amenities and opulent interiors, promising you the
          epitome of luxurious living.
        </p>
      </LeftDiv>
      <RightDiv role="region" aria-label="Image Carousel">
        <Carousel {...settings}>
          {FloorImages.map((item, index) => (
            <div key={index}>
              <img
                src={item.image}
                alt={`Floor Image ${index}`}
                role="presentation"
              />
              <h3>{item.name}</h3>
            </div>
          ))}
        </Carousel>
      </RightDiv>
    </FloorSection>
  );

};

export default Floor;
