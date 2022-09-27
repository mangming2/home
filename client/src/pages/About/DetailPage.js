import styled from 'styled-components';

const H2 = styled.h2`
  margin-top: 100px;
  font-weight: 500;
  font-size: 36px;
  text-align: center;
  color: #ffffff;
`;

const H3 = styled.h3`
  font-weight: 700;
  font-size: 32px;
  margin-top: 200px;
  margin-left: 80px;
`;

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
`;

const DetailItem = styled.p`
  font-weight: 300;
  font-size: 32px;
  line-height: 39px;
  text-align: center;

  & + & {
    margin-top: 32px;
  }
`;
const DetailPage = () => (
  <>
    <H2>“다가올 WEB 3.0의 미래를 함께 만들어나갈 혁신가들의 공간”</H2>
    <DetailContainer>
      <DetailItem># 블록체인밸리(Blockchain Valley)는 고려대학교를 기반으로 활동하는 블록체인 학회입니다.</DetailItem>
      <DetailItem>
        # WEB 3.0의 진정한 가치를 학습하는 공간이자, 블록체인을 통해 미래를 위한 준비를 하는 공간입니다.
      </DetailItem>
      <DetailItem>
        # 구성원(node)간의 수평적 문화를 지향하며, 고려대학교 구성원 외에도 <br />
        나이, 소속, 출신에 제한 없이 누구나 함께 할 수 있습니다.
      </DetailItem>
    </DetailContainer>
    <H3>학회 라운지</H3>
  </>
);

export default DetailPage;
