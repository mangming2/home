import Main from '../components/Main';
import EmailToUs from '../components/EmailToUs';
import ContactDetail from '../components/ContactDetail';
import Modal from '../components/Modal';

const ContactPage = () => (
  <Main>
    <ContactDetail />
    <EmailToUs />
    <Modal />
  </Main>
);

export default ContactPage;
