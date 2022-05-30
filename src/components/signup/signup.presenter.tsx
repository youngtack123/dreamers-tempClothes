import { useRouter } from "next/router";
import Timer from "../lib/timer";
import * as s from "./signup.styles";
import { useRecoilState } from "recoil";
import { authState, timerState } from "../common/store";
import { useEffect, useState } from "react";

export default function SignupUI(props: any) {
  const { handleSignUpInputs, signUpFunc, onClickEventTag, overLapId, overLapNic, inputs, createPhoneAuth, confirmAuthNumber, noAuthSignUp, socialLoginData, updateUserFunc } = props;
  const [sendAuthNumber] = useRecoilState(timerState);
  const router = useRouter();
  const [authOk] = useRecoilState(authState);
  const [tab, setTab] = useState("curr");
  const onMoveToLogin = () => {
    router.push("/login");
  };
  console.log("socialLoginData", socialLoginData);

  return (
    <s.Body>
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
                <s.ItemInput name="email" placeholder="이메일을 입력하세요." onChange={handleSignUpInputs} defaultValue={socialLoginData?.fetchUser.email} />
                <s.SendVerifiButton onClick={overLapId}>중복확인</s.SendVerifiButton>
              </s.ItemInputDiv>
              <s.ErrorTextEmailP>{!inputs.email && "이메일을 정상적으로 입력해주세요!"}</s.ErrorTextEmailP>
            </div>
          )}

          {/* <div> */}
          <s.ItemInputDiv>
            <s.ItemNameDiv>닉네임</s.ItemNameDiv>
            <s.ItemInput name="nickname" onChange={handleSignUpInputs} placeholder={socialLoginData?.fetchUser.nickname || `닉네임을 입력하세요.`} />
            <s.SendVerifiButton onClick={overLapNic}>중복확인</s.SendVerifiButton>
          </s.ItemInputDiv>
          <s.ErrorTextP>{!inputs.nickname && "닉네임을 입력해주세요!"}</s.ErrorTextP>
          {/* </div> */}

          {socialLoginData ? (
            <div></div>
          ) : (
            <div>
              <s.PasswordInputDiv>
                <s.ItemNameDiv>비밀번호</s.ItemNameDiv>
                <s.ItemLongInput name="password" type="password" placeholder="비밀번호를 입력하세요." onChange={handleSignUpInputs} />
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
                <s.ItemLongInput name="passwordOk" type="password" placeholder="비밀번호를 확인해주세요." onChange={handleSignUpInputs} />
              </s.PasswordCheckInputDiv>
              <s.ErrorTextPassWordOkP>{!inputs.passwordOk && "비밀번호를 다시 확인해 주세요!"}</s.ErrorTextPassWordOkP>
            </div>
          )}

          <div>
            <s.ItemInputDiv>
              <s.ItemNameDiv>휴대폰</s.ItemNameDiv>
              <s.ItemInput name="phone" onChange={handleSignUpInputs} placeholder="-를 제외한 휴대폰 번호를 입력해주세요." />
              <s.VerifyButton onClick={createPhoneAuth}>인증하기</s.VerifyButton>
            </s.ItemInputDiv>
            <s.ErrorTextPhoneP>{!inputs.phone && "핸드폰 번호를 입력해주세요!"}</s.ErrorTextPhoneP>
          </div>
          <div>
            <s.VerifyDiv>
              <s.ItemNameDiv>인증번호</s.ItemNameDiv>
              <s.ItemInput placeholder="인증번호를 입력하세요." />
              <s.SendVerifiButton onClick={confirmAuthNumber}>인증확인</s.SendVerifiButton>
            </s.VerifyDiv>
            <s.ErrorTextAuthP>{!inputs.authNumber && "인증 번호를 입력해주세요!"}</s.ErrorTextAuthP>
            {sendAuthNumber && (
              <s.MyPageAuthOkTimerDiv>
                <s.MyPageAuthOkTimerP>{`받으신 인증 번호를 입력해주세요`}</s.MyPageAuthOkTimerP>
                <Timer></Timer>
              </s.MyPageAuthOkTimerDiv>
            )}
            {authOk && <s.MyPageAuthOkTimerDiv>{<s.MyPageAuthOkTimerP>인증이 완료되었습니다!</s.MyPageAuthOkTimerP>}</s.MyPageAuthOkTimerDiv>}
          </div>
        </s.InputWrapperDiv>
        {/* 태그 부분 */}
        <s.TagsDiv>
          <s.GenderTagWrapperDiv>
            <s.GenderDiv>성별</s.GenderDiv>
            <s.TagItemDiv id="gender" onClick={onClickEventTag} className={`tag ${tab === "curr" ? "active" : ""}`}>
              남성
            </s.TagItemDiv>
            <s.TagItemDiv id="gender" onClick={onClickEventTag}>
              여성
            </s.TagItemDiv>
          </s.GenderTagWrapperDiv>
          <s.StyleTagWrapperDiv>
            <s.GenderDiv>스타일</s.GenderDiv>
            <s.TagItemDiv>
              <s.StyleSpan onClick={onClickEventTag} id="style">
                캐주얼
              </s.StyleSpan>
            </s.TagItemDiv>
            <s.TagItemDiv>
              <s.StyleSpan onClick={onClickEventTag} id="style">
                스트릿
              </s.StyleSpan>
            </s.TagItemDiv>
            <s.TagItemDiv>
              <s.StyleSpan onClick={onClickEventTag} id="style">
                트레이닝
              </s.StyleSpan>
            </s.TagItemDiv>
            <s.TagItemDiv>
              <s.StyleSpan onClick={onClickEventTag} id="style">
                포멀
              </s.StyleSpan>
            </s.TagItemDiv>
            <s.TagItemDiv>
              <s.StyleSpan onClick={onClickEventTag} id="style">
                세미포멀
              </s.StyleSpan>
            </s.TagItemDiv>
          </s.StyleTagWrapperDiv>

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
            <s.TagItemDiv id="region" onClick={onClickEventTag}>
              충남
            </s.TagItemDiv>
          </s.RegionTagWrapperDiv>

          <s.RegionTagBottomLineDiv>
            <s.GenderDiv style={{ color: "white" }}>거주지역</s.GenderDiv>
            <s.TagItemDiv id="region" onClick={onClickEventTag}>
              경북
            </s.TagItemDiv>
            <s.TagItemDiv id="region" onClick={onClickEventTag}>
              경남
            </s.TagItemDiv>
            <s.TagItemDiv id="region" onClick={onClickEventTag}>
              전북
            </s.TagItemDiv>
            <s.TagItemDiv id="region" onClick={onClickEventTag}>
              전남
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
    </s.Body>
  );
}
