import styled from 'styled-components';
import Call from '../assets/call.svg';
import Location from '../assets/location.svg';
import Mail from '../assets/mail.svg';
import Discord from '../assets/discord.svg';
import Insta from '../assets/instagram.svg';
import Telegram from '../assets/telegram.svg';
import Medium from '../assets/medium.svg';

const Box = styled.div`
  height: 100vh;
  /* padding: 0vh 0vh 1vh 5vh; */
  /* margin-left: 15px;
  margin-top: 15px; */
  width: 35vw;
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
  font-weight: 600;
  font-size: 2rem;
  line-height: 38px;
  margin-bottom: 20px;
`;

const Title = styled.p`
  font-size: 3.2rem;
  font-weight: 700;
  margin: 0px 0px 20px 15px;
`;

const Detail = styled.p`
  font-weight: 300;
  font-size: 1.2vw;
  margin: 20px;
  line-height: 160%;
`;

const FollowUs = styled(FooterContainer)`
  /* margin-top: 3vh; */
`;

const FollowUsTitle = styled(FooterTitle)``;

const FollowUsLogos = styled.div`
  display: flex;
  margin-top: 10px;
`;

const FollowUsLogoImg = styled.img`
  width: 35px;
  height: 35px;
  transition: all 0.2s ease-in-out;
  &:hover {
    /* background: white; */
  }
`;

const FollowUsLogoLink = styled.a`
  display: flex;
  width: 80px;
  height: 80px;
  justify-content: center;
  border-radius: 10px;
  align-items: center;
  transition: all 0.2s ease-in-out;
  &:hover {
    background: rgba(17, 53, 181, 0.57);
    box-shadow: 0px 0px 35px 11px rgba(23, 74, 155, 0.4);
    border-radius: 14px;
    ${FollowUsLogoImg} {
      width: 45px;
      height: 45px;
      fill: white;
    }
  }

  & + & {
    margin-left: 30px;
  }
`;

const ContactBox = styled.div`
  height: 33vh;
  margin: 20px 20px 20px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const DetailBox = styled.div`
  display: flex;
  align-items: center;
`;
const ImgBox = styled.div`
  width: 80px;
  text-align: center;
`;
const DetailImg = styled.img`
  padding-right: 20px;
`;
const DetailText = styled.p`
  font-weight: 300;
  font-size: 1.5rem;
  display: inline;
`;

function ContactDetail() {
  return (
    <Box>
      <Title>Contact us</Title>
      <Detail>
        Consectetur adipiscing elit. Sed pulvinar gravida. Vestibulum blandit facilisis eros, vel ullamcorper ligula
        temporn hac. Eestibulum blandit facilisis eros, temporn facilisis eros, vel ullamcorper ligula temporn hac.
      </Detail>
      <ContactBox>
        <DetailBox>
          <ImgBox>
            <DetailImg src={Call} alt="icon"></DetailImg>
          </ImgBox>
          <DetailText>010-8940-7209</DetailText>
        </DetailBox>
        <DetailBox>
          <ImgBox>
            <DetailImg src={Location} alt="icon"></DetailImg>
          </ImgBox>
          <DetailText>서울특별시 성북구 고려대로24길 56 4층</DetailText>
        </DetailBox>
        <DetailBox>
          <ImgBox>
            <DetailImg src={Mail} alt="icon"></DetailImg>
          </ImgBox>
          <DetailText>blockchainvalley.kor@gmail.com</DetailText>
        </DetailBox>
      </ContactBox>
      <FollowUs>
        <FollowUsTitle>Follow us</FollowUsTitle>
        <FollowUsLogos>
          <FollowUsLogoLink rel="noopener noreferrer" target="_blank" href="https://discord.gg/RFAWQz8S3J">
            <FollowUsLogoImg src={Discord} alt="블록체인 밸리 디스코드"></FollowUsLogoImg>
          </FollowUsLogoLink>
          <FollowUsLogoLink
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.instagram.com/blockchain__valley/">
            <FollowUsLogoImg src={Insta} alt="블록체인 밸리 인스타그램"></FollowUsLogoImg>
          </FollowUsLogoLink>
          <FollowUsLogoLink rel="noopener noreferrer" target="_blank" href="https://medium.com/blockchain-valley">
            <FollowUsLogoImg src={Medium} alt="블록체인 밸리 미디엄"></FollowUsLogoImg>
          </FollowUsLogoLink>
          <FollowUsLogoLink rel="noopener noreferrer" target="_blank" href="https://telegram.org/">
            <FollowUsLogoImg src={Telegram} alt="블록체인 밸리 텔레그램"></FollowUsLogoImg>
          </FollowUsLogoLink>
        </FollowUsLogos>
      </FollowUs>
    </Box>
  );
}

export default ContactDetail;
