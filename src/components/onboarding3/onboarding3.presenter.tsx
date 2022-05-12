import * as s from "./onboarding3.styles"

export default function Onboarding3UI() {
    return(
        <s.WrapperDiv>
            <s.QuestionDiv>어느 곳에 거주하시나요?</s.QuestionDiv>
            <s.StyleDiv>
                <s.RegionDiv>서울</s.RegionDiv>
                <s.RegionDiv>경기</s.RegionDiv>
                <s.RegionDiv>강원</s.RegionDiv>
                <s.RegionDiv>충청</s.RegionDiv>
            </s.StyleDiv>
            <s.RestDiv>
                <s.RegionDiv>경상</s.RegionDiv>
                <s.RegionDiv>전라</s.RegionDiv>
                <s.RegionDiv>제주</s.RegionDiv>
            </s.RestDiv>
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