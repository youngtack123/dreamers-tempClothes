import styled from "@emotion/styled";
import { useRouter } from "next/router";

const RestWrapperDiv = styled.div`
  height: 8.9rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: #ffffff;
  border-bottom: 1px solid #bebebe;
`;
const WordsDiv = styled.div`
  font-size: 1.4rem;
  color: rgba(0, 0, 0, 0.5);
  margin-left: 12.3rem;
`;
const MainLogoImg = styled.img`
  width: 5rem;
  height: 4.2rem;
  margin-right: 11.8rem;
  cursor: pointer;
`;

const HeaderForTheRest = () => {
  const router = useRouter();

  const MoveToLanding = () => {
    router.push("/");
  };

  return (
    <RestWrapperDiv>
      <WordsDiv>기온에 맞는 옷을 입고 싶은 날</WordsDiv>
      <MainLogoImg src="/images/mainlogo.png" onClick={MoveToLanding} />
    </RestWrapperDiv>
  );
};

export default HeaderForTheRest;
