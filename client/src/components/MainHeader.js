import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import LogoWhite from '../assets/logo_white.svg';

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 108px;
`;

const MainLogo = styled.h1`
  margin-left: 41.5px;
`;

const LogoLink = styled(Link)`
  display: flex;
`;

const Nav = styled.nav`
  height: 33px;
  margin-right: 41.5px;
`;

const PageList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
`;

const PageItem = styled.li`
  width: 110px;
  margin-left: 42px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PageLink = styled(NavLink)`
  text-decoration: none;
  color: rgba(255, 255, 255, 0.6);
  font-weight: 400;
  line-height: 33px;
  transition: all 0.1s ease 0s;

  &:hover {
    color: #fff;
  }

  &.active {
    position: relative;
    font-weight: 800;
    color: #fff;

    &::after {
      content: '';
      position: absolute;
      bottom: -5px;
      right: 0;
      left: 0;
      width: 100%;
      height: 3px;
      background-color: #fff;
    }
  }
`;

const PageTxt = styled.span`
  font-size: 24px;
  letter-spacing: -3%;
  vertical-align: center;
`;

const MainHeader = () => (
  <Header>
    <MainLogo>
      <LogoLink to="/">
        <img src={LogoWhite} alt="블록체인 밸리" />
      </LogoLink>
    </MainLogo>
    <Nav>
      <PageList>
        <PageItem style={{ textDecoration: 'none' }}>
          <PageLink to="/">
            <PageTxt>Home</PageTxt>
          </PageLink>
        </PageItem>
        <PageItem>
          <PageLink to="/about">
            <PageTxt>About Us</PageTxt>
          </PageLink>
        </PageItem>
        <PageItem>
          <PageLink to="/log">
            <PageTxt>Log</PageTxt>
          </PageLink>
        </PageItem>
        <PageItem>
          <PageLink to="/contact">
            <PageTxt>Contact</PageTxt>
          </PageLink>
        </PageItem>
        <PageItem>
          <PageLink to="/join">
            <PageTxt>Join Us</PageTxt>
          </PageLink>
        </PageItem>
      </PageList>
    </Nav>
  </Header>
);

export default MainHeader;
