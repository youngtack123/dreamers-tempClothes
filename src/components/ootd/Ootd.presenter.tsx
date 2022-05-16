import OotdFeed from "../commonFeed";
import * as s from "./Ootd.styles";

const OotdUI = () => {
  return (
    <s.Container__Div>
      <s.Container_head__Div>
        <s.TodayInfo__Div>
          <s.Date__Div>
            <s.Month__Span>05</s.Month__Span>
            <s.Day__Span>06</s.Day__Span>
          </s.Date__Div>

          <s.Temp__Span>22°C</s.Temp__Span>
        </s.TodayInfo__Div>

        <s.TagSeleted__Div>
          태그
          <s.TagSeletedBack__Span>#전라</s.TagSeletedBack__Span>
        </s.TagSeleted__Div>
      </s.Container_head__Div>

      <s.Container_Body__Div>
        <s.TagWrapper__Div>
          <s.TagWrapper_Head__Div>
            <s.Tag__Span>태그</s.Tag__Span>
          </s.TagWrapper_Head__Div>

          {/* 지역 */}
          <s.TagBox__Div>
            <s.TagCategory__Span>지역</s.TagCategory__Span>
            <s.RegionTagsBox__Div>
              <s.RegionTags__Span>서울</s.RegionTags__Span>
              <s.RegionTags__Span>경기</s.RegionTags__Span>
              <s.RegionTags__Span>강원</s.RegionTags__Span>
              <s.RegionTags__Span>충청</s.RegionTags__Span>
              <s.RegionTags__Span>경상</s.RegionTags__Span>
              <s.RegionTags__Span>전라</s.RegionTags__Span>
              <s.RegionTags__Span>제주</s.RegionTags__Span>
            </s.RegionTagsBox__Div>
          </s.TagBox__Div>

          {/* 스타일 */}
          <s.TagBox__Div>
            <s.TagCategory__Span>스타일</s.TagCategory__Span>
            <s.StyleTagsBox__Div>
              <s.StyleTags__Span>캐주얼</s.StyleTags__Span>
              <s.StyleTags__Span>스트릿</s.StyleTags__Span>
              <s.StyleTags__Span>트레이닝</s.StyleTags__Span>
              <s.StyleTags__Span>포멀</s.StyleTags__Span>
              <s.StyleTags__Span>세미포멀</s.StyleTags__Span>
            </s.StyleTagsBox__Div>
          </s.TagBox__Div>

          {/* 아우터 */}
          <s.TagBox__Div>
            <s.TagCategory__Span>아우터</s.TagCategory__Span>
            <s.OuterTagsBox__Div>
              <s.OuterTags__Span>트랙자켓</s.OuterTags__Span>
              <s.OuterTags__Span>플리스</s.OuterTags__Span>
              <s.OuterTags__Span>자켓</s.OuterTags__Span>
              <s.OuterTags__Span>점퍼</s.OuterTags__Span>
              <s.OuterTags__Span>코트</s.OuterTags__Span>
            </s.OuterTagsBox__Div>
          </s.TagBox__Div>

          {/* 상의 */}
          <s.TagBox__Div>
            <s.TagCategory__Span>상의</s.TagCategory__Span>
            <s.TopTagsBox__Div>
              <s.TopTags__Span>티셔츠</s.TopTags__Span>
              <s.TopTags__Span>셔츠/블라우스</s.TopTags__Span>
              <s.TopTags__Span>니트</s.TopTags__Span>
              <s.TopTags__Span>맨투맨</s.TopTags__Span>
              <s.TopTags__Span>후드</s.TopTags__Span>
            </s.TopTagsBox__Div>
          </s.TagBox__Div>

          {/* 하의 */}
          <s.TagBox__Div>
            <s.TagCategory__Span>하의</s.TagCategory__Span>
            <s.BottomTagsBox__Div>
              <s.BottomTags__Span>청바지</s.BottomTags__Span>
              <s.BottomTags__Span>슬랙스</s.BottomTags__Span>
              <s.BottomTags__Span>반바지</s.BottomTags__Span>
              <s.BottomTags__Span>스커트</s.BottomTags__Span>
            </s.BottomTagsBox__Div>
          </s.TagBox__Div>

          {/* 기타 */}
          <s.TagBox__Div style={{ borderBottom: "none" }}>
            <s.TagCategory__Span>기타</s.TagCategory__Span>
            <s.EtcTagsBox__Div>
              <s.EtcTags__Span>원피스</s.EtcTags__Span>
            </s.EtcTagsBox__Div>
          </s.TagBox__Div>
        </s.TagWrapper__Div>

        <s.Feeds__Div>
          {new Array(20).fill(1).map((el, idx) => (
            <div key={idx}>
              <OotdFeed />
            </div>
          ))}
        </s.Feeds__Div>
      </s.Container_Body__Div>
    </s.Container__Div>
  );
};

export default OotdUI;
