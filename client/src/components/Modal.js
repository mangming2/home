import { useState } from 'react';
import styled from 'styled-components';

const Cover = styled.div`
  width: 100%;
  height: 100%;
  background-color: aliceblue;
  z-index: 500;
`;

const ModalContainer = styled.div`
  width: 40vw;
  height: 20vh;
  z-index: 999;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: gray;
  border: 1px solid black;
  border-radius: 8px;
`;

const Xbtn = styled.button`
  position: absolute;
  right: 10px;
  top: 10px;
`;

function Modal() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <Cover>
      <ModalContainer>
        <Xbtn>X</Xbtn>
        <p>메일이 전송되었습니다.</p>
        <p>빠른 시일 내에 확인하고 연락드리겠습니다.</p>
        <p>감사합니다.</p>
      </ModalContainer>
    </Cover>
  );
}

export default Modal;
