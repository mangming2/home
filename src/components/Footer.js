import styled from 'styled-components';

import LogoGray from '../assets/bv_logo_gray.png';
import DiscordLogo from '../assets/discord.svg';
import InstagramLogo from '../assets/instagram.svg';
import MediumLogo from '../assets/medium.svg';
// import TelegramLogo from '../assets/telegram.svg';

const StyledFooter = styled.footer`
  display: flex;
  height: 10rem;
  width: 100%;
  background-color: #171a24;
  color: #a5a5a5;
  justify-content: center;
  align-items: center;

  @media all and (max-width: 768px) {
    margin-top: 2rem;
    height: 8rem;
  }
`;

const FooterContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 11.7vw;

  @media all and (max-width: 768px) {
    display: flex;
    width: 90vw;
    flex-direction: column;
    align-items: flex-start;
    padding: 0;
  }
`;

const FooterLogo = styled.div`
  display: flex;
  margin-bottom: 1rem;
`;

const AddressLink = styled.a`
  word-break: keep-all;
`;

const Txt = styled.div`
  font-size: 0.75rem;
  line-height: 1.5rem;
`;

const FollowUsLogos = styled.div`
  display: flex;
`;

const FollowUsLogoLink = styled.a`
  display: flex;

  & + & {
    margin-left: 20px;
  }
`;

const FollowUsLogoImg = styled.img`
  height: 1.2rem;
`;

const RightContainer = styled.div`
  height: 6rem;
`;

const LeftContainer = styled(RightContainer)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;

  @media all and (max-width: 768px) {
    display: none;
  }
`;

const Footer = () => (
  <StyledFooter>
    <FooterContainer>
      <RightContainer>
        <FooterLogo>
          <img height={28} src={LogoGray} alt="블록체인밸리"></img>
        </FooterLogo>
        <AddressLink rel="noopener noreferrer" href="mailto: blockchainvalley.kor@gmail.com">
          <Txt>blockchainvalley.kor@gmail.com</Txt>
        </AddressLink>
        <AddressLink rel="noopener noreferrer" href="http://kko.to/En-xxmhJh" target="_blank">
          <Txt>서울특별시 성북구 고려대로 24길 56 4층 블록체인밸리</Txt>
        </AddressLink>
      </RightContainer>
      <LeftContainer>
        <FollowUsLogos>
          <FollowUsLogoLink rel="noopener noreferrer" target="_blank" href="https://discord.gg/RFAWQz8S3J">
            <FollowUsLogoImg src={DiscordLogo} alt="블록체인밸리 디스코드"></FollowUsLogoImg>
          </FollowUsLogoLink>
          <FollowUsLogoLink
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.instagram.com/blockchain__valley/">
            <FollowUsLogoImg src={InstagramLogo} alt="블록체인밸리 인스타그램"></FollowUsLogoImg>
          </FollowUsLogoLink>
          <FollowUsLogoLink rel="noopener noreferrer" target="_blank" href="https://medium.com/blockchain-valley">
            <FollowUsLogoImg src={MediumLogo} alt="블록체인밸리 미디엄"></FollowUsLogoImg>
          </FollowUsLogoLink>
          {/* <FollowUsLogoLink rel="noopener noreferrer" target="_blank" href="https://telegram.org/">
            <FollowUsLogoImg src={TelegramLogo} alt="블록체인밸리 텔레그램"></FollowUsLogoImg>
          </FollowUsLogoLink> */}
        </FollowUsLogos>
        <Txt>Copyright Blockchain Valley. All rights reserved.</Txt>
      </LeftContainer>
    </FooterContainer>
  </StyledFooter>
);

export default Footer;
