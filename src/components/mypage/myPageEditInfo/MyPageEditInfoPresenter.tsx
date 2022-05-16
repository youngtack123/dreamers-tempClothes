import React from "react";
import * as S from "./MyPageEditInfoStyles";
const MyPageEditInfoPresenter = () => {
  return (
    <S.RealMyPageEditInfoWrapper>
      <S.MyPageEditInfoWrapper>
        <div style={{ paddingLeft: "3rem" }}>
          <S.MyPageEditInfoP>개인정보 수정</S.MyPageEditInfoP>
        </div>

        <S.MyPageEditInfoInputDiv>
          <S.MyPageEditInfoInputFlexDiv>
            <S.MyPageEditInfoInputsP>닉네임</S.MyPageEditInfoInputsP>
            <S.MyPageEditInfoInputs type="text"></S.MyPageEditInfoInputs>
          </S.MyPageEditInfoInputFlexDiv>
          <S.MyPageEditInfoInputFlexDiv>
            <S.MyPageEditInfoInputsP>이메일</S.MyPageEditInfoInputsP>
            <S.MyPageEditInfoInputs type="text"></S.MyPageEditInfoInputs>
          </S.MyPageEditInfoInputFlexDiv>
          <S.MyPageEditInfoInputFlexDiv>
            <S.MyPageEditInfoInputsP>전화번호</S.MyPageEditInfoInputsP>
            <S.MyPageEditInfoShortInputs type="text"></S.MyPageEditInfoShortInputs>
            <S.MyPageEditButton>인증번호 전송</S.MyPageEditButton>
          </S.MyPageEditInfoInputFlexDiv>
          <S.MyPageEditInfoInputFlexDiv>
            <S.MyPageEditInfoInputsP>인증번호</S.MyPageEditInfoInputsP>
            <S.MyPageEditInfoShortInputs type="text"></S.MyPageEditInfoShortInputs>
            <S.MyPageEditButton>인증하기</S.MyPageEditButton>
          </S.MyPageEditInfoInputFlexDiv>
          <S.MyPageEditInfoInputFlexDiv style={{ marginBottom: "0px" }}>
            <S.MyPageEditInfoInputsP style={{ marginBottom: "7rem" }}>
              지역
            </S.MyPageEditInfoInputsP>
            <div>
              <S.MyPageEditTagFlexDiv>
                <S.MyPageEditTag>#서울</S.MyPageEditTag>
                <S.MyPageEditTag>#강원</S.MyPageEditTag>
                <S.MyPageEditTag>#전라</S.MyPageEditTag>
                <S.MyPageEditTag>#제주</S.MyPageEditTag>
              </S.MyPageEditTagFlexDiv>
              <S.MyPageEditTagFlexDiv>
                <S.MyPageEditTag>#경기</S.MyPageEditTag>
                <S.MyPageEditTag>#충청</S.MyPageEditTag>
                <S.MyPageEditTag>#경상</S.MyPageEditTag>
              </S.MyPageEditTagFlexDiv>
            </div>
          </S.MyPageEditInfoInputFlexDiv>
          <S.MyPageEditInfoInputFlexDiv>
            <S.MyPageEditInfoInputsP style={{ paddingLeft: "7rem" }}>
              스타일
            </S.MyPageEditInfoInputsP>
            <S.MyPageEditTag>#캐주얼</S.MyPageEditTag>
            <S.MyPageEditTag>#스트릿</S.MyPageEditTag>
            <S.MyPageEditTag>#트레이닝</S.MyPageEditTag>
            <S.MyPageEditTag>#포멀</S.MyPageEditTag>
            <S.MyPageEditTag>#세미포멀</S.MyPageEditTag>
          </S.MyPageEditInfoInputFlexDiv>
        </S.MyPageEditInfoInputDiv>
      </S.MyPageEditInfoWrapper>
    </S.RealMyPageEditInfoWrapper>
  );
};

export default MyPageEditInfoPresenter;
