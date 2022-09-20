import React, { useCallback } from 'react';
import emailjs from '@emailjs/browser';
import useInput from '../hooks/useInput';

function SendEmail() {
  const [name, onChangeName] = useInput('');
  const [email, onChangeEmail] = useInput('');
  const [text, onChangeText] = useInput('');

  const onSubmit = useCallback(e => {
    e.preventDefault();
    const inputNum = e.target.childElementCount - 1;
    const data = new FormData(e.target);
    const entries = data.entries();
    let failed = false;

    for (let i = 0; i < inputNum; i++) {
      const next = entries.next();
      const key = next.value[0];
      const value = next.value[1];

      if (!value) {
        failed = true;
        alert(`${key} 부분이 비어있습니다`);
        break;
      }
    }
    if (!failed) {
      emailjs.sendForm('service_ccu4eqe', 'template_s8b4xid', e.target, 'mmRIDeBMP-EQOs8Do').then(
        result => {
          console.log(result.text);
        },
        error => {
          console.log(error.text);
        }
      );
    }
  });
  return (
    <form onSubmit={onSubmit}>
      <input type="text" placeholder="Name" onChange={onChangeName} value={name}></input>
      <input type="text" placeholder="Email" onChange={onChangeEmail} value={email}></input>
      <textarea placeholder="Message" onChange={onChangeText} value={text}></textarea>
      <button type="submit">Send</button>
    </form>
  );
}

export default SendEmail;
