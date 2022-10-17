import styled from 'styled-components';

const Inner = styled.main`
  margin-top: 6.75rem;
  padding: 0, 11.7vw;
  @media all and (max-width: 768px) {
    margin-top: 5rem;
    padding: 0, 5vw;
  }
`;

const Main = ({ children }) => <Inner>{children}</Inner>;

export default Main;
