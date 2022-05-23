import styled from "@emotion/styled";

export const WrapperDiv = styled.div`
  height: 102.4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.26) 52.07%, rgba(183, 229, 118, 0.34) 100%);
`;
export const ItemWrapperDiv = styled.div`
  width: 65rem;
  height: 65rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ffffff;
  border: 1px solid #bebebe;
  border-radius: 10px;
`;
export const QuestionDiv = styled.div`
  font-size: 1.9rem;
  margin-top: 16.7rem;
  margin-bottom: 7.9rem;
`;
export const ButtonDiv = styled.div`
  width: 35rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 23.6rem;
`;
export const ManButton = styled.button`
  width: 16rem;
  height: 5.5rem;
  line-height: 5.5rem;
  font-size: 2rem;
  background-color: white;
  border: 1px solid #bebebe;
  border-radius: 10px;
  :hover {
    background-color: #ffea86;
  }
`;
export const AreYouUserDiv = styled.div`
  width: 26.9rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const AlreadyUserDiv = styled.div`
  font-size: 1.6rem;
  color: #7e7272;
`;
export const GoToLoginDiv = styled.div`
  font-size: 1.6rem;
  text-decoration: underline;
  cursor: pointer;
  :hover {
    opacity: 0.6;
  }
`;
export const PrevNextDiv = styled.div`
  width: 53.2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4rem;
`;
export const PrevButton = styled.button`
  width: 4rem;
  height: 4rem;
  background-color: white;
  font-size: 2rem;
  color: #bebebe;
  border: 1px solid #bebebe;
  border-radius: 50%;
  :hover {
    background-color: #ffea86;
  }
`;
export const NextButton = styled.button`
  width: 4rem;
  height: 4rem;
  background-color: white;
  font-size: 2rem;
  color: #bebebe;
  border: 1px solid #bebebe;
  border-radius: 50%;
  :hover {
    background-color: #ffea86;
  }
`;
