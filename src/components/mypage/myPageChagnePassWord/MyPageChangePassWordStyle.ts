import styled from "@emotion/styled";

export const MyPageChangePassWordWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: 30px;
  height: 577px;
`;

export const MyPageChangePassWordInputDiv = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  margin-top: 4rem;
`;

export const MyPageChangePassWordInputFlexDiv = styled.div`
  width: 336px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

//개인정보 수정 p
export const MyPageChangePassWordP = styled.p`
  font-size: 1.8rem;
  font-weight: 600;
`;

//비밀번호 변경 안에 input
export const MyPageChangePassWordInputs = styled.input`
  width: 250px;
  height: 40px;
  border: 1px solid #bebebe;
  border-radius: 30px;
  :focus {
    outline: 1px solid #b7e576;
  }
  padding: 10px;
`;

//비밀번호 변경 안에 입력 값
export const MyPageChangePassWordInputsP = styled.p`
  font-weight: 500;
  font-size: 13px;
`;

export const MyPageChangePassWordButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 4rem;
`;

// export const MyPageChangePassWordButton = styled.button`
//   width: 70px;
//   height: 35px;
//   background-color: #eeeeee;
//   color: #b2b2b2;
//   border-radius: 10px;
//   border: none;
// `;

export const MyPageChangePassWordOkButton = styled.button`
  width: 70px;
  height: 35px;
  background: #eeeeee;
  border: none;
  border-radius: 30px;
  font-size: 14px;
  color: #b2b2b2;
  cursor: pointer;
`;
export const MyPageWrapperSelectDiv = styled.div`
  display: flex;
`;
export const PWChangeOKButton = styled.button`
  width: 70px;
  height: 35px;
  background: #ffea86;
  border: 1px solid #ffdd87;
  border-radius: 30px;
  cursor: pointer;
`;
