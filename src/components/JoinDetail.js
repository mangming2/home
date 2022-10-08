import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';
import '../App.css';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Timeline = styled.div`
  height: 300px;
  width: 3px;
  box-shadow: 0px 0px 24px 2px rgba(23, 74, 255, 0.36);
`;

const Circle = styled.div`
  width: 30px;
  height: 30px;
  color: darkblue;
  border-radius: 50%;
  margin: 0vw 5vw;
`;

const CircleWrapper = styled.div`
  position: relative;
`;

const MessageR = styled.div`
  position: absolute;
  left: 100%;
  top: 0%;
  font-size: 1.6vw;
  font-weight: bold;
  width: 38vw;
  transition: all 0.2s ease-in-out;
`;

const MessageL = styled.div`
  position: absolute;
  right: 65%;
  top: 0%;
  font-size: 1.6vw;
  font-weight: bold;
  width: 38vw;
  transition: all 0.8s ease-in-out;
`;

const DetailMessage = styled.p`
  line-height: 40px;
  text-shadow: 0px 0px 50px rgba(6, 61, 285, 0.8);
`;

const JoinDeatil = ({ setObserver, callback }) => {
  const [message1, setMessage1] = useState('');
  const [message2, setMessage2] = useState('');
  const [message3, setMessage3] = useState('');
  const [message4, setMessage4] = useState('');
  const [message5, setMessage5] = useState('');

  const timeline1 = useRef(null);
  const timeline2 = useRef(null);
  const timeline3 = useRef(null);
  const timeline4 = useRef(null);
  const timeline5 = useRef(null);
  const circle1 = useRef(null);
  const circle2 = useRef(null);
  const circle3 = useRef(null);
  const circle4 = useRef(null);
  const circle5 = useRef(null);

  const someCallback1 = () => {
    setMessage1(
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.sf'
    );
    callback();
  };
  const someCallback2 = () => {
    setMessage2('Egestas dui id ornare arcu odio ut sem nulla pharetra');
  };
  const someCallback3 = () => {
    setMessage3('Porta non pulvinar neque laoreet suspendisse interdum consectetur libero. ');
  };
  const someCallback4 = () => {
    setMessage4('Risus pretium quam vulputate dignissim suspendisse in est ante in. ');
  };
  const someCallback5 = () => {
    setMessage5('Tincidunt tortor aliquam nulla facilisi cras fermentum odio. ');
  };

  useEffect(() => {
    setObserver(timeline1.current);
    setObserver(timeline2.current);
    setObserver(timeline3.current);
    setObserver(timeline4.current);
    setObserver(timeline5.current);
    setObserver(circle1.current, someCallback1);
    setObserver(circle2.current, someCallback2);
    setObserver(circle3.current, someCallback3);
    setObserver(circle4.current, someCallback4);
    setObserver(circle5.current, someCallback5);
  }, []);

  return (
    <Wrapper>
      <Timeline id="timeline1" ref={timeline1} />
      <CircleWrapper>
        <Circle id="circle1" ref={circle1}></Circle>
        <MessageR>
          <CSSTransition unmountOnExit timeout={400} classNames="moveR" in={message1}>
            <DetailMessage>{message1}</DetailMessage>
          </CSSTransition>
        </MessageR>
      </CircleWrapper>
      <Timeline id="timeline2" ref={timeline2} />
      <CircleWrapper>
        <Circle id="circle2" ref={circle2}></Circle>
        <MessageL>
          <CSSTransition unmountOnExit timeout={400} classNames="moveL" in={message2}>
            <DetailMessage>{message2}</DetailMessage>
          </CSSTransition>
        </MessageL>
      </CircleWrapper>
      <Timeline id="timeline3" ref={timeline3} />
      <CircleWrapper>
        <Circle id="circle3" ref={circle3}></Circle>
        <MessageR>
          <CSSTransition unmountOnExit timeout={400} classNames="moveR" in={message3}>
            <DetailMessage>{message3}</DetailMessage>
          </CSSTransition>
        </MessageR>
      </CircleWrapper>
      <Timeline id="timeline4" ref={timeline4} />
      <CircleWrapper>
        <Circle id="circle4" ref={circle4}></Circle>
        <MessageL>
          <CSSTransition unmountOnExit timeout={400} classNames="moveL" in={message4}>
            <DetailMessage>{message4}</DetailMessage>
          </CSSTransition>
        </MessageL>
      </CircleWrapper>
      <Timeline id="timeline5" ref={timeline5} />
      <CircleWrapper>
        <Circle id="circle5" ref={circle5}></Circle>
        <MessageR>
          <CSSTransition unmountOnExit timeout={400} classNames="moveR" in={message5}>
            <DetailMessage>{message5}</DetailMessage>
          </CSSTransition>
        </MessageR>
      </CircleWrapper>
    </Wrapper>
  );
};

export default JoinDeatil;
