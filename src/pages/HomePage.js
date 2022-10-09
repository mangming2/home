import styled from 'styled-components';
import Main from '../components/Main';
import MediumCard from '../components/MediumCard';

const MainImg = styled.div`
  background-color: black;
  height: 100vh;
`;

const HomePage = () => (
  <Main>
    <MainImg />
    <MediumCard />
  </Main>
);

export default HomePage;
