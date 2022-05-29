import React from "react";
import * as S from "./MyPageChangePassWordStyle";
const MyPageChangePassWordPresenter = (props) => {
  const { changePasswordFunc, handlePassword, inputs } = props;
  return (
    <S.MyPageChangePassWordWrapper>
      <S.MyPageChangePassWordInputDiv>
        <S.MyPageChangePassWordInputFlexDiv>
          <S.MyPageChangePassWordInputsP>현재 비밀번호</S.MyPageChangePassWordInputsP>
          <S.MyPageChangePassWordInputs type="password" name="originPassword" onChange={handlePassword} value={props.inputs.originPassword} />
        </S.MyPageChangePassWordInputFlexDiv>
        <S.MyPageChangePassWordInputFlexDiv>
          <S.MyPageChangePassWordInputsP>변경 비밀번호</S.MyPageChangePassWordInputsP>
          <S.MyPageChangePassWordInputs type="password" name="changePassword" onChange={handlePassword} value={props.inputs.changePassword} />
        </S.MyPageChangePassWordInputFlexDiv>
        <S.MyPageChangePassWordInputFlexDiv>
          <S.MyPageChangePassWordInputsP>비밀번호 확인</S.MyPageChangePassWordInputsP>
          <S.MyPageChangePassWordInputs type="password" name="passwordOk" onChange={handlePassword} value={props.inputs.passwordOk} />
        </S.MyPageChangePassWordInputFlexDiv>
      </S.MyPageChangePassWordInputDiv>
      <S.MyPageChangePassWordButtonDiv>
        {inputs.changePassword === inputs.passwordOk ? (
          <S.PWChangeOKButton onClick={changePasswordFunc}>저장</S.PWChangeOKButton>
        ) : (
          <S.MyPageChangePassWordOkButton>저장</S.MyPageChangePassWordOkButton>
        )}
      </S.MyPageChangePassWordButtonDiv>
    </S.MyPageChangePassWordWrapper>
  );
};

export default MyPageChangePassWordPresenter;
