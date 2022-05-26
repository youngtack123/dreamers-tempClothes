import React from "react";
import * as S from "./MyPageChangePassWordStyle";
const MyPageChangePassWordPresenter = (props) => {
  const { changePasswordFunc, handlePassword, inputs } = props;
  return (
    <S.RealMyPageChangePassWordWrapper>
      <S.MyPageChangePassWordInputDiv>
        <S.MyPageChangePassWordInputFlexDiv>
          <S.MyPageChangePassWordInputsP>현재 비밀번호</S.MyPageChangePassWordInputsP>
          <S.MyPageChangePassWordInputs type="text" name="originPassword" onChange={handlePassword}></S.MyPageChangePassWordInputs>
        </S.MyPageChangePassWordInputFlexDiv>
        <S.MyPageChangePassWordInputFlexDiv>
          <S.MyPageChangePassWordInputsP>변경 비밀번호</S.MyPageChangePassWordInputsP>
          <S.MyPageChangePassWordInputs type="text" name="changePassword" onChange={handlePassword}></S.MyPageChangePassWordInputs>
        </S.MyPageChangePassWordInputFlexDiv>
        <S.MyPageChangePassWordInputFlexDiv>
          <S.MyPageChangePassWordInputsP>비밀번호 확인</S.MyPageChangePassWordInputsP>
          <S.MyPageChangePassWordInputs type="text" name="passwordOk" onChange={handlePassword}></S.MyPageChangePassWordInputs>
        </S.MyPageChangePassWordInputFlexDiv>
      </S.MyPageChangePassWordInputDiv>
      <S.MyPageChangePassWordButtonDiv>
        {inputs.changePassword === inputs.passwordOk ? <S.MyPageChangePassWordOkButton>변경</S.MyPageChangePassWordOkButton> : <S.MyPageChangePassWordButton>변경</S.MyPageChangePassWordButton>}
      </S.MyPageChangePassWordButtonDiv>
    </S.RealMyPageChangePassWordWrapper>
  );
};

export default MyPageChangePassWordPresenter;
