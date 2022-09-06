import styled from 'styled-components';

const Inner = styled.main`
  margin-top: 108px;
  height: 1000px;
`;

const Main = ({ children }) => <Inner>{children}</Inner>;

export default Main;
