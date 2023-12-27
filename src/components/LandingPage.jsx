import React from 'react';
import styled from 'styled-components';
import BackgroundVideo from '../assets/video 1.mp4';


const LandingPage = () => {
  return (
    <>
      <Hero>
        <Video src={BackgroundVideo} autoPlay loop muted playsInline></Video>
        <Content>
          <h1>The best place to find</h1>
          <h1 style={{ color: '#7065F0' }}>Your dream house</h1>
        </Content>
      </Hero>
    </>
  );
};

export default LandingPage;

const Hero = styled.section`
  position: relative;
  height: 80vh;
  overflow: hidden;
  width: 95vw;
  margin: auto;
`;

const Video = styled.video`
  object-fit: cover;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
`;

const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: var(--secondary-color);
  z-index: 2;
`;
