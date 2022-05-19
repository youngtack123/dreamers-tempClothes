import styled from "@emotion/styled";

export const WrapperDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const TitleH1 = styled.h1`
  font-weight: 500;
  font-size: 3rem;
  margin-top: 7.6rem;
  margin-bottom: 9rem;
`;
// ========================================
//                 인풋값 부분
// ========================================
export const InputWrapperDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 4.5rem;
`;
export const ItemInputDiv = styled.div`
  width: 50.1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  /* margin-bottom: 2rem; */
`;
export const ItemNameDiv = styled.div`
  font-weight: 500;
  font-size: 1.9rem;
`;
export const ItemInput = styled.input`
  width: 26rem;
  height: 4rem;
  background: rgba(255, 255, 255, 0.5);
  border: 1px solid #bebebe;
  border-radius: 10px;
  padding: 10px;
  :focus {
    outline: 1px solid #b7e576;
  }
`;
export const ItemLongInput = styled.input`
  width: 41.1rem;
  height: 4rem;
  background: rgba(255, 255, 255, 0.5);
  border: 1px solid #bebebe;
  border-radius: 10px;
  padding: 10px;
  :focus {
    outline: 1px solid #b7e576;
  }
`;
export const SendVerifiButton = styled.button`
  width: 12.1rem;
  height: 4rem;
  line-height: 4rem;
  font-size: 1.4rem;
  background-color: #eeeeee;
  border: none;
  border-radius: 10px;
  cursor: pointer;
`;
export const VerifyButton = styled.button`
  width: 12.1rem;
  height: 4rem;
  line-height: 4rem;
  font-size: 1.2rem;
  background-color: #eeeeee;
  border: none;
  border-radius: 10px;
  cursor: pointer;
`;
export const EmailItemInputDiv = styled.div`
  width: 50.1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-right: 0.8rem;
`;
export const PasswordInputDiv = styled.div`
  width: 51.8rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-right: 2.5rem;
`;
export const PasswordCheckInputDiv = styled.div`
  width: 55.6rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-right: 6rem;
`;
export const VerifyDiv = styled.div`
  width: 51.8rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-right: 1.5rem;
`;
// ========================================
//                 태그 부분
// ========================================
export const TagsDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 6.4rem;
`;
export const GenderTagWrapperDiv = styled.div`
  width: 23.7rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-right: 24rem;
  margin-bottom: 3.5rem;
`;
export const StyleTagWrapperDiv = styled.div`
  width: 34.3rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-right: 16.5rem;
  margin-bottom: 2rem;
`;
export const TagWrapperDiv = styled.div`
  width: 23.7rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const TagBottomLineDiv = styled.div`
  width: 16.2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3.6rem;
  margin-right: 18rem;
`;
export const RegionTagWrapperDiv = styled.div`
  width: 45.1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  margin-right: 9rem;
`;
export const RegionTagBottomLineDiv = styled.div`
  width: 25.3rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-right: 7rem;
`;
export const GenderDiv = styled.div`
  font-size: 2.2rem;
`;
export const TagItemDiv = styled.div`
  width: 7.1rem;
  height: 3.2rem;
  line-height: 3.2rem;
  font-size: 1.4rem;
  border-radius: 50px;
  background-color: #eeeeee;
  text-align: center;
  :hover {
    background-color: #fff2b2;
  }
  cursor: pointer;
`;
// ========================================
//        회원가입 버튼, 이미 회원인가요 부분
// ========================================
export const RestDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 11.8rem;
`;
export const SignupButton = styled.button`
  width: 10rem;
  height: 4rem;
  line-height: 4rem;
  background-color: #eeeeee;
  font-size: 1.8rem;
  color: #bdbdbd;
  border: none;
  border-radius: 10px;
  margin-bottom: 17.1rem;
  cursor: pointer;
`;
export const AlreadyUserDiv = styled.div`
  width: 30rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const AreYouUserDiv = styled.div`
  font-size: 1.8rem;
  color: #bebebe;
`;
export const GoToLoginDiv = styled.div`
  font-size: 1.8rem;
  text-decoration: underline;
  cursor: pointer;
  :hover {
    opacity: 0.6;
  }
`;

export const ErrorTextP = styled.p`
  display: flex;
  flex-direction: column;
  color: red;
  margin: 0rem;
  padding-left: 9rem;
  margin-top: 1rem;
  margin-bottom: 2rem;
`;

export const ErrorTextPassWordP = styled.p`
  display: flex;
  flex-direction: column;
  color: red;
  margin: 0rem;
  padding-left: 11rem;
  margin-top: 1rem;
  margin-bottom: 2rem;
`;

export const ErrorTextPassWordOkP = styled.p`
  display: flex;
  flex-direction: column;
  color: red;
  margin: 0rem;
  padding-left: 15rem;
  margin-top: 1rem;
  margin-bottom: 2rem;
`;

export const ErrorTextAuthP = styled.p`
  display: flex;
  flex-direction: column;
  color: red;
  margin: 0rem;
  padding-left: 11rem;
  margin-top: 1rem;
  margin-bottom: 2rem;
`;
