import { useRouter } from "next/router";
import Timer from "../lib/timer";
import * as s from "./signup.styles";
import { useRecoilState } from "recoil";
import { timerState } from "../common/store";
import { useEffect } from "react";

export default function SignupUI(props: any) {
  const { handleSignUpInputs, signUpFunc, onClickEventTag, overLapId, overLapNic, inputs, createPhoneAuth, confirmAuthNumber, authOk, noAuthSignUp, socialLoginData, updateUserFunc } = props;
  const [sendAuthNumber] = useRecoilState(timerState);
  const router = useRouter();
  const onMoveToLogin = () => {
    router.push("/login");
  };
  console.log("socialLoginData", socialLoginData);

  return (
    <s.WrapperDiv>
      <s.TitleH1>회원가입</s.TitleH1>
      {/* 인풋값 부분 */}
      <s.InputWrapperDiv>
        {socialLoginData ? (
          <div></div>
        ) : (
          <div>
            <s.ItemInputDiv>
              <s.ItemNameDiv>이메일</s.ItemNameDiv>
              <s.ItemInput name="email" onChange={handleSignUpInputs} defaultValue={socialLoginData?.fetchUser.email} />
              <s.SendVerifiButton onClick={overLapId}>중복확인</s.SendVerifiButton>
            </s.ItemInputDiv>
            <s.ErrorTextP>{!inputs.email && "이메일을 정상적으로 입력해주세요!"}</s.ErrorTextP>
          </div>
        )}

        <div>
          <s.ItemInputDiv>
            <s.ItemNameDiv>닉네임</s.ItemNameDiv>
            <s.ItemInput name="nickname" onChange={handleSignUpInputs} placeholder={socialLoginData?.fetchUser.nickname} />
            <s.SendVerifiButton onClick={overLapNic}>중복확인</s.SendVerifiButton>
          </s.ItemInputDiv>
          <s.ErrorTextP>{!inputs.nickname && "닉네임을 입력해주세요!"}</s.ErrorTextP>
        </div>

        {socialLoginData ? (
          <div></div>
        ) : (
          <div>
            <s.PasswordInputDiv>
              <s.ItemNameDiv>비밀번호</s.ItemNameDiv>
              <s.ItemLongInput name="password" onChange={handleSignUpInputs} />
            </s.PasswordInputDiv>
            <s.ErrorTextPassWordP>{!inputs.password && "비밀번호를 입력해 주세요!"}</s.ErrorTextPassWordP>
          </div>
        )}
        {socialLoginData ? (
          <div></div>
        ) : (
          <div>
            <s.PasswordCheckInputDiv>
              <s.ItemNameDiv>비밀번호 확인</s.ItemNameDiv>
              <s.ItemLongInput name="passwordOk" onChange={handleSignUpInputs} />
            </s.PasswordCheckInputDiv>
            <s.ErrorTextPassWordOkP>{!inputs.passwordOk && "비밀번호를 다시 확인해 주세요!"}</s.ErrorTextPassWordOkP>
          </div>
        )}

        <div>
          <s.ItemInputDiv>
            <s.ItemNameDiv>휴대폰</s.ItemNameDiv>
            <s.ItemInput name="phone" onChange={handleSignUpInputs} placeholder="전화번호를 입력해 주세요" />
            <s.VerifyButton onClick={createPhoneAuth}>인증번호 전송</s.VerifyButton>
            {sendAuthNumber && <Timer></Timer>}
          </s.ItemInputDiv>
          <s.ErrorTextP>{!inputs.phone && "핸드폰 번호를 입력해주세요!"}</s.ErrorTextP>
        </div>
        <div>
          <s.VerifyDiv>
            <s.ItemNameDiv>인증번호</s.ItemNameDiv>
            <s.ItemInput />
            <s.SendVerifiButton onClick={confirmAuthNumber}>인증하기</s.SendVerifiButton>
          </s.VerifyDiv>
          <s.ErrorTextAuthP>{!inputs.authNumber && "인증 번호를 입력해주세요!"}</s.ErrorTextAuthP>
          {authOk && "인증이 완료되었습니다!"}
        </div>
      </s.InputWrapperDiv>
      {/* 태그 부분 */}
      <s.TagsDiv>
        <s.GenderTagWrapperDiv>
          <s.GenderDiv>성별</s.GenderDiv>
          <s.TagItemDiv id="gender" onClick={onClickEventTag}>
            남성
          </s.TagItemDiv>
          <s.TagItemDiv id="gender" onClick={onClickEventTag}>
            여성
          </s.TagItemDiv>
        </s.GenderTagWrapperDiv>
        <s.StyleTagWrapperDiv>
          <s.GenderDiv>스타일</s.GenderDiv>
          <s.TagItemDiv>
            <span onClick={onClickEventTag} id="style">
              캐주얼
            </span>
          </s.TagItemDiv>
          <s.TagItemDiv>
            <span onClick={onClickEventTag} id="style">
              스트릿
            </span>
          </s.TagItemDiv>
          <s.TagItemDiv>
            <span onClick={onClickEventTag} id="style">
              트레이닝
            </span>
          </s.TagItemDiv>
        </s.StyleTagWrapperDiv>
        <s.TagBottomLineDiv>
          <s.TagItemDiv>
            <span onClick={onClickEventTag} id="style">
              세미포멀
            </span>
          </s.TagItemDiv>
          <s.TagItemDiv>
            <span onClick={onClickEventTag} id="style">
              포멀
            </span>
          </s.TagItemDiv>
        </s.TagBottomLineDiv>
        <s.RegionTagWrapperDiv>
          <s.GenderDiv>거주지역</s.GenderDiv>
          <s.TagItemDiv id="region" onClick={onClickEventTag}>
            서울
          </s.TagItemDiv>
          <s.TagItemDiv id="region" onClick={onClickEventTag}>
            경기
          </s.TagItemDiv>
          <s.TagItemDiv id="region" onClick={onClickEventTag}>
            강원
          </s.TagItemDiv>
          <s.TagItemDiv id="region" onClick={onClickEventTag}>
            충북
          </s.TagItemDiv>
        </s.RegionTagWrapperDiv>
        <s.RegionTagBottomLineDiv>
          <s.TagItemDiv id="region" onClick={onClickEventTag}>
            경상
          </s.TagItemDiv>
          <s.TagItemDiv id="region" onClick={onClickEventTag}>
            전라
          </s.TagItemDiv>
          <s.TagItemDiv id="region" onClick={onClickEventTag}>
            제주
          </s.TagItemDiv>
        </s.RegionTagBottomLineDiv>
      </s.TagsDiv>

      {/* 회원가입 버튼, 이미 회원인가요 부분 */}
      <s.RestDiv>
        {socialLoginData ? <s.SignupButton onClick={updateUserFunc}>회원가입</s.SignupButton> : <s.SignupButton onClick={signUpFunc}>회원가입</s.SignupButton>}
        <s.AlreadyUserDiv>
          <s.AreYouUserDiv>이미 회원이신가요?</s.AreYouUserDiv>
          <s.GoToLoginDiv onClick={onMoveToLogin}>로그인 하러가기</s.GoToLoginDiv>
        </s.AlreadyUserDiv>
      </s.RestDiv>
    </s.WrapperDiv>
  );
}
