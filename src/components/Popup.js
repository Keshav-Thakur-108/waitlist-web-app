import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaCheckCircle, FaTimes } from 'react-icons/fa';

// Keyframes for the pop animation
const popAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1); /* Scale up to 110% */
  }
  100% {
    transform: scale(1); /* Return to original size */
  }
`;

// Styled components
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0);
  backdrop-filter: blur(5px); /* Adds blur to the background */
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const PopupContainer = styled.div`
  background-color: #1c1c1c;
  color: #fff;
  width: 90%;
  max-width: 400px;
  padding: 2rem;
  border-radius: 12px;
  position: relative;
  text-align: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
`;

const CheckmarkContainer = styled.div`
  background: radial-gradient(circle, #1e7e34 30%, #28a745 70%);
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem auto 2rem;
  animation: ${popAnimation} 0.5s ease; /* Apply the pop animation */
`;

const CheckmarkIcon = styled(FaCheckCircle)`
  color: #fff;
  font-size: 2rem;
`;

const CloseIcon = styled(FaTimes)`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 1.2rem;
  color: #999;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #fff;
  }
`;

const TitleMessage = styled.p`
  font-size: 2rem; /* Larger font size for the title */
  line-height: 1.25;
  color: #ffffff; /* Bright white for high visibility */
  margin: 10px 0;
`;

const SubtitleMessage = styled.p`
  font-size: 1rem; /* Smaller font size for the subtitle */
  line-height: 1.5;
  color: #b3b3b3; /* Lighter color for the subtitle */
  margin-bottom: 2rem
  margin-top: 1rem;
  padding: 0 1rem;
`;

const Popup = ({ email, onClose }) => {
  return (
    <Overlay>
      <PopupContainer>
        <CloseIcon onClick={onClose} />
        <CheckmarkContainer>
          <CheckmarkIcon />
        </CheckmarkContainer>
        <TitleMessage>We have added you to the waiting list!</TitleMessage>
        <SubtitleMessage>We will share updates with you and notify you for the release.</SubtitleMessage>
      </PopupContainer>
    </Overlay>
  );
};

export default Popup;
