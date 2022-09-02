import styled from 'styled-components';

const Inner = styled.div`
  margin-top: 108px;
`;

const MainInner = ({ children }) => <Inner>{children}</Inner>;

export default MainInner;
