import React from 'react'
import * as s from "./tempClothes.styles"

const arr = Array.from(Array(33), (_, index) => index + 1);

const today = () => {
    let now = new Date()
    let hours = now.getHours()
    let minutes = now.getMinutes()

    if(hours > 12) {
        hours = hours - 12
        return hours + '시 ' + minutes + '분'
    } else {
        return hours + '시 ' + minutes + '분'
    }
    
}
const AmPm = () => {
    let now = new Date()
    let hours = now.getHours()

    if(hours > 12) {
        return "오후"
    } else {
        return "오전"
    }
}

const TempClothesUI = () => {
  return (
    <s.WrapperDiv>
        {/* 현재 시간, 기온, 추천 옷차림 태그 부분 */}
        <s.LeftTempDiv>
            <s.TimeDiv>
                <s.CurrentTimeDiv>지금 시간</s.CurrentTimeDiv>
                <s.Daytime>{AmPm()}</s.Daytime>
                <s.Time>{today()}</s.Time>
            </s.TimeDiv>

            <s.TodayTempDiv>
                <s.TodayDiv>지금 기온</s.TodayDiv>
                <s.TempNumDiv>22</s.TempNumDiv>
                <s.DegreeDiv>°C</s.DegreeDiv>
            </s.TodayTempDiv>

            <s.TagDiv>
                <s.PageDiv>지금衣</s.PageDiv>
                <s.RecommendTop># 맨투맨</s.RecommendTop>
                <s.RecommendTop># 청바지</s.RecommendTop>
            </s.TagDiv>
        </s.LeftTempDiv>

        
        {/* 사진들 뿌리는 부분 */}
        <s.RightLookBookDiv>
            {arr.map((_, index) => (
                <s.LookBookItemImg key={index} src="/images/example.png" />
            ))}
        </s.RightLookBookDiv>

        <s.WriteButton>+</s.WriteButton>
    </s.WrapperDiv>
  )
}

export default TempClothesUI