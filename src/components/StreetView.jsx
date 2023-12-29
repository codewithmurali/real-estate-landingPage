import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { streetViewData } from '../data';
import styled from 'styled-components';

const StreetView = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(streetViewData);
    }, []);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        centerMode: true,
        centerPadding: '20px',
        focusOnSelect: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <Container id="streetview">
            <Title>STREET VIEW</Title>
            <Slider {...settings}>
                {data.map((item, index) => (
                    <Image key={index}>
                        <img src={item.url} alt={item.name} />
                        <h3>{item.name}</h3>
                    </Image>
                ))}
            </Slider>
        </Container>
    );
};

const Container = styled.div`
  padding: 0 5vw; 
  margin: 25px 0;
  text-align: center;

  h1 {
    font-size: 2rem;
  }

  @media only screen and (max-width: 768px) {
    padding: 50px 5vw;
  }
`;

const Title = styled.h1`
  font-size: var(--large-font-size);
  color: var(--main-shade);
`;

const Image = styled.div`
  display: inline-block;
  position: relative;
  text-align: center;
  cursor: pointer;
  padding: 20px;
  width: 100%;

  img {
    width: 100%;
    height: 350px;
    object-fit: cover;
    border-radius: 16px;
  }

  h3 {
    margin-top: 10px;
  }
`;

export default StreetView;
