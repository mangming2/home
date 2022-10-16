import React, { useEffect, useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import LogoWhite from '../assets/bv_logo_white.png';

const Header = () => {
  const [showBackground, setShowBackground] = useState(false);
  const headerBackroundHandler = current => {
    if (current === '/home' || current === '/') {
      setShowBackground(false);
    } else {
      setShowBackground(true);
    }
  };

  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  useEffect(() => {
    headerBackroundHandler(window.location.pathname);
  }, []);

  return (
    <div>
      <StyledHeader className={showBackground ? 'isActive' : ''}>
        <HeaderContainer>
          <LogoLink
            to="/home"
            onClick={() => {
              setShowBackground(false);
            }}>
            <img height={44} src={LogoWhite} alt="블록체인 밸리" />
          </LogoLink>
        </HeaderContainer>
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
      {/* Mobile */}
      <StyledHeaderMobile className={showBackground ? 'isActive' : ''}>
        <HeaderContainer>
          <LogoLink
            to="/home"
            onClick={() => {
              setShowBackground(false);
            }}>
            <img height={32} src={LogoWhite} alt="블록체인 밸리" />
          </LogoLink>
          <FaIcons.FaBars fontSize={22} onClick={showSidebar} />
        </HeaderContainer>
        <Sidebar className={sidebar ? 'active' : ''}>
          <SidebarContainer>
            <PageList>
              <PageItem>
                <PageLink to="/home">
                  <PageTxt
                    onClick={() => {
                      setShowBackground(false);
                      showSidebar();
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
                      showSidebar();
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
                      showSidebar();
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
                      showSidebar();
                    }}>
                    Join Us
                  </PageTxt>
                </PageLink>
              </PageItem>
            </PageList>
          </SidebarContainer>
        </Sidebar>
      </StyledHeaderMobile>
    </div>
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

  /* @media all and (max-width: 320px) {
    display: none;
  } */
  @media all and (max-width: 768px) {
    display: none;
  }
`;

const StyledHeaderMobile = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
  z-index: 9900;
  padding: 0 5vw;
  opacity: 100%;
  &.isActive {
    background-color: #0b0811;
    box-shadow: 0px 0px 20px 5px rgba(0, 0, 0, 0.8);
  }

  @media all and (min-width: 768px) {
    display: none;
  }
`;

const Sidebar = styled.div`
  /* background-color: #0b0811; */
  background-color: rgba(0, 0, 128, 0.1);

  padding-top: 4rem;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: left;
  position: fixed;
  top: 0;
  left: -100%;
  transition: 350ms;
  backdrop-filter: blur(15px);

  &.active {
    left: 0;
    transition: 350ms;
  }
`;

const SidebarContainer = styled.nav`
  display: flex;
  flex-direction: column;
`;

const HeaderContainer = styled.h1`
  height: 2rem;

  @media all and (max-width: 768px) {
    width: 100vw;
    z-index: 100;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
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

  @media all and (max-width: 768px) {
    padding-left: 7vw;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    text-decoration: none;
  }
`;

const PageItem = styled.li`
  margin-left: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media all and (max-width: 768px) {
    margin-left: 0;
    margin-bottom: 0.6rem;
    display: flex;
    justify-content: left;
    align-items: left;
  }
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
  }

  @media add and (max-width: 768px) {
    width: 100vw;
    background-color: red;
  }
`;

const PageTxt = styled.div`
  font-size: 1.1rem;
  /* letter-spacing: -3%; */
  vertical-align: center;

  @media all and (max-width: 768px) {
    width: 100vw;
    font-size: 1.5rem;
  }
`;

export default Header;
