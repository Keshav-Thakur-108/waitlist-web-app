import React from 'react';
import styled from 'styled-components';
import { FaTwitter } from 'react-icons/fa';

const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center; /* Center the items */
  padding: 1rem 0;
  background-color: #1c1c1c; /* Dark background to match theme */
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 999;
`;

const TwitterLink = styled.a`
  display: flex;
  align-items: center;
  color: #fff; /* Text color */
  text-decoration: none; /* Remove underline from link */
  transition: color 0.3s;

  &:hover {
    color: #1da1f2; /* Change text color on hover */
  }
`;

const TwitterIcon = styled(FaTwitter)`
  margin-right: 0.5rem;
  color: #1da1f2; /* Twitter color */
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.1);
  }
`;

const Name = styled.span`
  cursor: pointer;
  transition: color 0.3s;

  /* Remove hover effect from here, it’s handled by TwitterLink */
`;

const Footer = () => {
  return (
    <FooterContainer>
      <TwitterLink href="https://twitter.com/Keshav__Thakur_" target="_blank" rel="noopener noreferrer">
        <TwitterIcon />
        <Name>Follow for more updates</Name>
      </TwitterLink>
    </FooterContainer>
  );
};

export default Footer;
