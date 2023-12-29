import React from 'react';
import styled, { keyframes } from 'styled-components';
import BackgroundVideo from '../assets/video 1.mp4';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const HomePage = () => {
  return (
    <>
      <Hero id="home">
        <VideoContainer>
          <Video src={BackgroundVideo} autoPlay loop muted playsInline></Video>
          <Overlay />
        </VideoContainer>
        <Content>
          <h1 aria-label="Tranquildove: The best place to find your dream house" tabIndex="0">
            The best place to find <span>Your dream house</span>
          </h1>
        </Content>
      </Hero>
    </>
  );
};

export default HomePage;

const Hero = styled.section`
  position: relative;
  height: 85vh;
  overflow: hidden;
  width: 95vw;
  margin: auto;

  @media only screen and (max-width: 768px) {
    height: 60vh;
  }
`;

const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const Video = styled.video`
  object-fit: cover;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  border-radius: 16px;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  z-index: 1;
  border-radius: 16px;
`;

const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: var(--secondary-color);
  z-index: 2;
  animation: ${fadeIn} 1.5s ease-in-out;
  width: 100%;

  h1 {
    font-size: var(--large-font-size);
  }
  
  span {
    display: block;
    color: var(--accent-color);
    font-size: var(--large-font-size);
  }

  @media only screen and (max-width: 768px) {
    h1,span {
      font-size: var(--small-font-size);
    }
  }
`;
