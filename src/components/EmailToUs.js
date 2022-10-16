import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import useInput from '../hooks/useInput';
import Modal from './Modal';

const EmailTxt = styled.div`
  margin-top: 10vh;
  font-size: 2.5rem;
  font-weight: 500;
  @media all and (min-width: 768px) {
    display: none;
  }
`;

const FormBox = styled.div`
  background-color: #fafafa;
  border-radius: 7px;
  width: 40vw;
  padding: 1vh 6vh 5vh 6vh;
  color: black;
  overflow: hidden;
  margin: 0 0 10vh 5vw;
  @media all and (max-width: 768px) {
    width: 90vw;
    padding: 1vh 3vh 4vh 3vh;
    color: black;
    overflow: hidden;
    margin: 2rem 0;
  }
`;

const TextBox = styled.textarea`
  resize: none;
  display: block;
  width: 95%;
  height: 30vh;
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
  height: 5vh;
  color: white;
  transition: all 0.2s ease-in-out;
  font-weight: 600;
  font-size: 17px;
  &:hover {
    background-color: #5385da;
    cursor: pointer;
    box-shadow: 0px 4px 12px #8091d8;
  }

  @media all and (max-width: 768px) {
    margin: 1.5vh auto;
    width: 5rem;
    height: 3rem;
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
  const [openModal, setOpenModal] = useState(false);
  const sendEmail = e => {
    e.preventDefault();
    const lineText = text.replace(/\n/g, '<br/>');
    const data = {
      service_id: 'service_ccu4eqe',
      template_id: 'template_s8b4xid',
      user_id: 'mmRIDeBMP-EQOs8Do',
      template_params: {
        name,
        email,
        lineText,
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
        console.log('error....🥺');
      });
    setOpenModal(true);

    resetName();
    resetEmail();
    resetText();
  };

  return (
    <>
      <EmailTxt>Send Mail</EmailTxt>
      <FormBox>
        <form ref={form} onSubmit={sendEmail} autoComplete="off">
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
            <TextBox name="text" required value={text} onChange={onChangeText} wrap="hard" cols="10" />
            <ButtonBox>
              <Button type="submit">Send</Button>
            </ButtonBox>
          </FormBottom>
        </form>
      </FormBox>
      {openModal ? <Modal setOpenModal={setOpenModal} openModal={openModal} /> : null}
    </>
  );
};

export default EmailToUs;
