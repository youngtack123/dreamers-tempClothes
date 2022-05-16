import React from "react";
import * as S from "./MyPageChangePassWordStyle";
const MyPageChangePassWordPresenter = () => {
  return (
    <S.RealMyPageChangePassWordWrapper>
      <S.MyPageChangePassWordWrapper>
        <div style={{ marginLeft: "3rem" }}>
          <S.MyPageChangePassWordP>비밀번호 변경</S.MyPageChangePassWordP>
        </div>

        <S.MyPageChangePassWordInputDiv>
          <S.MyPageChangePassWordInputFlexDiv>
            <S.MyPageChangePassWordInputsP>
              현재 비밀번호
            </S.MyPageChangePassWordInputsP>
            <S.MyPageChangePassWordInputs type="text"></S.MyPageChangePassWordInputs>
          </S.MyPageChangePassWordInputFlexDiv>
          <S.MyPageChangePassWordInputFlexDiv>
            <S.MyPageChangePassWordInputsP>
              변경 비밀번호
            </S.MyPageChangePassWordInputsP>
            <S.MyPageChangePassWordInputs type="text"></S.MyPageChangePassWordInputs>
          </S.MyPageChangePassWordInputFlexDiv>
          <S.MyPageChangePassWordInputFlexDiv
            style={{ marginBottom: "12.8rem" }}
          >
            <S.MyPageChangePassWordInputsP>
              비밀번호 확인
            </S.MyPageChangePassWordInputsP>
            <S.MyPageChangePassWordInputs type="text"></S.MyPageChangePassWordInputs>
          </S.MyPageChangePassWordInputFlexDiv>
        </S.MyPageChangePassWordInputDiv>
        <S.MyPageChangePassWordButtonDiv>
          <S.MyPageChangePassWordButton>변경</S.MyPageChangePassWordButton>
        </S.MyPageChangePassWordButtonDiv>
      </S.MyPageChangePassWordWrapper>
    </S.RealMyPageChangePassWordWrapper>
  );
};

export default MyPageChangePassWordPresenter;
