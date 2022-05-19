import OotdFeed from "../commonFeed";
import { withAuth } from "../hoc/withAuth";
import * as s from "./Ootd.styles";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../common/store";

const OotdUI = () => {
  const [accessToken] = useRecoilState(accessTokenState);
  console.log("???", accessToken);
  return (
    <Ootd.Container__Div>
      {/* <s.Container_head__Div> */}
      {/* <s.TodayInfo__Div>
          <s.Date__Div>
            <s.Month__Span>05</s.Month__Span>
            <s.Day__Span>06</s.Day__Span>
          </s.Date__Div>

          <s.Temp__Span>22°C</s.Temp__Span>
        </s.TodayInfo__Div> */}

      {/* <s.MyTag__Div>
          나衣 태그
          <s.TagSelect__Div>
            <s.TagSeletedUnit__Span>#전라</s.TagSeletedUnit__Span>
            <s.TagSeletedUnit__Span>#맨투맨</s.TagSeletedUnit__Span>
          </s.TagSelect__Div>
        </s.MyTag__Div> */}
      {/* </s.Container_head__Div> */}

      {/* <s.Container_Body__Div> */}
      <Ootd.Container_Side__Div>
        <Ootd.TodayInfo__Div>
          <Ootd.Date__Div>
            <Ootd.Month__Span>05</Ootd.Month__Span>
            <Ootd.Day__Span>06</Ootd.Day__Span>
          </Ootd.Date__Div>

          <Ootd.Temp__Span>22°C</Ootd.Temp__Span>
        </Ootd.TodayInfo__Div>

        <Ootd.TagWrapper__Div>
          <Ootd.TagWrapper_Head__Div>
            <Ootd.Tag__Span>태그</Ootd.Tag__Span>
          </Ootd.TagWrapper_Head__Div>

          {/* 지역 */}
          <Ootd.TagBox__Div>
            <Ootd.TagCategory__Span>지역</Ootd.TagCategory__Span>
            <Ootd.RegionList__Ul>
              {props.regionCategory.map((el, idx) => (
                <Ootd.RegionTags__Li
                  key={idx}
                  onClick={() => props.onClickRegion(el)}
                  isSelected={props.isSelected}
                >
                  {" "}
                  {el}{" "}
                </Ootd.RegionTags__Li>
              ))}
              {/* <Ootd.RegionTags__Li>서울</Ootd.RegionTags__Li>
              <Ootd.RegionTags__Li>경기도</Ootd.RegionTags__Li>
              <Ootd.RegionTags__Li>강원도</Ootd.RegionTags__Li>
              <Ootd.RegionTags__Li>충청도</Ootd.RegionTags__Li>
              <Ootd.RegionTags__Li>경상도</Ootd.RegionTags__Li>
              <Ootd.RegionTags__Li>전라도</Ootd.RegionTags__Li>
              <Ootd.RegionTags__Li>제주도</Ootd.RegionTags__Li> */}
            </Ootd.RegionList__Ul>
          </Ootd.TagBox__Div>

          {/* 스타일 */}
          <Ootd.TagBox__Div>
            <Ootd.TagCategory__Span>스타일</Ootd.TagCategory__Span>
            <Ootd.StyleList__Ul>
              {props.tagCategory[0].tagItem.map((el, idx) => (
                <Ootd.StyleTags__Li
                  key={idx}
                  onClick={() => props.onClickTag(el)}
                  isSelected={props.isSelected}
                >
                  {el}
                </Ootd.StyleTags__Li>
              ))}
              {/* <Ootd.StyleTags__Li>캐주얼</Ootd.StyleTags__Li>
              <Ootd.StyleTags__Li>스트릿</Ootd.StyleTags__Li>
              <Ootd.StyleTags__Li>트레이닝</Ootd.StyleTags__Li>
              <Ootd.StyleTags__Li>포멀</Ootd.StyleTags__Li>
              <Ootd.StyleTags__Li>세미포멀</Ootd.StyleTags__Li> */}
            </Ootd.StyleList__Ul>
          </Ootd.TagBox__Div>

          {/* 아우터 */}
          <Ootd.TagBox__Div>
            <Ootd.TagCategory__Span>아우터</Ootd.TagCategory__Span>
            <Ootd.OuterList__Ul>
              {props.tagCategory[1].tagItem.map((el, idx) => (
                <Ootd.OuterTags__Li
                  key={idx}
                  onClick={() => props.onClickTag(el)}
                >
                  {el}
                </Ootd.OuterTags__Li>
              ))}
              {/* <Ootd.OuterTags__Li>트랙자켓</Ootd.OuterTags__Li>
              <Ootd.OuterTags__Li>플리스</Ootd.OuterTags__Li>
              <Ootd.OuterTags__Li>자켓</Ootd.OuterTags__Li>
              <Ootd.OuterTags__Li>점퍼</Ootd.OuterTags__Li>
              <Ootd.OuterTags__Li>코트</Ootd.OuterTags__Li> */}
            </Ootd.OuterList__Ul>
          </Ootd.TagBox__Div>

          {/* 상의 */}
          <Ootd.TagBox__Div>
            <Ootd.TagCategory__Span>상의</Ootd.TagCategory__Span>
            <Ootd.TopTagsList__Ul>
              {props.tagCategory[2].tagItem.map((el, idx) => (
                <Ootd.StyleTags__Li
                  key={idx}
                  onClick={() => props.onClickTag(el)}
                >
                  {el}
                </Ootd.StyleTags__Li>
              ))}
              {/* <Ootd.TopTags__Li>티셔츠</Ootd.TopTags__Li>
              <Ootd.TopTags__Li>셔츠/블라우스</Ootd.TopTags__Li>
              <Ootd.TopTags__Li>니트</Ootd.TopTags__Li>
              <Ootd.TopTags__Li>맨투맨</Ootd.TopTags__Li>
              <Ootd.TopTags__Li>후드</Ootd.TopTags__Li> */}
            </Ootd.TopTagsList__Ul>
          </Ootd.TagBox__Div>

          {/* 하의 */}
          <Ootd.TagBox__Div>
            <Ootd.TagCategory__Span>하의</Ootd.TagCategory__Span>
            <Ootd.BottomList__Ul>
              {props.tagCategory[3].tagItem.map((el, idx) => (
                <Ootd.StyleTags__Li
                  key={idx}
                  onClick={() => props.onClickTag(el)}
                >
                  {el}
                </Ootd.StyleTags__Li>
              ))}
              {/* <Ootd.BottomTags__Li>청바지</Ootd.BottomTags__Li>
              <Ootd.BottomTags__Li>슬랙스</Ootd.BottomTags__Li>
              <Ootd.BottomTags__Li>반바지</Ootd.BottomTags__Li>
              <Ootd.BottomTags__Li>스커트</Ootd.BottomTags__Li> */}
            </Ootd.BottomList__Ul>
          </Ootd.TagBox__Div>

          {/* 기타 */}
          <Ootd.TagBox__Div>
            <Ootd.TagCategory__Span>기타</Ootd.TagCategory__Span>
            <Ootd.EtcList__Ul>
              {props.tagCategory[4].tagItem.map((el, idx) => (
                <Ootd.StyleTags__Li
                  key={idx}
                  onClick={() => props.onClickTag(el)}
                >
                  {el}
                </Ootd.StyleTags__Li>
              ))}
              {/* <Ootd.EtcTags__Li>원피스</Ootd.EtcTags__Li> */}
            </Ootd.EtcList__Ul>
          </Ootd.TagBox__Div>
        </Ootd.TagWrapper__Div>
      </Ootd.Container_Side__Div>

      <Ootd.Container_Body__Div>
        {/* 선택한 태그 */}
        <Ootd.MyTag__Div>
          나衣 태그
          <Ootd.TagSelect__Div>
            <Ootd.TagSeletedUnit__Span>
              #{props.myRegion}
            </Ootd.TagSeletedUnit__Span>

            {props.myTag.map((el, idx) => (
              <Ootd.TagSeletedUnit__Span
                key={idx}
                onClick={() => props.onClickRemoveTag(el)}
              >
                #{el}
              </Ootd.TagSeletedUnit__Span>
            ))}
            {/* {props.myAllTags.map((el, idx) => (
              <Ootd.TagSeletedUnit__Span key={idx}>
                {el}
              </Ootd.TagSeletedUnit__Span>
            ))} */}
            {/* <s.TagSeletedUnit__Span>#맨투맨</s.TagSeletedUnit__Span> */}
          </Ootd.TagSelect__Div>
        </Ootd.MyTag__Div>

        {/* 게시물 페칭 */}
        <Ootd.Feeds__Div>
          <Ootd.Aaa
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {props.data?.fetchFeedsWithTags.map((el, idx) => (
              <div key={idx}>
                <OotdFeed
                  key={idx}
                  el={el}
                  myTag={props.myTag}
                  myRegion={props.myRegion}
                  isSelected={props.isSelected}
                />
              </div>
            ))}
          </Ootd.Aaa>

          {/* {new Array(20).fill(1).map((el, idx) => (
            <div key={idx}>
              <OotdFeed myTag={props.myTag} myRegion={props.myRegion} />
            </div>
          ))} */}
        </Ootd.Feeds__Div>
      </Ootd.Container_Body__Div>
      {/* </s.Container_Body__Div> */}
    </Ootd.Container__Div>
  );
};

export default OotdUI;
