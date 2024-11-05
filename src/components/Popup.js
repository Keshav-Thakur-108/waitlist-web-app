import React from 'react';
import styled from 'styled-components';

const PopupContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PopupContent = styled.div`
  background: #333;
  color: #4CAF50;
  padding: 2rem;
  border-radius: 8px;
  text-align: center;
`;

const Popup = ({ onClose }) => (
  <PopupContainer onClick={onClose}>
    <PopupContent>
      <h2>✅ You've joined the waitlist!</h2>
    </PopupContent>
  </PopupContainer>
);

export default Popup;
