import styled from 'styled-components';

import LogoGray from '../assets/logo_gray.svg';
import DiscordLogo from '../assets/discord.svg';
import InstagramLogo from '../assets/instagram.svg';
import MediumLogo from '../assets/medium.svg';
import TelegramLogo from '../assets/telegram.svg';

const StyledFooter = styled.footer`
  display: flex;
  height: 300px;
  width: 100%;
  background-color: #323956;
  color: #a5a5a5;
`;

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  text-align: center;
`;

const FooterTitle = styled.h3`
  width: 378px;
  font-weight: 500;
  font-size: 32px;
  line-height: 38px;
`;

const FooterLogo = styled.h2`
  display: flex;
  margin-top: 100px;
`;

const ContactInfo = styled(FooterContainer)`
  margin-top: 71px;
`;

const ContactInfoTitle = styled(FooterTitle)``;

const MailAddressLink = styled.a`
  margin-top: 25px;
  display: flex;
`;

const MailAddressTxt = styled.span`
  font-weight: 510;
  font-size: 20px;
  line-height: 24px;
`;

const FollowUs = styled(FooterContainer)`
  margin-top: 66.87px;
`;

const FollowUsTitle = styled(FooterTitle)``;

const FollowUsLogos = styled.div`
  display: flex;
  margin-top: 25px;
`;

const FollowUsLogoLink = styled.a`
  display: flex;

  & + & {
    margin-left: 40px;
  }
`;

const FollowUsLogoImg = styled.img`
  width: 50px;
  height: 50px;
`;

const Footer = () => (
  <StyledFooter>
    <FooterContainer>
      <FooterLogo>
        <img src={LogoGray} alt="블록체인 밸리"></img>
      </FooterLogo>
    </FooterContainer>
    <ContactInfo>
      <ContactInfoTitle>Contact</ContactInfoTitle>
      <MailAddressLink href="mailto: blockchainvalley.kor@gmail.com">
        <MailAddressTxt>blockchainvalley.kor@gmail.com</MailAddressTxt>
      </MailAddressLink>
    </ContactInfo>
    <FollowUs>
      <FollowUsTitle>Follow us</FollowUsTitle>
      <FollowUsLogos>
        <FollowUsLogoLink rel="noopener noreferrer" target="_blank" href="https://discord.gg/">
          <FollowUsLogoImg src={DiscordLogo} alt="블록체인 밸리 디스코드"></FollowUsLogoImg>
        </FollowUsLogoLink>
        <FollowUsLogoLink
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.instagram.com/blockchain__valley/">
          <FollowUsLogoImg src={InstagramLogo} alt="블록체인 밸리 인스타그램"></FollowUsLogoImg>
        </FollowUsLogoLink>
        <FollowUsLogoLink rel="noopener noreferrer" target="_blank" href="https://medium.com/">
          <FollowUsLogoImg src={MediumLogo} alt="블록체인 밸리 미디엄"></FollowUsLogoImg>
        </FollowUsLogoLink>
        <FollowUsLogoLink rel="noopener noreferrer" target="_blank" href="https://telegram.org/">
          <FollowUsLogoImg src={TelegramLogo} alt="블록체인 밸리 텔레그램"></FollowUsLogoImg>
        </FollowUsLogoLink>
      </FollowUsLogos>
    </FollowUs>
  </StyledFooter>
);

export default Footer;
