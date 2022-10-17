import { useState } from 'react';
import styled from 'styled-components';

import Main from '../../components/Main';
import DetailPage from './DetailPage';
import SessionPage from './SessionPage';
import MembersPage from './MembersPage';
import Footer from '../../components/Footer';

const MainInner = styled.div`
  padding-top: 3rem;
  display: flex;
  flex-direction: column;
  width: 100vw;
  padding: 0 11.7vw;
  @media all and (max-width: 768px) {
    padding-top: 0rem;
    padding: 0 5vw;
  }
`;

const Tablist = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  padding: 30px 0;
  width: 100%;
  margin: 0 auto;

  @media all and (max-width: 768px) {
    padding: 0;
  }
`;

const Tab = styled.div`
  cursor: pointer;
  display: flex;
  position: relative;

  &::after {
    color: rgba(255, 255, 255, 0.6);
    /* content: ''; */
    height: 4px;
    display: ${props => (props['aria-selected'] ? 'inline-block' : 'none')};
    /* height: 4px; */
    width: 100%;
    position: absolute;
    bottom: -5px;
    left: 0;
    right: 0;
    background-color: #8091d8;
  }
  & + & {
    margin-left: 4rem;
  }

  @media all and (max-width: 768px) {
    & + & {
      margin-left: 2rem;
    }
  }
`;

const TabTxt = styled.span`
  font-weight: 400;
  font-size: 2.3rem;
  line-height: 48px;
  text-align: center;
  letter-spacing: -0.03em;
  color: rgba(255, 255, 255, 0.6);

  &::after {
    display: ${props => (props['aria-selected'] ? 'inline-block' : 'none')};
    color: rgba(255, 255, 255, 0.6);
  }

  &.isActive {
    font-weight: 600;
    color: #ffffff;
    text-shadow: 0px 8px 43px rgba(19, 72, 224, 0.75);
  }

  @media all and (max-width: 768px) {
    font-size: 2rem;
  }
`;

const AboutPage = () => {
  const [innerPage, setInnerPage] = useState('DETAIL');

  let content;

  if (innerPage === 'DETAIL') {
    content = <DetailPage />;
  } else if (innerPage === 'SESSION') {
    content = <SessionPage />;
  } else {
    content = <MembersPage />;
  }

  const tabClickHandler = event => {
    const { id } = event.target.closest('div');
    if (!['DETAIL', 'SESSION', 'MEMBERS'].includes(id)) return;
    setInnerPage(id);
  };

  return (
    <Main>
      <MainInner>
        <Tablist onClick={tabClickHandler} role="tablist">
          <Tab id="DETAIL" role="tab" aria-selected={innerPage === 'DETAIL'}>
            <TabTxt className={innerPage === 'DETAIL' ? 'isActive' : ''}>Detail</TabTxt>
          </Tab>
          {/* <Tab id="SESSION" role="tab" aria-selected={innerPage === 'SESSION'}>
            <TabTxt className={innerPage === 'SESSION' ? 'isActive' : ''}>Session</TabTxt>
          </Tab> */}
          <Tab id="MEMBERS" role="tab" aria-selected={innerPage === 'MEMBERS'}>
            <TabTxt className={innerPage === 'MEMBERS' ? 'isActive' : ''}>Members</TabTxt>
          </Tab>
        </Tablist>
        {content}
      </MainInner>
      <Footer />
    </Main>
  );
};

export default AboutPage;
