// CardGrid.jsx
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ReactCardFlip from 'react-card-flip';
import { cardData } from '../data';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 20px auto;
  width: 100%;
  padding: 20px;
  max-width: 1200px; /* Adjust max-width as needed for your design */
`;

const Card = styled.div`
  width: 300px;
  height: 300px;
  margin: 10px 0px;
  text-align: center;
  padding: 5px;
  cursor: pointer;

  @media screen and (max-width: 992px) {
    width: 200px; /* Two cards per row on tablets */
    margin: 10px;
  }

  @media screen and (max-width: 480px) {
    width: calc(100% - 20px); /* One card per row on mobile devices */
  }
`;


const Content = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
`;

const Face = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  border-radius: 5px;
`;

const Front = styled(Face)`
  background: white;
  color: #03446a;
`;

const Back = styled(Face)`
  background: var(--accent-color);
  color: white;
  padding: 20px;
  p{
    font-size: 16px;
  }
`;

const LoadMoreButton = styled.button`
  margin-top: 20px;
  font-size: 16px;
  cursor: pointer;
  display: ${(props) => (props.show ? 'block' : 'none')};
  margin: 20px auto;
  border: none;
  border-radius: 28px;
  color: #ffffff;
  background: #7065f0;
  padding: 15px 30px;
  text-decoration: none;
  cursor: pointer;
  margin-bottom: 10px;
`;

const CardGrid = () => {
    const [showMore, setShowMore] = useState(false);
    const [flipped, setFlipped] = useState([]);
    const [visibleCards, setVisibleCards] = useState(8); // Set to 8 initially for desktop

    useEffect(() => {
        setFlipped(Array(cardData.length).fill(false));
    }, []);

    const handleLoadMore = () => {
        setShowMore(!showMore);
        setVisibleCards((prev) => (showMore ? 8 : prev + 8)); // Show 8 cards at a time
    };

    const handleCardClick = (index) => {
        setFlipped((prev) => {
            const newFlipped = [...prev];
            newFlipped[index] = !newFlipped[index];
            return newFlipped;
        });
    };

    return (
        <>
            <Container>
                {cardData.slice(0, visibleCards).map((card, index) => (
                    <ReactCardFlip key={card.id} isFlipped={flipped[index]} flipDirection="horizontal">
                        <Card onClick={() => handleCardClick(index)}>
                            <Content>
                                <Front>
                                    <h2>{card.front.title}</h2>
                                    <p>{card.front.description}</p>
                                </Front>
                            </Content>
                        </Card>
                        <Card onClick={() => handleCardClick(index)}>
                            <Content>
                                <Back>
                                    <h2>{card.back.title}</h2>
                                    <p>{card.back.description}</p>
                                </Back>
                            </Content>
                        </Card>
                    </ReactCardFlip>
                ))}
            </Container>
            <LoadMoreButton
                show={cardData.length > 0 && (showMore || visibleCards < cardData.length)}
                onClick={handleLoadMore}
            >
                {showMore ? 'Show Less' : 'Load More'}
            </LoadMoreButton>
        </>
    );
};


export default CardGrid;

