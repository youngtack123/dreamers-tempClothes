import * as s from "./onboarding2.styles"

export default function Onboarding2UI() {
    return(
        <s.WrapperDiv>
            
            <s.QuestionDiv>어떤 스타일을 선호 하시나요?</s.QuestionDiv>
            <div style={{width: "675px"}}>
            <s.StyleDiv>
                <s.WhichStyleDiv>캐주얼</s.WhichStyleDiv>
                <s.WhichStyleDiv>스트릿</s.WhichStyleDiv>
                <s.WhichStyleDiv>트레이닝</s.WhichStyleDiv>
            </s.StyleDiv>
            </div>
            <div style={{width: "425px"}}>
            <s.RestDiv>
                <s.WhichStyleDiv>포멀</s.WhichStyleDiv>
                <s.WhichStyleDiv>세미포멀</s.WhichStyleDiv>
            </s.RestDiv>
            </div>
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