import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { styled as muiStyled } from '@mui/system';
import ModalUnstyled from '@mui/base/ModalUnstyled';
import Fade from '@mui/material/Fade';
import styled from 'styled-components';

const BackdropUnstyled = React.forwardRef((props, ref) => {
  const { open, className, ...other } = props;
  return <div className={clsx({ 'MuiBackdrop-open': open }, className)} ref={ref} {...other} />;
});

BackdropUnstyled.propTypes = {
  className: PropTypes.string.isRequired,
  open: PropTypes.bool,
};

const Modal = muiStyled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;

`;

const ModalBox = styled.div`
  width: 40vw;
  height: 35vh;
  border-radius: 8px;
  backdrop-filter: blur(10px);
  background-color: rgba(17, 53, 181, 0.5);
  border: 1px solid rgba(17, 53, 181, 0.08);
  color: #fff;
  box-shadow: 0px 0px 24px 2px rgba(23, 74, 255, 0.36);
  padding: 50px;
  z-index: 1400;
`;

const Backdrop = muiStyled(BackdropUnstyled)`
  z-index: 100;
  position: absolute;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  -webkit-tap-highlight-color: transparent;
`;

const Xbtn = styled.button`
  position: absolute;
  right: 10px;
  top: 10px;
  border: 0px;
  border-radius: 5px;
  background-color: rgba(17, 53, 181, 0);
  height: 40px;
  width: 40px;
  font-size: 20px;
  transition: all 0.2s ease-out;
  color: white;
  &:hover {
    font-size: 23px;
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

const Success = styled.p`
  font-size: 2vw;
  font-weight: 600;
  margin-bottom: 40px;
  margin-top: 20px;
  z-index: 800;
`;

const Contents = styled.div`
  text-align: center;
  z-index: 800;
`;

const Middle = styled.p`
  font-size: 1.5vw;
  font-weight: 300;
  margin-top: 2vh;
  z-index: 800;
`;

function OpenModal({ setOpenModal, openModal }) {
  const closeModal = () => {
    setOpenModal(false);
  };

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={openModal}
      onClose={closeModal}
      closeAfterTransition
      components={{ Backdrop }}>
      <Fade in={openModal} timeout={400}>
        <ModalBox>
          <Xbtn onClick={closeModal}>X</Xbtn>
          <Contents>
            <Success>메일이 성공적으로 전송되었습니다 🚀</Success>
            <Middle>빠른 시일 내에 확인하고 연락드리겠습니다.</Middle>
            <Middle>감사합니다.</Middle>
          </Contents>
        </ModalBox>
      </Fade>
    </Modal>
  );
}

export default OpenModal;
