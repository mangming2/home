import styled from 'styled-components';
import Main from '../components/Main';
import EmailToUs from '../components/EmailToUs';
import ContactDetail from '../components/ContactDetail';

const ContactBox = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-left: 5vw;
`;

const ContactPage = () => (
  <Main>
    <ContactBox>
      <ContactDetail />
      <EmailToUs />
    </ContactBox>
  </Main>
);

export default ContactPage;
