import React from "react";
import Timer from "../../lib/timer";
import * as S from "./MyPageEditInfoStyles";
import { useRecoilState } from "recoil";
import { timerState } from "../../common/store/index";
const MyPageEditInfoPresenter = (props) => {
  const [sendAuthNumber] = useRecoilState(timerState);
  const { handleInfo, onClickEventTag, updateUserEditInfo, createPhoneAuth, confirmAuthNumber, authOk, overLapId, overLapNic } = props;

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

          <S.MyPageEditTag id="style" onClick={onClickEventTag}>
            캐주얼
          </S.MyPageEditTag>
          <S.MyPageEditTag id="style" onClick={onClickEventTag}>
            스트릿
          </S.MyPageEditTag>
          <S.MyPageEditTag id="style" onClick={onClickEventTag}>
            트레이닝
          </S.MyPageEditTag>
          <S.MyPageEditTag id="style" onClick={onClickEventTag}>
            포멀
          </S.MyPageEditTag>
          <S.MyPageEditTag id="style" onClick={onClickEventTag}>
            세미포멀
          </S.MyPageEditTag>
        </S.StyleDiv>

        <S.RegionTopDiv>
          <S.MyPageEditInfoInputsP>거주지역</S.MyPageEditInfoInputsP>

          <S.MyPageEditTag id="region" onClick={onClickEventTag}>
            서울
          </S.MyPageEditTag>
          <S.MyPageEditTag id="region" onClick={onClickEventTag}>
            경기
          </S.MyPageEditTag>
          <S.MyPageEditTag id="region" onClick={onClickEventTag}>
            강원
          </S.MyPageEditTag>
          <S.MyPageEditTag id="region" onClick={onClickEventTag}>
            충북
          </S.MyPageEditTag>
          <S.MyPageEditTag id="region" onClick={onClickEventTag}>
            충남
          </S.MyPageEditTag>
        </S.RegionTopDiv>

        <S.RegionBottomDiv>
          <S.MyPageEditInfoInputsP style={{ color: "white" }}>거주지역</S.MyPageEditInfoInputsP>

          <S.MyPageEditTag id="region" onClick={onClickEventTag}>
            경북
          </S.MyPageEditTag>
          <S.MyPageEditTag id="region" onClick={onClickEventTag}>
            경남
          </S.MyPageEditTag>
          <S.MyPageEditTag id="region" onClick={onClickEventTag}>
            전북
          </S.MyPageEditTag>
          <S.MyPageEditTag id="region" onClick={onClickEventTag}>
            전남
          </S.MyPageEditTag>
          <S.MyPageEditTag id="region" onClick={onClickEventTag}>
            제주
          </S.MyPageEditTag>
        </S.RegionBottomDiv>

        {authOk ? <S.MyPageAuthOkButton onClick={updateUserEditInfo}>저장</S.MyPageAuthOkButton> : <S.MyPageEditButton>저장</S.MyPageEditButton>}
      </S.MyPageEditInfoInputDiv>
    </S.RealMyPageEditInfoWrapper>
  );
};

export default MyPageEditInfoPresenter;
