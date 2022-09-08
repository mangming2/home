import { useState } from 'react';
import styled from 'styled-components';

import Main from '../../components/Main';
import DetailPage from './DetailPage';
import SessionPage from './SessionPage';
import MembersPage from './MembersPage';

const MainInner = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
`;

const Tablist = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  width: 80%;
  margin: 0 auto;
`;

const Tab = styled.div`
  cursor: pointer;
  display: flex;
  position: relative;

  &::after {
    content: '';
    height: 4px;
    display: ${props => (props['aria-selected'] ? 'inline-block' : 'none')};
    width: 100%;
    position: absolute;
    bottom: -5px;
    left: 0;
    right: 0;
    background-color: #8091d8;
  }
`;

const TabTxt = styled.span`
  font-weight: 800;
  font-size: 40px;
  line-height: 48px;
  text-align: center;
  letter-spacing: -0.03em;
  color: #ffffff;
  text-shadow: -1px 0px rgba(0, 49, 187, 0.65), 0px 1px rgba(0, 49, 187, 0.65), 1px 0px rgba(0, 49, 187, 0.65),
    0px -1px rgba(0, 49, 187, 0.65), 0px 4px 34px rgba(61, 87, 160, 0.85);
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
            <TabTxt>Detail</TabTxt>
          </Tab>
          <Tab id="SESSION" role="tab" aria-selected={innerPage === 'SESSION'}>
            <TabTxt>Session</TabTxt>
          </Tab>
          <Tab id="MEMBERS" role="tab" aria-selected={innerPage === 'MEMBERS'}>
            <TabTxt>Members</TabTxt>
          </Tab>
        </Tablist>
        {content}
      </MainInner>
    </Main>
  );
};

export default AboutPage;
