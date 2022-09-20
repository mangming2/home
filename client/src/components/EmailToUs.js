import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import TextField from '@mui/material/TextField';
import axios from 'axios';

import useInput from '../hooks/useInput';

const FormBox = styled.div`
  /* width: 40vh; */
  /* transform: translate(-50%, -50%); */
  background-color: #fafafa;
  border-radius: 7px;
  /* padding: 70px 100px; */
  width: 35vw;
  padding: 2vh 6vh 5vh 6vh;
  color: black;
  position: absolute;
  left: 75%;
  top: 55%;
  transform: translate(-50%, -50%);
  height: 80vh;
  overflow: hidden;
`;

const TextBox = styled.textarea`
  resize: none;
  display: block;
  width: 95%;
  height: 40vh;
  outline: none;
  font-family: sans-serif;
  margin: 10px auto;
  background-color: #f5f5f5;
  border: 1px solid #a2a2a2;
  border-radius: 8px;
  padding: 10px;
`;

const TextLabel = styled.label`
  font-size: 16px;
  margin-top: 1vh;
  margin-bottom: 20px;
`;

const Button = styled.button`
  border-radius: 10px;
  margin: 1.5vh auto;
  text-align: center;
  background-color: #84a4da;
  border: 0px;
  width: 8vw;
  height: 45px;
  color: white;
  transition: all 0.2s ease-in-out;
  font-weight: 600;
  font-size: 17px;
  &:hover {
    background-color: #5385da;
    cursor: pointer;
    box-shadow: 0px 4px 12px #8091d8;
  }
`;

const ButtonBox = styled.div`
  text-align: center;
`;

const TextFieldBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const FormBottom = styled.div`
  margin-top: 4vh;
`;

const EmailToUs = () => {
  const form = useRef();
  const [name, onChangeName, resetName] = useInput('');
  const [email, onChangeEmail, resetEmail] = useInput('');
  const [text, onChangeText, resetText] = useInput('');

  const sendEmail = e => {
    e.preventDefault();
    const data = {
      service_id: 'service_ccu4eqe',
      template_id: 'template_s8b4xid',
      user_id: 'mmRIDeBMP-EQOs8Do',
      template_params: {
        name,
        email,
        text,
      },
    };
    axios({
      method: 'post',
      url: 'https://api.emailjs.com/api/v1.0/email/send',
      data,
      contentType: 'application/json',
    })
      .then(() => {
        console.log('working');
      })
      .catch(() => {
        console.log('error');
      });

    resetName();
    resetEmail();
    resetText();
  };

  return (
    <FormBox>
      <form ref={form} onSubmit={sendEmail} autocomplete="off">
        <TextFieldBox>
          <TextField
            id="standard-basic"
            label="Name"
            variant="standard"
            required
            size="small"
            margin="normal"
            value={name}
            onChange={onChangeName}
          />
          <TextField
            id="standard-basic"
            type="email"
            label="Email"
            variant="standard"
            required
            size="small"
            margin="none"
            value={email}
            onChange={onChangeEmail}
          />
        </TextFieldBox>
        <FormBottom>
          <TextLabel>Message</TextLabel>
          <TextBox name="text" required value={text} onChange={onChangeText} />
          <ButtonBox>
            <Button type="submit">Send</Button>
          </ButtonBox>
        </FormBottom>
      </form>
    </FormBox>
  );
};

export default EmailToUs;
