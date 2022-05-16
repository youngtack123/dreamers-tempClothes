import { useRouter } from "next/router"
import * as s from "./onboarding2.styles"

export default function Onboarding2UI() {

    const router = useRouter()

    const onMoveToLogin = () => {
        router.push("/login")
    }

    const onMoveToOnboarding3 = () => {
        router.push("/onboarding3")
    }

    const onMoveToOnboarding1 = () => {
        router.push("/onboarding1")
    }

    return(
        <s.WrapperDiv>
            
            <s.QuestionDiv>평소에 어떤 스타일을 즐겨 입으시나요?</s.QuestionDiv>
            
                <s.StyleDiv>
                    <s.WhichStyleDiv>캐주얼</s.WhichStyleDiv>
                    <s.WhichStyleDiv>스트릿</s.WhichStyleDiv>
                    <s.WhichStyleDiv>트레이닝</s.WhichStyleDiv>
                </s.StyleDiv>
            
                <s.RestDiv>
                    <s.WhichStyleDiv>포멀</s.WhichStyleDiv>
                    <s.WhichStyleDiv>세미포멀</s.WhichStyleDiv>
                </s.RestDiv>

            <s.PrevNextDiv>
                <s.PrevButton onClick={onMoveToOnboarding1}>{`<`}</s.PrevButton>
                <s.NextButton onClick={onMoveToOnboarding3}>{`>`}</s.NextButton>
            </s.PrevNextDiv>
            
            <s.AreYouUserDiv>
                <s.AlreadyUserDiv>이미 회원이신가요?</s.AlreadyUserDiv>
                <s.GoToLoginDiv onClick={onMoveToLogin}>로그인 하러가기</s.GoToLoginDiv>
            </s.AreYouUserDiv>

        </s.WrapperDiv>
    )
}