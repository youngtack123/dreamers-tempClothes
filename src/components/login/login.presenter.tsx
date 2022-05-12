import * as s from "./login.styles"

export default function LoginUI() {
    return(
        <s.WrapperDiv>

            <s.TitleH1>로그인</s.TitleH1>

            <s.InputWrapperDiv>
                <s.ItemInputDiv>
                    <s.ItemNameDiv>아이디</s.ItemNameDiv>
                    <s.ItemInput />
                </s.ItemInputDiv>
                <s.ItemInputDiv>
                    <s.ItemNameDiv>비밀번호</s.ItemNameDiv>
                    <s.ItemInput />
                </s.ItemInputDiv>
            </s.InputWrapperDiv>

            <s.RestDiv>
                <s.LoginButton>로그인</s.LoginButton>
                <s.DivideLineDiv />
                
                <s.SocialLoginDiv>
                    <s.NaverImg src="/images/naver.png" />
                    <s.KakaoImg src="/images/kakao.png" />
                    <s.GoogleImg src="/images/google.png" />
                </s.SocialLoginDiv>
            </s.RestDiv>
        </s.WrapperDiv>
    )
}