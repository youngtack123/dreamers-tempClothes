import { useRouter } from "next/router"
import * as s from "./onboarding3.styles"

export default function Onboarding3UI() {

    const router = useRouter()

    const onMoveToLogin = () => {
        router.push("/login")
    }

    const onMoveToTempClothes = () => {
        router.push("/tempClothes")
    }

    const onMoveToOnboarding2 = () => {
        router.push("/onboarding2")
    }

    return(
        <s.WrapperDiv>
            <s.QuestionDiv>어디에 거주하시나요?</s.QuestionDiv>

            <s.StyleDiv>
                <s.RegionDiv>서울</s.RegionDiv>
                <s.RegionDiv>경기</s.RegionDiv>
                <s.RegionDiv>강원</s.RegionDiv>
            </s.StyleDiv>

            <s.RestDiv>
                <s.RegionDiv>충청</s.RegionDiv>
                <s.RegionDiv>경상</s.RegionDiv>
                <s.RegionDiv>전라</s.RegionDiv>
            </s.RestDiv>
            <s.JejuRegionDiv>제주</s.JejuRegionDiv>

            <s.PrevNextDiv>
                <s.PrevButton onClick={onMoveToOnboarding2}>{`<`}</s.PrevButton>
                <s.NextButton onClick={onMoveToTempClothes}>{`>`}</s.NextButton>
            </s.PrevNextDiv>

            <s.AreYouUserDiv>
                <s.AlreadyUserDiv>이미 회원이신가요?</s.AlreadyUserDiv>
                <s.GoToLoginDiv onClick={onMoveToLogin}>로그인 하러가기</s.GoToLoginDiv>
            </s.AreYouUserDiv>

        </s.WrapperDiv>
    )
}