import React, { useState, useEffect } from 'react';
import { FullPage, Slide } from 'react-full-page';
import styled from 'styled-components';
import MediumCard from './MediumCard';
import FirstImg from '../assets/page-first.svg';
import FirstIcon from '../assets/Bitcoin-1.svg';
import SecondIcon from '../assets/Etherium-2 copy 1.svg';
import Footer from './Footer';

const Fullimg = styled.img`
  width: 100%;
  opacity: 0.6;
  /* height: ${props => `${props.height}px`}; */
`;

const LastContent = styled.div`
  height: 100vh;
`;

const ExceptFooter = styled.div`
  height: ${props => `${props.height}px`};
  padding-top: 60px;
`;

const JoinTitle = styled.p`
  font-size: 2.1rem;
  font-weight: 600;
`;

const JoinText = styled.div`
  text-align: center;
  margin-top: 5vh;
`;

const JoinDetail = styled.p`
  font-size: 1.3rem;
  font-weight: 300;
  margin-bottom: 10px;
`;

const Btn = styled.button`
  /* margin-top: 20px; */
  position: relative;
  border: none;
  min-width: 200px;
  min-height: 50px;
  background: linear-gradient(90deg, rgba(129, 230, 217, 1) 0%, rgba(79, 209, 197, 1) 100%);
  border-radius: 1000px;
  color: darkslategray;
  cursor: pointer;
  box-shadow: 12px 12px 24px rgba(79, 209, 197, 0.64);
  font-weight: 700;
  transition: 0.3s;
  &:hover {
    transform: scale(1.2);
    letter-spacing: 2px;
  }
  &:hover::after {
    content: '';
    width: 30px;
    height: 30px;
    border-radius: 100%;
    border: 6px solid #00ffcb;
    position: absolute;
    z-index: -100;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: coccoc-alo-circle-anim 1.2s infinite ease-in-out;
  }
`;

const SponsorBox = styled.div``;

const BoldDetail = styled.p`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 20px;
`;

const Sponsor = styled.div`
  margin: 2vh 11.7vw;
  background-color: blue;
  height: 30vh;
`;

const SecondTotal = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1vh 11.7vw;
  justify-content: center;
  height: 100vh;
`;

const SecondBox = styled.div`
  display: flex;
  margin: 5vh auto;
  width: 76.6vw;
  /* background-color: green; */
  align-items: center;
`;

const MediumTitle = styled.p`
  margin-left: 11.9vw;
  font-size: 2rem;
  font-weight: 600;
`;

const Icon = styled.img`
  width: 15vw;
`;

const Title = styled.p`
  font-size: 2.3rem;
  font-weight: 800;
  margin-bottom: 3vh;
`;
const Detail = styled.p`
  font-size: 1.4rem;
  font-weight: 200;
  line-height: 35px;
`;
const Text = styled.div`
  padding-left: 5vw;
  border-left: 2px solid white;
  margin-left: 3vw;
`;

const Middle = styled.p`
  font-size: 3.5rem;
  font-weight: 600;
  text-shadow: 0px 0px 50px rgba(6, 61, 285, 0.8);
  margin-bottom: 3vh;
`;

const PBox = styled.div`
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const ImgBox = styled.div`
  position: relative;
`;

const GoToJoin = styled.div`
  background-color: green;
  margin-left: 11.7vw;
  margin-right: 11.7vw;
  height: 35vh;
`;

const Text2 = styled.div`
  padding-right: 5vw;
  border-right: 2px solid white;
  margin-right: 1vw;
  padding-left: 4vw;
`;

const Third = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  margin-top: 5vh;
`;

const SlideBox = styled.div`
  width: ${props => `${props.width}px`};
  height: ${props => `${props.height}px`};
  overflow: hidden;
`;
// const Lineimg = styled.div`
//   height: 10%;
// `;

function MyFullPage() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };
  const [scrollY, setScrollY] = useState(0);
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setScrollY(scrollPosition);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  });

  console.log('this is scrolly' + scrollY);
  console.log('this is windowHeight' + windowSize.height);
  return (
    <FullPage>
      <Slide>
        <SlideBox height={windowSize.height} width={windowSize.width}>
          <ImgBox>
            <Fullimg src={FirstImg} alt="first img"></Fullimg>
          </ImgBox>
          <PBox>
            <Middle>다가올 WEB 3.0의 미래를 함께</Middle>
            <Middle>만들어나갈 혁신가들의 공간</Middle>
          </PBox>
        </SlideBox>
      </Slide>
      <Slide>
        <SecondTotal>
          <SecondBox>
            <div>
              <Icon src={FirstIcon} alt="icon 1"></Icon>
            </div>
            <Text>
              <Title>Our Vision</Title>
              <Detail>WEB3의 진정한 가치를 학습하는 공간, 자신의 미래를 위해 준비를 하는 공간. </Detail>
            </Text>
          </SecondBox>
          <SecondBox>
            <Text2>
              <Title>Our activities</Title>
              <Detail>
                1기 리크루팅을 통하여, 현재 10명의 Product Maker와 9명의 Crypto Analyst, 총 19명이 노드로 활동하고
                있습니다.
              </Detail>
            </Text2>
            <div>
              <Icon src={SecondIcon} alt="icon 2"></Icon>
            </div>
          </SecondBox>
        </SecondTotal>
      </Slide>
      <Slide>
        <Third>
          <div>
            <MediumTitle>Recent Medium</MediumTitle>
          </div>
          <MediumCard />
        </Third>
      </Slide>
      <Slide>
        <LastContent>
          <ExceptFooter height={windowSize.height - 189.2}>
            <GoToJoin>
              <JoinTitle>🚀 Join us</JoinTitle>
              <JoinText>
                <BoldDetail>우리는 혼자 할 수 없고, 함께해야만 할 수 있다는 것을 확신합니다.</BoldDetail>
                <JoinDetail>WEB 3.0이라는 거대한 물결에 함께 올라탈</JoinDetail>
                <JoinDetail>예비 노드 여러분의 지원을 기다립니다.</JoinDetail>
                <Btn>Join us</Btn>
              </JoinText>
            </GoToJoin>
            <Sponsor>
              <JoinTitle>🔥 Our Partners</JoinTitle>
              <SponsorBox></SponsorBox>
            </Sponsor>
          </ExceptFooter>
          <Footer />
        </LastContent>
      </Slide>
    </FullPage>
  );
}

export default MyFullPage;
