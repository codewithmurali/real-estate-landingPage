// Partner.js
import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { partnerData } from '../data';

const PartnerWrapper = styled.div`
  background-color: #f4f4f4;
  padding: 20px;
`;

const marqueeAnimation = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
`;

const PartnerLogoContainer = styled.div`
  overflow: hidden;
  white-space: nowrap;
  animation: ${marqueeAnimation} 20s linear infinite; /* Adjust the duration as needed */
`;

const PartnerLogo = styled.img`
  max-height: 50px;
  width: auto;
  margin: 0 20px;
  filter: saturate(0);
`;

const Partner = () => {
    const [partners, setPartners] = useState([]);

    useEffect(() => {
        setPartners(partnerData);
    }, []);

    return (
        <PartnerWrapper>
            <PartnerLogoContainer>
                {partners.length > 0 &&
                    partners.map((partner, index) => (
                        <PartnerLogo key={index} src={partner.image} alt={partner.name} />
                    ))}
            </PartnerLogoContainer>
        </PartnerWrapper>
    );
};

export default Partner;
