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
  margin-top: 13.3rem;
  margin-bottom: 6rem;
`;
export const StyleDiv = styled.div`
  width: 53rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3.3rem;
`;
export const RegionDiv = styled.div`
  width: 16rem;
  height: 5.5rem;
  line-height: 5.5rem;
  font-size: 2rem;
  border: 1px solid #bebebe;
  text-align: center;
  border-radius: 10px;
  :hover {
    background-color: #eeeeee;
  }
  cursor: pointer;
  background-color: ${(props) => (props.clickTag ? "#eeeeee" : "#fffffff")};
`;
export const RestDiv = styled.div`
  width: 53rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3.3rem;
`;
export const JejuRegionDiv = styled.div`
  width: 16rem;
  height: 5.5rem;
  line-height: 5.5rem;
  font-size: 2rem;
  border: 1px solid #bebebe;
  text-align: center;
  border-radius: 10px;
  :hover {
    background-color: #eeeeee;
  }
  margin-right: 37rem;
  margin-bottom: 10.7rem;
  cursor: pointer;
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
    background-color: #eeeeee;
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
    background-color: #eeeeee;
  }
`;
