import { useRouter } from "next/router";
import Timer from "../lib/timer";
import * as s from "./signup.styles";
import { useRecoilState } from "recoil";
import { authState, timerState } from "../common/store";
import { useEffect, useState, ChangeEvent, MouseEvent } from "react";

interface IpropsSignupUI {
  handleSignUpInputs: (e: ChangeEvent<HTMLInputElement>) => void;
  signUpFunc: () => void;
  onClickEventTag: (e: MouseEvent<HTMLDivElement> | MouseEvent<HTMLSpanElement>) => void;
  overLapId: () => void;
  overLapNic: () => void;
  inputs: {
    nickname: string;
    email: string;
    password: string;
    passwordOk: string;
    phone: string;
    authNumber: string;
    gender: string;
    style: string;
    region: string;
  };
  createPhoneAuth: () => void;
  confirmAuthNumber: () => void;
  onClickTagGender: (id: string) => void;
  onClickTagStyle: (id: string) => void;
  onClickRegionTop: (id: string) => void;
  onClickRegionBottom: (id: string) => void;
  socialLoginData: any;
  updateUserFunc: () => void;
  clickGender: string;
  clickStyle: string;
  clickRegionTop: string;
  clickRegionBottom: string;
}

export default function SignupUI(props: IpropsSignupUI) {
  const {
    handleSignUpInputs,
    signUpFunc,
    onClickEventTag,
    overLapId,
    overLapNic,
    inputs,
    createPhoneAuth,
    confirmAuthNumber,
    onClickTagGender,
    socialLoginData,
    updateUserFunc,
    clickGender,
    onClickTagStyle,
    clickStyle,
    onClickRegionTop,
    clickRegionTop,
    onClickRegionBottom,
    clickRegionBottom,
  } = props;
  const [sendAuthNumber] = useRecoilState(timerState);
  const router = useRouter();
  const [authOk] = useRecoilState(authState);
  const onMoveToLogin = () => {
    router.push("/login");
  };
  const [genderData, setGenderData] = useState(["남성", "여성"]);
  const [styleData, setStyleData] = useState(["캐주얼", "스트릿", "트레이닝", "포멀", "세미포멀"]);
  const [regionTopData, setRegionTopData] = useState(["서울", "경기", "강원", "충북", "충남"]);
  const [regionBottomData, setRegionBottomData] = useState(["경북", "경남", "전북", "전남", "제주"]);

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
              <s.ItemInput name="authNumber" placeholder="인증번호를 입력하세요." onChange={handleSignUpInputs}></s.ItemInput>
              <s.SendVerifiButton onClick={confirmAuthNumber}>인증확인</s.SendVerifiButton>
            </s.VerifyDiv>
            <s.ErrorTextAuthP>{!inputs.authNumber && "인증 번호를 입력해주세요!"}</s.ErrorTextAuthP>
            {sendAuthNumber && (
              <s.MyPageAuthOkTimerDiv>
                <s.SignUpAuthOkTimerP>{`받으신 인증 번호를 입력해주세요`}</s.SignUpAuthOkTimerP>
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
            {genderData.map((el, index) => {
              if (el === clickGender) {
                return (
                  <s.TagItemDiv
                    id="gender"
                    onClick={(event) => {
                      onClickEventTag(event), onClickTagGender(el);
                    }}
                    key={index}
                    style={{ background: "#FFF2B2", border: "1px solid #FFDD87" }}
                  >
                    {el}
                  </s.TagItemDiv>
                );
              } else if (el !== clickGender) {
                return (
                  <s.TagItemDiv
                    id="gender"
                    onClick={(event) => {
                      onClickEventTag(event), onClickTagGender(el);
                    }}
                    key={index}
                  >
                    {el}
                  </s.TagItemDiv>
                );
              }
            })}
          </s.GenderTagWrapperDiv>
          <s.StyleTagWrapperDiv>
            <s.GenderDiv>스타일</s.GenderDiv>
            {styleData.map((el, index) => {
              if (clickStyle === el) {
                return (
                  <s.TagItemDiv
                    onClick={(event) => {
                      onClickEventTag(event), onClickTagStyle(el);
                    }}
                    key={index}
                    style={{ background: "#FFF2B2", border: "1px solid #FFDD87" }}
                  >
                    {el}
                  </s.TagItemDiv>
                );
              } else {
                return (
                  <s.TagItemDiv key={index}>
                    <s.StyleSpan
                      onClick={(event) => {
                        onClickEventTag(event), onClickTagStyle(el);
                      }}
                      id="style"
                      key={index}
                    >
                      {el}
                    </s.StyleSpan>
                  </s.TagItemDiv>
                );
              }
            })}
          </s.StyleTagWrapperDiv>

          <s.RegionTagWrapperDiv>
            <s.GenderDiv>거주지역</s.GenderDiv>
            {regionTopData.map((el, index) => {
              if (el === clickRegionTop) {
                return (
                  <s.TagItemDiv
                    id="region"
                    onClick={(event) => {
                      onClickEventTag(event), onClickRegionTop(el);
                    }}
                    key={index}
                    style={{ background: "#FFF2B2", border: "1px solid #FFDD87" }}
                  >
                    {el}
                  </s.TagItemDiv>
                );
              } else {
                return (
                  <s.TagItemDiv
                    id="region"
                    onClick={(event) => {
                      onClickEventTag(event), onClickRegionTop(el);
                    }}
                    key={index}
                  >
                    {el}
                  </s.TagItemDiv>
                );
              }
            })}
          </s.RegionTagWrapperDiv>

          <s.RegionTagBottomLineDiv>
            <s.GenderDiv style={{ color: "white" }}>거주지역</s.GenderDiv>
            {regionBottomData.map((el, index) => {
              if (el === clickRegionBottom) {
                return (
                  <s.TagItemDiv
                    id="region"
                    onClick={(event) => {
                      onClickEventTag(event), onClickRegionBottom(el);
                    }}
                    key={index}
                    style={{ background: "#FFF2B2", border: "1px solid #FFDD87" }}
                  >
                    {el}
                  </s.TagItemDiv>
                );
              } else {
                return (
                  <s.TagItemDiv
                    id="region"
                    onClick={(event) => {
                      onClickEventTag(event), onClickRegionBottom(el);
                    }}
                    key={index}
                  >
                    {el}
                  </s.TagItemDiv>
                );
              }
            })}
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
