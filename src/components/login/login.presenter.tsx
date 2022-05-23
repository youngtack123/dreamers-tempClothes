import { useRouter } from "next/router";
import * as s from "./login.styles";

export default function LoginUI(props: any) {
  const { handleLoginInputs, login } = props;
  const router = useRouter();
  const onMoveToSignUp = () => {
    router.push("/signup");
  };

  return (
    <s.WrapperDiv>
      <s.TitleH1>로그인</s.TitleH1>

      <s.InputWrapperDiv>
        <s.ItemInputDiv>
          <s.ItemNameDiv>아이디</s.ItemNameDiv>
          <s.ItemInput name="email" onChange={handleLoginInputs} />
        </s.ItemInputDiv>
        <s.PasswordInputDiv>
          <s.ItemNameDiv>비밀번호</s.ItemNameDiv>
          <s.ItemInput type="password" name="password" onChange={handleLoginInputs} />
        </s.PasswordInputDiv>
      </s.InputWrapperDiv>

      <s.RestDiv>
        <s.LoginButton onClick={login}>로그인</s.LoginButton>
        <s.AlreadyUserDiv>
          <s.AreYouUserDiv>계정이 없으신가요?</s.AreYouUserDiv>
          <s.GoToLoginDiv onClick={onMoveToSignUp}>회원가입 하러가기</s.GoToLoginDiv>
        </s.AlreadyUserDiv>
        <s.DivideLineDiv />

        <s.SocialLoginDiv>
          <s.SocialDiv>다른 방법으로 로그인</s.SocialDiv>

          <s.SocialItemDiv>
            <s.NaverImg src="/images/naver.png" />
            <s.EachItemDiv>네이버 계정으로 로그인</s.EachItemDiv>
          </s.SocialItemDiv>
          <s.SocialItemDiv>
            <s.KakaoImg src="/images/kakao.png" />
            <s.EachItemDiv>카카오 계정으로 로그인</s.EachItemDiv>
          </s.SocialItemDiv>
          <s.SocialItemDiv>
            <s.GoogleImg src="/images/google.png" />
            <s.EachItemDiv>구글 계정으로 로그인</s.EachItemDiv>
          </s.SocialItemDiv>
        </s.SocialLoginDiv>
      </s.RestDiv>
    </s.WrapperDiv>
  );
}
