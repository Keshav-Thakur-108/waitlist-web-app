import React, { useState } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { FaUser, FaEnvelope, FaArrowRight } from 'react-icons/fa'; // Import icons
import Popup from './Popup';

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
});

const FormContainer = styled.div`
  padding: 2rem;
  border-radius: 8px;
  max-width: 400px; /* Set a maximum width */
  width: 100%; /* Allow full width up to max-width */
  text-align: center;
  backdrop-filter: blur(8px); /* Blurring effect for the form */
  margin: 0 auto; /* Center the form container */
  display: flex; /* Use flexbox for alignment */
  flex-direction: column; /* Arrange children vertically */
  align-items: center; /* Center children horizontally */
`;

const Title = styled.h2`
  font-size: 2.25rem; /* Increased font size for visibility */
  font-weight: bold; 
  margin-bottom: 3rem; /* Added margin-bottom for spacing */
  line-height: 1.2; /* Adjust line height for better spacing */
`;

const TitleLine1 = styled.span`
  display: block; /* Force line breaks */
`;

const TitleLine2 = styled.span`
  display: block; /* Force line breaks */
  font-size: 2.2rem; /* Slightly larger font size for emphasis */
  background: linear-gradient(90deg, violet, red, orange, yellow, green, cyan, blue, purple); /* Gradient effect */
  -webkit-background-clip: text; /* Clip the gradient to the text */
  -webkit-text-fill-color: transparent; /* Fill text with gradient */
`;

const InputContainer = styled.div`
  position: relative;
  width: 100%; /* Full width for input container */
  min-width: 275px;
  max-width: 350px; /* Limit the maximum width for better alignment */
  margin-bottom: 1rem;
  display: flex;
`;

const Icon = styled.span`
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: #999; /* Default icon color matches greyish outline */
  transition: color 0.3s ease;
`;

const Input = styled.input`
  padding: 0.8rem 0.8rem 0.8rem 30px; /* Add padding for icons */
  width: 100%; /* Full width for input field */
  border: 2px solid #999; /* Greyish outline */
  border-radius: 4px;
  background-color: transparent; /* No background */
  color: #999; /* Default text color */
  
  &::placeholder {
    color: #cccccc; /* Light color for placeholder */
  }

  &:focus {
    outline: none;
    border: 2px solid #ffffff; /* White border on focus */
    color: #ffffff; /* Change text color to white on focus */
  }

  &:focus + ${Icon}, &:focus {
    color: #ffffff; /* Change icon color to white on focus */
  }
`;

const Button = styled.button`
  background-color: ${props => (props.disabled ? '#666' : '#4CAF50')}; /* Muted color for disabled state */
  color: white;
  padding: 0.8rem;
  width: 100%; /* Full width for the button */
  max-width: 350px; /* Match button width to input */
  border-radius: 4px;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')}; /* Not allowed cursor for disabled */
  margin-top: 1.5rem; /* Spacing above the button */
  transition: background-color 0.3s ease; /* Smooth transition for color change */
  display: flex; /* Flex for alignment */
  align-items: center; /* Center the icon vertically */
  justify-content: center; /* Center content horizontally */

  &:hover {
    background-color: ${props => (props.disabled ? '#666' : '#45a049')}; /* Darker green on hover */
  }
`;

const ArrowIcon = styled(FaArrowRight)`
  margin-left: 0.5rem; /* Spacing between text and icon */
`;

const Form = () => {
  const { register, handleSubmit, formState: { errors, isDirty, isValid } } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange', // Validate on change for real-time feedback
  });
  const [showPopup, setShowPopup] = useState(false);

  const onSubmit = async (data) => {
    // Here you’d send the data to the backend
    setShowPopup(true);
  };

  return (
    <FormContainer>
      <Title>
        <TitleLine1>Join the Waitlist For</TitleLine1>
        <TitleLine2>AI Summarizer Product</TitleLine2>
      </Title>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputContainer>
          <Icon><FaUser /></Icon>
          <Input type="text" placeholder="Name" {...register('name')} />
        </InputContainer>
        <p>{errors.name?.message}</p>
        <InputContainer>
          <Icon><FaEnvelope /></Icon>
          <Input type="email" placeholder="Email" {...register('email')} />
        </InputContainer>
        <p>{errors.email?.message}</p>
        <Button type="submit" disabled={!isDirty || !isValid}>
          Join the Waitlist <ArrowIcon />
        </Button>
      </form>
      {showPopup && <Popup onClose={() => setShowPopup(false)} />}
    </FormContainer>
  );
};

export default Form;
