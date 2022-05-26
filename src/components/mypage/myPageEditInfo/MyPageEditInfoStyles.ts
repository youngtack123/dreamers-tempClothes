import styled from "@emotion/styled";

export const RealMyPageEditInfoWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const MyPageEditInfoWrapper = styled.div`
  margin-top: 2.4rem;
  width: 114.8rem;
  border: 1px solid #bebebe;
  border-radius: 10px;
  padding-top: 2.9rem;
  display: flex;
  width: 114.8rem;
  flex-direction: column;
`;

export const MyPageEditInfoInputDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 7rem;
  margin-bottom: 7rem;
`;

export const MyPageEditInfoInputFlexDiv = styled.div`
  display: flex;
  margin-bottom: 3rem;
  justify-content: space-between;
  align-items: center;
`;

//개인정보 수정 p
export const MyPageEditInfoP = styled.p`
  font-size: 1.8rem;
  font-weight: 600;
`;

//개인 정보 수정 안에 input
export const MyPageEditInfoInputs = styled.input`
  width: 33.6rem;
  height: 4rem;
  :focus {
    outline: 1px solid #b7e576;
  }
  border: 1px solid #bebebe;
  border-radius: 30px;
`;

export const MyPageEditInfoShortInputs = styled.input`
  width: 24.3rem;
  height: 4rem;
  border: 1px solid #bebebe;
  border-radius: 30px;
  margin-right: 1rem;
  :focus {
    outline: 1px solid #b7e576;
  }
`;

//개인정보 수정 안에 입력 값
export const MyPageEditInfoInputsP = styled.p`
  font-weight: 600;
  font-size: 1.6rem;
  margin-right: 2.5rem;
`;

//개인정보 수정 안에 인증번호 전송과 인증하기
export const MyPageEditButton = styled.button`
  width: 8.4rem;
  height: 4rem;
  font-size: 1.3rem;
  background-color: #eeeeee;
  border: 1px solid #bebebe;
  border-radius: 1rem;
  cursor: pointer;
`;

export const MyPageAuthOkButton = styled.button`
  width: 8.4rem;
  height: 4rem;
  font-size: 1.3rem;
  background: #ffea86;
  border: 1px solid #ffdd87;
  border-radius: 10px;
  cursor: pointer;
`;

//개인정보 수정 안에 태그
export const MyPageEditTag = styled.div`
  width: 7.2rem;
  height: 3.2rem;
  background: #eeeeee;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 1rem;
`;

export const MyPageEditTagFlexDiv = styled.div`
  display: flex;
  margin-bottom: 1rem;
`;
export const MyPageWrapperSelectDiv = styled.div`
  display: flex;
`;

export const MyPageAuthNumberP = styled.p`
  font-weight: 500;
  font-size: 1rem;
  line-height: 12px;
  color: #b7e576;
`;

export const MyPageAuthOkTimerDiv = styled.div`
  display: flex;
  align-items: center;
`;

export const MyPageAuthOkTimerP = styled.p`
  font-weight: 500;
  font-size: 10px;
  line-height: 12px;
  color: #b7e576;
`;
