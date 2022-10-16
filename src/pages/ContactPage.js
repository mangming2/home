import styled from 'styled-components';
import Main from '../components/Main';
import EmailToUs from '../components/EmailToUs';
import ContactDetail from '../components/ContactDetail';
import Footer from '../components/Footer';

const ContactBox = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 1rem 11.7vw 0 11.7vw;
  margin-top: 15vh;

  @media all and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 0rem 5vw 0 5vw;
    margin-top: 0vh;
  }
`;

const ContactPage = () => (
  <Main>
    <ContactBox>
      <ContactDetail />
      <EmailToUs />
    </ContactBox>
    <Footer />
  </Main>
);

export default ContactPage;
