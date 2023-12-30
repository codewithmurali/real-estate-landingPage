import React from "react";
import styled from "styled-components";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <FooterContainer>
            <FooterContent>
                <FooterSection>
                    <FooterHeading>Contact Us</FooterHeading>
                    <p>Plot no: 206 - Lake View Serenity
                        Pudi (Opposite Sricity Entrance), Tada - 524401. Tirupathi District, Andhra Pradesh.
                        Landmark: Sricity Zero Point</p>
                    <p>Email: kalpana@kllifespace.com</p>
                    <p>Phone: +91 7901333332</p>
                </FooterSection>
                <FooterSection>
                    <FooterHeading>Quick Links</FooterHeading>
                    <FooterLink href="#home">Home</FooterLink>
                    <FooterLink href="#about">About</FooterLink>
                    <FooterLink href="#amenities">Amenities</FooterLink>
                    <FooterLink href="#streetview">Street View</FooterLink>
                </FooterSection>
                <FooterSection>
                    <FooterHeading>Follow Us</FooterHeading>
                    <SocialIcons>
                        <SocialIcon href="#" target="_blank" rel="noopener noreferrer">
                            <FaFacebookF />
                        </SocialIcon>
                        <SocialIcon href="#" target="_blank" rel="noopener noreferrer">
                            <FaTwitter />
                        </SocialIcon>
                        <SocialIcon href="#" target="_blank" rel="noopener noreferrer">
                            <FaInstagram />
                        </SocialIcon>
                    </SocialIcons>
                </FooterSection>
            </FooterContent>
            <FooterBottom>
                <p>&copy; 2023 Tranquildove. All rights reserved.</p>
            </FooterBottom>
        </FooterContainer>
    );
};

export default Footer;

const FooterContainer = styled.footer`
  background-color: var(--accent-color);
  color: #fff;
  padding: 20px;
`;

const FooterContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  @media (min-width: 768px) {
    flex-wrap: nowrap;
  }
`;

const FooterSection = styled.div`
  flex: 1;
  margin-bottom: 20px;
  p{
    margin-bottom: 15px !important;
  }

  @media (min-width: 768px) {
    margin-bottom: 0;
    margin-right: 20px;
  }
`;

const FooterHeading = styled.h4`
  font-size: 1.2rem;
  margin-bottom: 10px;
`;

const FooterLink = styled.a`
  display: block;
  color: #fff;
  text-decoration: none;
  margin-bottom: 5px;
  transition: color 0.3s;

  &:hover {
    color: #3498db;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 10px;
`;

const SocialIcon = styled.a`
  color: #fff;
  font-size: 1.5rem;
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: #3498db;
  }
`;

const FooterBottom = styled.div`
  margin-top: 20px;
  text-align: center;
`;
