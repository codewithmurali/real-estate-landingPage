

import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { streetViewData } from '../data';
import styled from 'styled-components';

// Import left and right arrow icons
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

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
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
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
        <Container>
            <h1>STREET VIEW</h1>
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

const ArrowIcon = styled.div`
  position: absolute;
  font-size: 24px;
  color: red;
  cursor: pointer;
  top: 50%;
  transform: translateY(-50%);
`;

const NextArrow = ({ onClick }) => (
    <ArrowIcon style={{ right: 0 }} onClick={onClick}>
        <IoIosArrowForward />
    </ArrowIcon>
);

const PrevArrow = ({ onClick }) => (
    <ArrowIcon style={{ left: 0 }} onClick={onClick}>
        <IoIosArrowBack />
    </ArrowIcon>
);


export default StreetView;

const Container = styled.div`
padding: 20px 100px;
.slick-track {
    display: flex;
}
h1{
    text-align: right;
}
@media only screen and (max-width: 768px) {
      padding: 50px ;
      h1{
        text-align: center;
      }
  }
`;

const Image = styled.div`
  display: inline-block;
  position: relative;
  text-align: center;
  cursor: pointer;
  padding: 20px;

  img {
    width: 100%;
    height: 250px;
    object-fit: cover;
    border-radius: 16px;
  }
`;


