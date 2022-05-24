import React from "react";
import Timer from "../../lib/timer";
import * as S from "./MyPageEditInfoStyles";
import { useRecoilState } from "recoil";
import { timerState } from "../../common/store/index";
const MyPageEditInfoPresenter = (props) => {
  const [sendAuthNumber] = useRecoilState(timerState);
  const { handleInfo, onClickEventTag, updateUserEditInfo, createPhoneAuth, confirmAuthNumber, authOk } = props;
  return (
    <S.RealMyPageEditInfoWrapper>
      <S.MyPageEditInfoWrapper>
        <div style={{ paddingLeft: "3rem" }}>
          <S.MyPageEditInfoP>개인정보 수정</S.MyPageEditInfoP>
        </div>

        <S.MyPageEditInfoInputDiv>
          <S.MyPageEditInfoInputFlexDiv>
            <S.MyPageEditInfoInputsP>닉네임</S.MyPageEditInfoInputsP>
            <S.MyPageEditInfoInputs type="text" name="nickname" onChange={handleInfo}></S.MyPageEditInfoInputs>
          </S.MyPageEditInfoInputFlexDiv>
          <S.MyPageEditInfoInputFlexDiv>
            <S.MyPageEditInfoInputsP>이메일</S.MyPageEditInfoInputsP>
            <S.MyPageEditInfoInputs type="text" name="email" onChange={handleInfo}></S.MyPageEditInfoInputs>
          </S.MyPageEditInfoInputFlexDiv>
          <S.MyPageEditInfoInputFlexDiv>
            <S.MyPageEditInfoInputsP>전화번호</S.MyPageEditInfoInputsP>
            <S.MyPageEditInfoShortInputs type="text" name="phone" onChange={handleInfo}></S.MyPageEditInfoShortInputs>
            <S.MyPageEditButton onClick={createPhoneAuth}>인증번호 전송</S.MyPageEditButton>
            {sendAuthNumber && <Timer></Timer>}
          </S.MyPageEditInfoInputFlexDiv>
          <S.MyPageEditInfoInputFlexDiv>
            <S.MyPageEditInfoInputsP>인증번호</S.MyPageEditInfoInputsP>
            <S.MyPageEditInfoShortInputs type="text" name="authNumber" onChange={handleInfo}></S.MyPageEditInfoShortInputs>
            <S.MyPageEditButton onClick={confirmAuthNumber}>인증하기</S.MyPageEditButton>
          </S.MyPageEditInfoInputFlexDiv>
          {authOk && "인증이 완료되었습니다!"}
          <S.MyPageEditInfoInputFlexDiv style={{ marginBottom: "0px" }}>
            <S.MyPageEditInfoInputsP style={{ marginBottom: "7rem" }}>지역</S.MyPageEditInfoInputsP>
            <div>
              <S.MyPageEditTagFlexDiv>
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
                  충청
                </S.MyPageEditTag>
              </S.MyPageEditTagFlexDiv>
              <S.MyPageEditTagFlexDiv>
                <S.MyPageEditTag id="region" onClick={onClickEventTag}>
                  경상
                </S.MyPageEditTag>
                <S.MyPageEditTag id="region" onClick={onClickEventTag}>
                  전라
                </S.MyPageEditTag>
                <S.MyPageEditTag id="region" onClick={onClickEventTag}>
                  제주
                </S.MyPageEditTag>
              </S.MyPageEditTagFlexDiv>
            </div>
          </S.MyPageEditInfoInputFlexDiv>
          <S.MyPageEditInfoInputFlexDiv>
            <S.MyPageEditInfoInputsP style={{ paddingLeft: "7rem" }}>스타일</S.MyPageEditInfoInputsP>
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
          </S.MyPageEditInfoInputFlexDiv>
        </S.MyPageEditInfoInputDiv>
        <S.MyPageEditButton onClick={updateUserEditInfo}>수정하기</S.MyPageEditButton>
      </S.MyPageEditInfoWrapper>
    </S.RealMyPageEditInfoWrapper>
  );
};

export default MyPageEditInfoPresenter;
