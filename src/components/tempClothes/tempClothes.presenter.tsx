import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Modal2 from "../common/commonModal2";
import FeedDetail from "../feeds/detail/feedDetail.container";
import FeedsWrite from "../feeds/write/feedsWrite.container";
import { Q_GET_WEATHER } from "./tempClothes.queries";
import * as s from "./tempClothes.styles";
import { ITempClothesUIProps } from "./tempClothes.types";

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

  if (hours >= 12) {
    return "오후";
  } else {
    return "오전";
  }
};

const TempClothesUI = (props: ITempClothesUIProps) => {
  const [tagFeed, setTagFeed] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [whichModal, setWhichModal] = useState(false);

  const [nonMember, setNonMember] = useState("");

  const [isVisible, setIsVisible] = useState(false);

  const { data: nonMemberWeatherData } = useQuery(Q_GET_WEATHER, {
    variables: { regionName: String(nonMember) },
  });

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
    setWhichModal(false);
  };

  const selectId = (id: string) => {
    setWhichModal(true);
    setTagFeed(id);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 1000) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    });
  }

  useEffect(() => {
    setNonMember(localStorage.getItem("onboarding3"));
  }, []);

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
            <s.SelectedRegionDiv>{props.userData?.fetchUser.region.id || nonMember}</s.SelectedRegionDiv>
          </s.RegionDiv>
          <s.TodayTempDiv>
            <s.TodayDiv>지금 기온</s.TodayDiv>
            <s.TempNumDiv>{Math.round(props.weatherData?.getWeather.temp) || Math.round(nonMemberWeatherData?.getWeather.temp) || 0}</s.TempNumDiv>
            <s.DegreeDiv>°C</s.DegreeDiv>
          </s.TodayTempDiv>
        </s.MiddleDiv>

        <s.TagDiv>
          <s.PageDiv>지금衣</s.PageDiv>
          {props.tagData?.fetchFeedTags[0]?.tagName ? <s.RecommendTop># {props.tagData?.fetchFeedTags[0].tagName}</s.RecommendTop> : <s.RecommendTop>데이터 분석중</s.RecommendTop>}
          {props.tagData?.fetchFeedTags[1]?.tagName ? <s.RecommendTop># {props.tagData?.fetchFeedTags[1].tagName}</s.RecommendTop> : <s.RecommendTop>데이터 분석중</s.RecommendTop>}
        </s.TagDiv>
      </s.LeftTempDiv>

      {/* 사진들 뿌리는 부분 */}
      <s.RightLookBookDiv>
        {props.tagData?.fetchFeedTags.map((el) => {
          return el.feed.map((el, index) => {
            return (
              <s.LookBookItemImg
                key={index}
                onClick={() => {
                  selectId(el.id), openModal();
                }}
                src={`https://storage.googleapis.com/${el.feedImg[0]?.imgURL}`}
              />
            );
          });
        })}
      </s.RightLookBookDiv>

      {isVisible && (
        <s.ScrollButton onClick={scrollToTop}>
          <s.UpArrowImg src="/images/uparrow.png" />
        </s.ScrollButton>
      )}
      <s.WriteButton onClick={openModal}>+</s.WriteButton>
      {!whichModal && (
        <Modal2 open={modalOpen} close={closeModal}>
          <FeedsWrite closeModal={closeModal} />
        </Modal2>
      )}
      {whichModal && (
        <Modal2 open={modalOpen} close={closeModal}>
          <FeedDetail tagFeed={tagFeed} />
        </Modal2>
      )}
    </s.WrapperDiv>
  );
};

export default TempClothesUI;
