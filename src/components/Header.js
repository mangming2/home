import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import LogoWhite from '../assets/bv_logo_white.png';

const Header = () => {
  const [showBackground, setShowBackground] = useState(false);
  const headerBackroundHandler = current => {
    if (current === '/home') {
      setShowBackground(false);
    } else {
      setShowBackground(true);
    }
  };

  useEffect(() => {
    headerBackroundHandler(window.location.pathname);
  }, []);

  return (
    <StyledHeader className={showBackground ? 'isActive' : ''}>
      <Logo>
        <LogoLink to="/home">
          <img height={44} src={LogoWhite} alt="블록체인 밸리" />
        </LogoLink>
      </Logo>
      <Nav>
        <PageList>
          <PageItem>
            <PageLink to="/home">
              <PageTxt
                onClick={() => {
                  setShowBackground(false);
                }}>
                Home
              </PageTxt>
            </PageLink>
          </PageItem>
          <PageItem>
            <PageLink to="/about">
              <PageTxt
                onClick={() => {
                  setShowBackground(true);
                }}>
                About Us
              </PageTxt>
            </PageLink>
          </PageItem>
          {/* <PageItem>
          <PageLink to="/log" >
            <PageTxt>Log</PageTxt>
          </PageLink>
        </PageItem> */}
          <PageItem>
            <PageLink to="/contact">
              <PageTxt
                onClick={() => {
                  setShowBackground(true);
                }}>
                Contact
              </PageTxt>
            </PageLink>
          </PageItem>
          <PageItem>
            <PageLink to="/join">
              <PageTxt
                onClick={() => {
                  setShowBackground(true);
                }}>
                Join Us
              </PageTxt>
            </PageLink>
          </PageItem>
        </PageList>
      </Nav>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 6.25rem;
  z-index: 9900;
  padding: 0 11.7vw 0 11.7vw;
  opacity: 100%;

  /* background-color: #0b0811; */
  &.isActive {
    background-color: #0b0811;
    box-shadow: 0px 0px 20px 5px rgba(0, 0, 0, 0.8);
  }
`;

const Logo = styled.h1`
  height: 2rem;
`;

const LogoLink = styled(Link)`
  display: flex;
`;

const Nav = styled.nav`
  height: 33px;
`;

const PageList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
`;

const PageItem = styled.li`
  margin-left: 3rem;
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
    /* color: red; */

    /* &::after {
      content: '';
      position: absolute;
      bottom: -5px;
      right: 0;
      left: 0;
      width: 100%;
      height: 3px;
      background-color: #fff;
    } */
  }
`;

const PageTxt = styled.span`
  font-size: 1.1rem;
  /* letter-spacing: -3%; */
  vertical-align: center;
`;

export default Header;
