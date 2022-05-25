import { gql, useQuery } from "@apollo/client";
import React, { useState } from "react";
import Modal from "../common/commonModal";
import FeedDetail from "../feeds/detail/feedDetail.container";
import FeedsWrite from "../feeds/write/feedsWrite.container";
import * as s from "./tempClothes.styles";
import { ITempClothesUIProps } from "./tempClothes.types";

// const arr = Array.from(Array(33), (_, index) => index + 1);

const today = () => {
  let now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();

  if (hours > 12) {
    hours = hours - 12;
    return hours + "시 " + minutes + "분";
  } else {
    return hours + "시 " + minutes + "분";
  }
};
const AmPm = () => {
  let now = new Date();
  let hours = now.getHours();

  if (hours > 12) {
    return "오후";
  } else {
    return "오전";
  }
};

const TempClothesUI = (props: ITempClothesUIProps) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [showImage, setShowImage] = useState("");

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
    props.setWhichModal(false);
  };

  // const onClickImage = (event) => {
  //   setShowImage(event.target.value);
  // };

  return (
    <s.WrapperDiv>
      {/* 현재 시간, 기온, 추천 옷차림 태그 부분 */}
      <s.LeftTempDiv>
        <s.TimeDiv>
          <s.CurrentTimeDiv>지금 시간</s.CurrentTimeDiv>
          <s.Daytime>{AmPm()}</s.Daytime>
          <s.Time>{today()}</s.Time>
        </s.TimeDiv>

        <s.MiddleDiv>
          <s.RegionDiv>
            <s.TodayDiv>지금 지역</s.TodayDiv>
            <s.SelectedRegionDiv>{props.userData?.fetchUser.region.id}</s.SelectedRegionDiv>
          </s.RegionDiv>
          <s.TodayTempDiv>
            <s.TodayDiv>지금 기온</s.TodayDiv>
            <s.TempNumDiv>{Math.round(props.weatherData?.getWeather.temp) || 0}</s.TempNumDiv>
            <s.DegreeDiv>°C</s.DegreeDiv>
          </s.TodayTempDiv>
        </s.MiddleDiv>

        <s.TagDiv>
          <s.PageDiv>지금衣</s.PageDiv>
          <s.RecommendTop>{`# ${props.tagData?.fetchFeedTags[0].tagName}`}</s.RecommendTop>
          <s.RecommendTop>{`# ${props.tagData?.fetchFeedTags[1].tagName}`}</s.RecommendTop>
        </s.TagDiv>
      </s.LeftTempDiv>

      {/* 사진들 뿌리는 부분 */}
      <s.RightLookBookDiv>
        {/* {arr.map((_, index) => (
          <s.LookBookItemImg key={index} src="/images/example.png" />
        ))} */}
        {props.feed?.map((el: any) => {
          return el.map((el: any, idx: number) => {
            return (
              <div
                key={idx}
                onClick={() => {
                  props.selectId(el.id), openModal();
                }}
              >
                <s.LookBookItemImg src={`https://storage.googleapis.com/${el[0]}`} />
              </div>
            );
          });
        })}
      </s.RightLookBookDiv>

      <s.WriteButton onClick={openModal}>+</s.WriteButton>
      {!props.whichModal && (
        <Modal open={modalOpen} close={closeModal} header="게시물 등록">
          <FeedsWrite />
        </Modal>
      )}
      {props.whichModal && (
        <Modal open={modalOpen} close={closeModal}>
          <FeedDetail tagFeed={props.tagFeed} />
        </Modal>
      )}
    </s.WrapperDiv>
  );
};

export default TempClothesUI;
