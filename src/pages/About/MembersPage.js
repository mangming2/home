import { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const generationCnt = 2;
const generations = [];
for (let i = 1; i <= generationCnt; i++) {
  generations.push(i);
}

const MembersPage = () => {
  const [selectedGeneration, setSelectedGenereation] = useState('1');
  const [nodeData, setNodeData] = useState(-1);

  const generationClickHandler = event => {
    setSelectedGenereation(event.target.id);
  };

  const loadData = () => {
    fetchData(parseInt(selectedGeneration, 10));
  };

  const fetchData = gen => {
    axios
      .get(`http://203.229.173.93:81/nodeInfo?generation=${gen}&image=y`)
      .then(res => {
        setNodeData(res.data);
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    loadData();
    console.log(nodeData);
  }, [selectedGeneration]);

  return (
    <Container>
      <NavList>
        {generations.map(el => (
          <NavItem
            key={el}
            id={el}
            className={el === parseInt(selectedGeneration, 10) ? 'isActive' : ''}
            onClick={generationClickHandler}>
            {`${el}th`}
          </NavItem>
        ))}
      </NavList>

      {nodeData === -1 ? (
        <Loading>Loding~</Loading>
      ) : (
        <MembersContainer>
          {nodeData.map((node, idx) => (
            <Card key={idx}>
              <Img src={node.IMAGE_LINK} alt={node.NAME} />
              <NameContainer>
                <NameTxt>{node.NAME}</NameTxt>
                <InfoTxt>
                  {node.GENERATION}th | {node.ROLE === 'dev' ? '개발팀' : '리서치팀'}
                </InfoTxt>
              </NameContainer>
              {/* 데이터 베이스에 데이터 추가후 아래 부분 수정할것 */}
              <ContactlTxt>jinseongbe@gmail.com</ContactlTxt>
              <ContactlTxt>github</ContactlTxt>
              <ContactlTxt>instagram</ContactlTxt>
            </Card>
          ))}
        </MembersContainer>
      )}
    </Container>
  );
};

const Container = styled.div`
  margin: 5vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MembersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Card = styled.div`
  padding: 25px;
  width: 300px;
  height: 478px;
  margin: 2rem;
  background-color: rgba(217, 217, 217, 0.2);
  box-shadow: 0px 0px 35px 11px rgba(255, 255, 255, 0.2);
  border-radius: 44px;
  display: flex;
  flex-direction: column;
  align-items: left;
`;

const NameContainer = styled.div`
  width: 251px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 25px;
`;

const NameTxt = styled.div`
  font-style: normal;
  font-weight: 300;
  font-size: 30px;
  line-height: 36px;
`;

const InfoTxt = styled.div`
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 24px;
  display: flex;
  align-items: center;
  color: #ffffff;
`;

const ContactlTxt = styled.div`
  width: 163px;
  height: 18px;
  font-style: normal;
  font-weight: 300;
  font-size: 15px;
  line-height: 18px;
  display: flex;
  align-items: center;
  color: #ffffff;
  margin-bottom: 13px;
`;

const Img = styled.img`
  width: 251px;
  height: 247px;
  border-radius: 33px;
  object-fit: cover;
  margin-bottom: 25px;
`;

const Loading = styled.div`
  margin: 10rem;
  font-size: 3rem;
  font-weight: bold;
`;

const NavList = styled.ul`
  margin-top: 5vh;
  height: 6rem;
  width: 50vw;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const NavItem = styled.li`
  font-size: 3rem;
  font-weight: 500;
  cursor: pointer;
  height: 3rem;
  color: rgba(255, 255, 255, 0.6);
  text-shadow: 0px 0px 50px rgba(6, 61, 215, 0.8);

  &:hover {
    color: rgba(255, 255, 255, 1);
  }

  &.isActive {
    text-shadow: 0px 8px 43px rgba(19, 72, 224, 0.75);
    color: #ffffff;
  }

  & + & {
    margin-left: 2rem;
  }
`;

export default MembersPage;
