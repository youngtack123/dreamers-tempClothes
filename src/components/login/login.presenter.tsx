import { useRouter } from "next/router";
import * as s from "./login.styles";
import Link from "next/link";
import { ChangeEvent } from "react";

interface ILoginUIProps {
  handleLoginInputs: (e: ChangeEvent<HTMLInputElement>) => void;
  login: () => void;
  loginInputs: {
    email: string;
    password: string;
  };
}

export default function LoginUI(props: ILoginUIProps) {
  const router = useRouter();
  const onMoveToSignUp = () => {
    router.push("/signup");
  };

  return (
    <s.WrapperDiv>
      <s.TitleH1>로그인</s.TitleH1>

      <s.InputWrapperDiv>
        <s.ItemInputDiv>
          <s.ItemNameDiv>이메일</s.ItemNameDiv>
          <s.ItemInput name="email" onChange={props.handleLoginInputs} />
        </s.ItemInputDiv>
        <s.PasswordInputDiv>
          <s.ItemNameDiv>비밀번호</s.ItemNameDiv>
          <s.ItemInput type="password" name="password" onChange={props.handleLoginInputs} />
        </s.PasswordInputDiv>
      </s.InputWrapperDiv>
      <s.RestDiv>
        {props.loginInputs.email && props.loginInputs.password ? <s.LoginButtonOk onClick={props.login}>로그인</s.LoginButtonOk> : <s.LoginButton>로그인</s.LoginButton>}

        <s.AlreadyUserDiv>
          <s.AreYouUserDiv>계정이 없으신가요?</s.AreYouUserDiv>
          <s.GoToLoginDiv onClick={onMoveToSignUp}>회원가입 하러가기</s.GoToLoginDiv>
        </s.AlreadyUserDiv>
        <s.DivideLineDiv />

        <s.SocialLoginDiv>
          <s.SocialDiv>다른 방법으로 로그인</s.SocialDiv>

          <s.SocialItemDiv>
            <s.NaverImg src="/images/naver.png" />
            <Link href="https://server.t1dreamers.shop/login/naver">
              <a>
                <s.EachItemDiv>네이버 계정으로 로그인</s.EachItemDiv>
              </a>
            </Link>
          </s.SocialItemDiv>
          <s.SocialItemDiv>
            <s.KakaoImg src="/images/kakao.png" />
            <Link href="https://server.t1dreamers.shop/login/kakao">
              <a>
                <s.EachItemDiv>카카오 계정으로 로그인</s.EachItemDiv>
              </a>
            </Link>
          </s.SocialItemDiv>
          <s.SocialItemDiv>
            <s.GoogleImg src="/images/google.png" />
            <Link href="https://server.t1dreamers.shop/login/google">
              <a>
                <s.EachItemDiv>구글 계정으로 로그인</s.EachItemDiv>
              </a>
            </Link>
          </s.SocialItemDiv>
        </s.SocialLoginDiv>
      </s.RestDiv>
    </s.WrapperDiv>
  );
}
