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



export default StreetView;

const Container = styled.div`
padding: 20px 100px;
.slick-track {
    display: flex;
}
h1{
    text-align: center;
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


