import React, { useEffect, useState } from "react";
import Timer from "../../lib/timer";
import * as S from "./MyPageEditInfoStyles";
import { useRecoilState } from "recoil";
import { timerState } from "../../common/store/index";
const MyPageEditInfoPresenter = (props) => {
  const [sendAuthNumber] = useRecoilState(timerState);
  const { handleInfo, onClickEventTag, updateUserEditInfo, createPhoneAuth, confirmAuthNumber, authOk, overLapId, overLapNic } = props;
  const [clickStyle, setClickStyle] = useState("");
  const [clickRegionTop, setClickRegionTop] = useState("");
  const [clickRegionBottom, setRegionBottom] = useState("");
  const styleArr = ["캐주얼", "스트릿", "트레이닝", "포멀", "세미포멀"];
  const regionTopArr = ["서울", "경기", "강원", "충북", "충남"];
  const regionBottomArr = ["경북", "경남", "전북", "전남", "제주"];

  const onClickTagStyle = (id) => {
    setClickStyle(id);
  };

  const onClickRegionTop = (id) => {
    setClickRegionTop(id);
  };

  const onClickRegionBottom = (id) => {
    setRegionBottom(id);
  };

  return (
    <S.RealMyPageEditInfoWrapper>
      <S.MyPageEditInfoInputDiv>
        <S.MyPageEditInfoInputFlexDiv>
          <S.MyPageEditInfoInputsP>닉네임</S.MyPageEditInfoInputsP>
          <S.MyPageEditInfoInputs type="text" name="nickname" onChange={handleInfo} />
          <S.CheckButton onClick={overLapNic}>중복확인</S.CheckButton>
        </S.MyPageEditInfoInputFlexDiv>
        <S.MyPageEditInfoInputFlexDiv>
          <S.MyPageEditInfoInputsP>이메일</S.MyPageEditInfoInputsP>
          <S.MyPageEditInfoInputs type="text" name="email" onChange={handleInfo} />
          <S.CheckButton onClick={overLapId}>중복확인</S.CheckButton>
        </S.MyPageEditInfoInputFlexDiv>
        <S.MyPageEditInfoInputFlexDiv>
          <S.MyPageEditInfoInputsP>휴대폰</S.MyPageEditInfoInputsP>
          <S.MyPageEditInfoShortInputs type="text" name="phone" onChange={handleInfo} />
          <S.CheckButton onClick={createPhoneAuth}>인증하기</S.CheckButton>
        </S.MyPageEditInfoInputFlexDiv>
        <S.VerifyNumberDiv>
          <S.MyPageEditInfoInputsP>인증번호</S.MyPageEditInfoInputsP>
          <S.MyPageEditInfoShortInputs type="text" name="authNumber" onChange={handleInfo} />
          <S.CheckButton onClick={confirmAuthNumber}>인증확인</S.CheckButton>
        </S.VerifyNumberDiv>
        {sendAuthNumber && (
          <S.MyPageAuthOkTimerDiv>
            <S.ErrorDiv>{`받으신 인증 번호를 입력해주세요`}</S.ErrorDiv>
            <Timer></Timer>
          </S.MyPageAuthOkTimerDiv>
        )}
        {authOk && <S.MyPageAuthOkTimerDiv>{<S.MyPageAuthOkTimerSpan>인증이 완료되었습니다!</S.MyPageAuthOkTimerSpan>}</S.MyPageAuthOkTimerDiv>}

        <S.StyleDiv>
          <S.MyPageEditInfoInputsP>스타일</S.MyPageEditInfoInputsP>
          {styleArr.map((el, index) => {
            if (el === clickStyle) {
              return (
                <S.MyPageEditTag
                  id="style"
                  onClick={(event) => {
                    onClickEventTag(event), onClickTagStyle(el);
                  }}
                  style={{ background: "#FFF2B2", border: "1px solid #FFDD87" }}
                  key={index}
                >
                  {el}
                </S.MyPageEditTag>
              );
            } else {
              return (
                <S.MyPageEditTag
                  id="style"
                  onClick={(event) => {
                    onClickEventTag(event), onClickTagStyle(el);
                  }}
                  key={index}
                >
                  {el}
                </S.MyPageEditTag>
              );
            }
          })}
        </S.StyleDiv>

        <S.RegionTopDiv>
          <S.MyPageEditInfoInputsP>거주지역</S.MyPageEditInfoInputsP>
          {regionTopArr.map((el, index) => {
            if (el === clickRegionTop) {
              return (
                <S.MyPageEditTag
                  id="region"
                  onClick={(event) => {
                    onClickEventTag(event), onClickRegionTop(el);
                  }}
                  key={index}
                  style={{ background: "#FFF2B2", border: "1px solid #FFDD87" }}
                >
                  {el}
                </S.MyPageEditTag>
              );
            } else {
              return (
                <S.MyPageEditTag
                  id="region"
                  onClick={(event) => {
                    onClickEventTag(event), onClickRegionTop(el);
                  }}
                  key={index}
                >
                  {el}
                </S.MyPageEditTag>
              );
            }
          })}
        </S.RegionTopDiv>

        <S.RegionBottomDiv>
          <S.MyPageEditInfoInputsP style={{ color: "white" }}>거주지역</S.MyPageEditInfoInputsP>
          {regionBottomArr.map((el, index) => {
            if (el === clickRegionBottom) {
              return (
                <S.MyPageEditTag
                  id="region"
                  onClick={(event) => {
                    onClickEventTag(event), onClickRegionBottom(el);
                  }}
                  key={index}
                  style={{ background: "#FFF2B2", border: "1px solid #FFDD87" }}
                >
                  {el}
                </S.MyPageEditTag>
              );
            } else {
              return (
                <S.MyPageEditTag
                  id="region"
                  onClick={(event) => {
                    onClickEventTag(event), onClickRegionBottom(el);
                  }}
                  key={index}
                >
                  {el}
                </S.MyPageEditTag>
              );
            }
          })}
        </S.RegionBottomDiv>

        {authOk ? <S.MyPageAuthOkButton onClick={updateUserEditInfo}>저장</S.MyPageAuthOkButton> : <S.MyPageEditButton>저장</S.MyPageEditButton>}
      </S.MyPageEditInfoInputDiv>
    </S.RealMyPageEditInfoWrapper>
  );
};

export default MyPageEditInfoPresenter;
