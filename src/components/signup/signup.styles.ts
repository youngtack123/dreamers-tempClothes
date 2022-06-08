import styled from "@emotion/styled";

export const Body = styled.body`
  padding-bottom: 10rem;
`;

export const WrapperDiv = styled.div`
  width: 62rem;
  height: 77.4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  border: 1px solid #bebebe;
  border-radius: 10px;
  margin: 0 auto;
  margin-top: 7.9rem;
`;
export const TitleH1 = styled.h1`
  font-weight: 500;
  font-size: 1.6rem;
  margin-top: 4.3rem;
  margin-bottom: 5.1rem;
  color: #333333;
`;
// ========================================
//                 인풋값 부분
// ========================================
export const InputWrapperDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 3.9rem;
`;
export const ItemInputDiv = styled.div`
  width: 34.9rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const ItemNameDiv = styled.div`
  font-weight: 500;
  font-size: 1.2rem;
`;
export const ItemInput = styled.input`
  width: 20rem;
  height: 3.5rem;
  background: rgba(255, 255, 255, 0.5);
  border: 1px solid #bebebe;
  border-radius: 3rem;
  padding: 10px;
  :focus {
    outline: 1px solid #b7e576;
  }
  ::placeholder {
    font-size: 1rem;
    color: #dddddd;
  }
`;
export const ItemLongInput = styled.input`
  width: 20rem;
  height: 3.5rem;
  background: rgba(255, 255, 255, 0.5);
  border: 1px solid #bebebe;
  border-radius: 3rem;
  padding: 10px;
  :focus {
    outline: 1px solid #b7e576;
  }
  ::placeholder {
    font-size: 1rem;
    color: #dddddd;
  }
`;
export const SendVerifiButton = styled.button`
  width: 8rem;
  height: 3rem;
  line-height: 3rem;
  font-size: 1.2rem;
  background-color: #eeeeee;
  border: none;
  border-radius: 1rem;
  cursor: pointer;
`;
export const VerifyButton = styled.button`
  width: 8rem;
  height: 3rem;
  line-height: 3rem;
  font-size: 1.2rem;
  background-color: #eeeeee;
  border: none;
  border-radius: 1rem;
  cursor: pointer;
`;
export const EmailItemInputDiv = styled.div`
  width: 50.1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const PasswordInputDiv = styled.div`
  width: 26.1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-right: 10.8rem;
`;
export const PasswordCheckInputDiv = styled.div`
  width: 28.5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-right: 12.8rem;
`;
export const VerifyDiv = styled.div`
  width: 36.1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-right: 1rem;
`;
// ========================================
//                 태그 부분
// ========================================
export const TagsDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 4.2rem;
`;
export const GenderTagWrapperDiv = styled.div`
  width: 15.2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-right: 17.5rem;
  margin-bottom: 1.5rem;
`;
export const StyleTagWrapperDiv = styled.div`
  width: 34.4rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.6rem;
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
  width: 35.4rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-right: 1rem;
  margin-bottom: 1.5rem;
`;

export const RegionTagContentDiv = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const RegionDiv = styled.div`
  font-size: 1.2rem;
  padding-bottom: 3.5rem;
  width: 10rem;
`;

export const GenderDiv = styled.div`
  font-size: 1.2rem;
  padding-right: 1rem;
`;
export const TagItemDiv = styled.div`
  width: 5rem;
  height: 2rem;
  margin-bottom: 1rem;
  line-height: 2rem;
  font-size: 1.1rem;
  border-radius: 5rem;
  background-color: #eeeeee;
  text-align: center;
  :hover {
    background: #fff2b2;
    border: 1px solid #ffdd87;
  }
  cursor: pointer;
`;
export const StyleSpan = styled.span`
  font-weight: 500;
  font-size: 1.1rem;
  color: #333333;
`;
// ========================================
//        회원가입 버튼, 이미 회원인가요 부분
// ========================================
export const RestDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const SignupButton = styled.button`
  width: 8rem;
  height: 3rem;
  line-height: 3rem;
  background: #fff2b2;
  font-size: 1.4rem;
  color: #333;
  border: none;
  border-radius: 3rem;
  margin-bottom: 4.1rem;
  cursor: pointer;
`;
export const AlreadyUserDiv = styled.div`
  width: 26.4rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4.4rem;
`;
export const AreYouUserDiv = styled.div`
  font-size: 1.2rem;
  color: #bebebe;
`;
export const GoToLoginDiv = styled.div`
  font-size: 1.2rem;
  text-decoration: underline;
  cursor: pointer;
  :hover {
    opacity: 0.6;
  }
`;

export const ErrorTextEmailP = styled.p`
  display: flex;
  flex-direction: column;
  color: #e57676;
  margin: 0rem;
  padding-left: 5.5rem;
  padding-top: 0.5rem;
  margin-bottom: 1.5rem;
  font-size: 1rem;
`;

export const ErrorTextP = styled.p`
  display: flex;
  flex-direction: column;
  color: #e57676;
  margin: 0rem;
  padding-right: 15rem;
  padding-top: 0.5rem;
  margin-bottom: 1.5rem;
  font-size: 1rem;
`;

export const ErrorTextPassWordP = styled.p`
  display: flex;
  flex-direction: column;
  color: #e57676;
  margin: 0rem;
  padding-left: 6.5rem;
  padding-top: 0.5rem;
  margin-bottom: 1.5rem;
  font-size: 1rem;
`;

export const ErrorTextPassWordOkP = styled.p`
  display: flex;
  flex-direction: column;
  color: #e57676;
  margin: 0rem;
  padding-left: 9rem;
  padding-top: 0.5rem;
  margin-bottom: 1.5rem;
  font-size: 1rem;
`;
export const ErrorTextPhoneP = styled.p`
  display: flex;
  flex-direction: column;
  color: #e57676;
  margin: 0rem;
  padding-left: 5.5rem;
  padding-top: 0.5rem;
  margin-bottom: 1.5rem;
  font-size: 1rem;
`;

export const ErrorTextAuthP = styled.p`
  display: flex;
  flex-direction: column;
  color: #e57676;
  margin: 0rem;
  padding-right: 15rem;
  margin-bottom: 2rem;
  font-size: 1rem;
  margin-left: 6.5rem;
  padding-top: 0.5rem;
`;

export const MyPageAuthOkTimerDiv = styled.div`
  display: flex;
  justify-content: center;
`;

export const MyPageAuthOkTimerP = styled.p`
  font-weight: 500;
  font-size: 1.1rem;
  line-height: 1.1rem;
  color: #44bd48;
  margin: 0;
`;

export const SignUpAuthOkTimerP = styled.p`
  font-weight: 500;
  font-size: 1.1rem;
  line-height: 1.1rem;
  color: #e57676;
  margin: 0;
`;
export const MyPageAuthOkP = styled.p`
  font-weight: 500;
  font-size: 1.1rem;
  line-height: 1.1rem;
  color: rgba(68, 189, 72, 0.8);
`;
