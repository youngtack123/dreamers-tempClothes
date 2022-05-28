import OotdFeed from "../commonFeed/coomonFeed.container";
// import { withAuth } from "../hoc/withAuth";
import * as Ootd from "./Ootd.styles";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../common/store";
import FeedDetail from "../feeds/detail/feedDetail.container";
import Modal from "../common/commonModal";
import { useEffect, useRef, useState } from "react";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import InfiniteScroll from "react-infinite-scroller";
import Link from "next/link";
import FeedsWrite from "../feeds/write/feedsWrite.container";
import { useMediaQuery } from "react-responsive";
import MFeedsWrite from "../feeds/forMobile/mFeedsWrite.container";

const OotdUI = (props) => {
  const isPc = useMediaQuery({
    query: "(min-width:768px)",
  });
  const isMobile = useMediaQuery({
    query: "(max-width:767px)",
  });

  const router = useRouter();
  const [accessToken] = useRecoilState(accessTokenState);
  // console.log("???", accessToken);

  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    console.log("열려라");
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // const onClickMoveToDetail = () => {
  //   router.push(`/feeds/${router.query.feedId}`);
  // };

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    760: 2,
    600: 1,
  };

  const date = new Date();

  const Month = String(date.getMonth() + 1).padStart(2, "0");
  const Day = String(date.getDate()).padStart(2, "0");

  return (
    <>
      <Ootd.Container__Div>
        <Ootd.Container_Side__Div>
          <Ootd.TodayInfo__Div>
            <Ootd.Date__Div>
              <Ootd.Month__Span>{Month}</Ootd.Month__Span>
              <Ootd.Day__Span>{Day}</Ootd.Day__Span>
            </Ootd.Date__Div>

            <Ootd.Temp__Span>{Math.round(props.tempData?.getWeather.temp) || `-`}°C</Ootd.Temp__Span>
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
                  <Ootd.RegionTags__Li key={idx} id={idx} onClick={() => props.onClickRegion(el)} regionSelected={props.regionSelected === el}>
                    {el}
                  </Ootd.RegionTags__Li>
                ))}
              </Ootd.RegionList__Ul>
            </Ootd.TagBox__Div>

            {/* 스타일 */}
            <Ootd.TagBox__Div>
              <Ootd.TagCategory__Span>스타일</Ootd.TagCategory__Span>
              <Ootd.StyleList__Ul>
                {props.tagCategory[0].tagItem.map((el, idx) => (
                  <Ootd.StyleTags__Li key={idx} onClick={() => props.onClickTag(el)} tagSelected={props.tagSelected.includes(el)}>
                    {el}
                  </Ootd.StyleTags__Li>
                ))}
              </Ootd.StyleList__Ul>
            </Ootd.TagBox__Div>

            {/* 아우터 */}
            <Ootd.TagBox__Div>
              <Ootd.TagCategory__Span>아우터</Ootd.TagCategory__Span>
              <Ootd.OuterList__Ul>
                {props.tagCategory[1].tagItem.map((el, idx) => (
                  <Ootd.OuterTags__Li key={idx} onClick={() => props.onClickTag(el)} tagSelected={props.tagSelected.includes(el)}>
                    {el}
                  </Ootd.OuterTags__Li>
                ))}
              </Ootd.OuterList__Ul>
            </Ootd.TagBox__Div>

            {/* 상의 */}
            <Ootd.TagBox__Div>
              <Ootd.TagCategory__Span>상의</Ootd.TagCategory__Span>
              <Ootd.TopTagsList__Ul>
                {props.tagCategory[2].tagItem.map((el, idx) => (
                  <Ootd.StyleTags__Li key={idx} onClick={() => props.onClickTag(el)} tagSelected={props.tagSelected.includes(el)}>
                    {el}
                  </Ootd.StyleTags__Li>
                ))}
              </Ootd.TopTagsList__Ul>
            </Ootd.TagBox__Div>

            {/* 하의 */}
            <Ootd.TagBox__Div>
              <Ootd.TagCategory__Span>하의</Ootd.TagCategory__Span>
              <Ootd.BottomList__Ul>
                {props.tagCategory[3].tagItem.map((el, idx) => (
                  <Ootd.StyleTags__Li key={idx} onClick={() => props.onClickTag(el)} tagSelected={props.tagSelected.includes(el)}>
                    {el}
                  </Ootd.StyleTags__Li>
                ))}
              </Ootd.BottomList__Ul>
            </Ootd.TagBox__Div>

            {/* 기타 */}
            <Ootd.TagBox__Div>
              <Ootd.TagCategory__Span>기타</Ootd.TagCategory__Span>
              <Ootd.EtcList__Ul>
                {props.tagCategory[4].tagItem.map((el, idx) => (
                  <Ootd.StyleTags__Li key={idx} onClick={() => props.onClickTag(el)} tagSelected={props.tagSelected.includes(el)}>
                    {el}
                  </Ootd.StyleTags__Li>
                ))}
              </Ootd.EtcList__Ul>
            </Ootd.TagBox__Div>
          </Ootd.TagWrapper__Div>
        </Ootd.Container_Side__Div>

        <Ootd.Container_Body__Div>
          {/* 선택한 태그 뿌리기*/}
          <Ootd.MyTag__Div>
            나衣 태그
            <Ootd.TagSelect__Div>
              <Ootd.TagSeletedUnit__Span>#{props.myRegion}</Ootd.TagSeletedUnit__Span>

              {props.myTag.map((el, idx) => (
                <Ootd.TagSeletedUnit__Span key={idx} onClick={() => props.onClickRemoveTag(el)}>
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
          <div style={{ height: "900px", overflow: "auto" }}>
            <InfiniteScroll pageStart={0} loadMore={props.onLoadMore} hasMore={true} useWindow={false}>
              <Ootd.Aaa breakpointCols={breakpointColumnsObj} className="my-masonry-grid" columnClassName="my-masonry-grid_column">
                {props.data?.fetchFeeds.feeds.map((el, idx) => (
                  <div key={idx}>
                    <OotdFeed key={idx} el={el} myTag={props.myTag} myRegion={props.myRegion} tagSelected={props.tagSelected} id={el.id} />
                  </div>
                ))}
              </Ootd.Aaa>
            </InfiniteScroll>
          </div>
          {/* <div onClick={props.onClickNextPage}> end </div> */}
        </Ootd.Container_Body__Div>

        {/* <Modal open={modalOpen} close={closeModal} header="게시글 상세정보">
        <FeedDetail ootdFeedId={router.query.feedId}></FeedDetail>
      </Modal> */}

        {/* </s.Container_Body__Div> */}
        <Ootd.ScrollButton onClick={scrollToTop}>
          <Ootd.UpArrowImg src="/images/uparrow.png" />
        </Ootd.ScrollButton>

        <Ootd.WriteButton onClick={openModal}>+</Ootd.WriteButton>

        <Modal open={modalOpen} close={closeModal}>
          {isPc && <FeedsWrite />}
          {isMobile && <MFeedsWrite />}
          {/* <MFeedsWrite /> */}
        </Modal>
      </Ootd.Container__Div>
    </>
  );
};

export default OotdUI;
