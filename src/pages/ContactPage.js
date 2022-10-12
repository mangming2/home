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
