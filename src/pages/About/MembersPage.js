import { useState } from 'react';
import styled from 'styled-components';
import { supabase } from '../../supabase';

const generationCnt = 2;
const generations = [];
for (let i = 1; i <= generationCnt; i++) {
  generations.push(i);
}

const MembersPage = () => {
  // 리스트 넣고, id값으로 관리
  // click event 있으면, 그 노드의 목록을 가져온다.
  // 컴포넌트 main -> sideNav + 목록
  const [selectedGeneration, setSelectedGenereation] = useState(1);

  const generationClickHandler = event => {
    setSelectedGenereation(event.target.id);
  };

  const getNodeInfo = async (generation, role) => {
    try {
      const { data, error, status } = await supabase
        .from('NODE')
        .select(
          `
          node_id, 
          name, 
          generation,
          role,
          image
        `
        )
        .match({ generation, role });

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      console.log('done');
    }
  };

  getNodeInfo(selectedGeneration, 'dev');

  return (
    <section style={{ display: 'flex' }}>
      <SideNav>
        <NavList>
          {generations.map(el => (
            <NavItem
              key={el}
              id={el}
              className={el === parseInt(selectedGeneration, 10) ? 'isActive' : ''}
              onClick={generationClickHandler}>{`${el}기`}</NavItem>
          ))}
        </NavList>
      </SideNav>
      <MembersContainer></MembersContainer>
    </section>
  );
};

const SideNav = styled.aside`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
`;

const NavItem = styled.li`
  border-bottom: 1px solid #fff;
  cursor: pointer;
  height: 3rem;
  &.isActive {
    color: red;
  }
`;

const MembersContainer = styled.div`
  flex: 2;
  height: 30%;
  width: 50%;
`;

export default MembersPage;
