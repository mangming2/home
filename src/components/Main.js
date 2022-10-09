import styled from 'styled-components';

const Inner = styled.main`
  margin-top: 108px;
  padding: 0, 11.7vw;
`;

const Main = ({ children }) => <Inner>{children}</Inner>;

export default Main;
