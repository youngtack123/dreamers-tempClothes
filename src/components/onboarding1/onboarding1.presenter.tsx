import * as s from "./onboarding1.styles"

export default function Onboarding1UI() {
    return(
        <s.WrapperDiv>
            <s.QuestionDiv>성별을 선택해주세요.</s.QuestionDiv>
            <s.ButtonDiv>
                <s.ManButton>남성</s.ManButton>
                <s.ManButton>여성</s.ManButton>
            </s.ButtonDiv>
            <s.AreYouUserDiv>
                <s.AlreadyUserDiv>이미 회원이신가요?</s.AlreadyUserDiv>
                <s.GoToLoginDiv>로그인 하러가기</s.GoToLoginDiv>
            </s.AreYouUserDiv>
            <s.PrevNextDiv>
                <s.PrevButton>이전</s.PrevButton>
                <s.NextButton>다음</s.NextButton>
            </s.PrevNextDiv>
        </s.WrapperDiv>
    )
}