import React, { useState } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Popup from './Popup';

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
});

const FormContainer = styled.div`
  background: #1e1e1e;
  padding: 2rem;
  border-radius: 8px;
  width: 300px;
  text-align: center;
`;

const Input = styled.input`
  margin-bottom: 1rem;
  padding: 0.8rem;
  width: 100%;
  border-radius: 4px;
  border: 1px solid #333;
  background-color: #333;
  color: #fff;
`;

const Button = styled.button`
  background-color: #4CAF50;
  color: white;
  padding: 0.8rem;
  width: 100%;
  border-radius: 4px;
  cursor: pointer;
`;

const Form = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });
  const [showPopup, setShowPopup] = useState(false);

  const onSubmit = () => {
    setShowPopup(true);
    // Here you’d send the data to the backend
  };

  return (
    <FormContainer>
      <h2>Join the Waitlist for My AI Summarizer Product</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input type="text" placeholder="Name" {...register('name')} />
        <p>{errors.name?.message}</p>
        <Input type="email" placeholder="Email" {...register('email')} />
        <p>{errors.email?.message}</p>
        <Button type="submit">Join the Waitlist</Button>
      </form>
      {showPopup && <Popup onClose={() => setShowPopup(false)} />}
    </FormContainer>
  );
};

export default Form;
