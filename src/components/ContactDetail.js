import styled from 'styled-components';
import Call from '../assets/call.svg';
import Location from '../assets/location.svg';
import Mail from '../assets/mail.svg';
import Discord from '../assets/discord.svg';
import Insta from '../assets/instagram.svg';
// import Telegram from '../assets/telegram.svg';
import Medium from '../assets/medium.svg';

const Box = styled.div`
  width: 30vw;
  margin: 0 5vw 10vh 0;
  display: flex;
  flex-direction: column;

  @media all and (max-width: 768px) {
    width: 90vw;
    margin: 0 5vw 10vh 5vw;
    /* height: 100vh; */
    margin: 0;
    display: flex;
    flex-direction: column;
  }
`;

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
`;

const Title = styled.p`
  font-size: 2.5rem;
  font-weight: 500;
  /* margin: 0px 0px 20px 15px; */
`;

const Detail = styled.p`
  font-weight: 300;
  font-size: 1.2rem;
  margin-top: 1rem;
  line-height: 150%;
  word-break: keep-all;
  @media all and (max-width: 768px) {
    width: 90vw;
    margin-top: 2rem;
    white-space: pre-line;
  }
`;

const FollowUs = styled(FooterContainer)`
  margin-top: 15vh;
  @media all and (max-width: 768px) {
    width: 100%;
    margin-top: 1vh;
  }
`;

const FollowUsLogos = styled.div`
  display: flex;
  /* margin-top: 10px; */
  @media all and (max-width: 768px) {
    margin-top: 1rem;
    display: flex;
    flex-direction: row;
    align-items: left;
    justify-content: center;
  }
`;

const FollowUsLogoImg = styled.img`
  width: 2rem;
  height: 2rem;
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
    margin-left: 0.3vw;
  }
`;

const ContactBox = styled.div`
  height: 8rem;
  margin-top: 10vh;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: space-between;

  @media all and (max-width: 768px) {
    height: 9rem;
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: space-between;
  }
`;

const DetailBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
  @media all and (max-width: 768px) {
    margin-top: 1rem;
  }
`;

const ImgBox = styled.div`
  width: 2rem;
  text-align: left;
`;

const DetailImg = styled.img`
  height: 1.2rem;
  /* padding-right: 0.5rem; */
`;

const DetailText = styled.p`
  max-width: 25vw;
  font-weight: 300;
  font-size: 1.2rem;
  display: inline;
  @media all and (max-width: 768px) {
    max-width: 100vw;
    font-weight: 300;
    font-size: 1.2rem;
    display: inline;
    line-height: 150%;
  }
`;

const DetailTextLink = styled.a`
  max-width: 25vw;
  font-weight: 300;
  font-size: 1.2rem;
  display: inline;
  line-height: 150%;
  word-break: keep-all;
  @media all and (max-width: 768px) {
    max-width: 100vw;
    font-weight: 300;
    font-size: 1.2rem;
    display: inline;
    line-height: 150%;
  }
`;

const ContentsContainer = styled.div`
  /* margin-bottom: 7vh; */
`;

function ContactDetail() {
  return (
    <Box>
      <ContentsContainer>
        <Title>Contact us</Title>
        <Detail>
          WEB3의 진정한 가치를 학습하는 공간 블록체인밸리입니다. 블록체인밸리와의 파트너십 및 협력 혹은 요청 사항이
          있으시다면 언제든지 편하게 연락주세요.
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
            <DetailTextLink rel="noopener noreferrer" href="http://kko.to/En-xxmhJh" target="_blank">
              서울특별시 성북구 고려대로 24길 56 4층
            </DetailTextLink>
          </DetailBox>
          <DetailBox>
            <ImgBox>
              <DetailImg src={Mail} alt="icon"></DetailImg>
            </ImgBox>
            <DetailTextLink rel="noopener noreferrer" href="mailto: blockchainvalley.kor@gmail.com">
              blockchainvalley.kor@gmail.com
            </DetailTextLink>
          </DetailBox>
        </ContactBox>
      </ContentsContainer>
      <FollowUs>
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
          {/* <FollowUsLogoLink rel="noopener noreferrer" target="_blank" href="https://telegram.org/">
            <FollowUsLogoImg src={Telegram} alt="블록체인 밸리 텔레그램"></FollowUsLogoImg>
          </FollowUsLogoLink> */}
        </FollowUsLogos>
      </FollowUs>
    </Box>
  );
}

export default ContactDetail;
