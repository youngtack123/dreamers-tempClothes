import { useState } from "react";
import * as S from "./otherUser.styles";
import Modal from "../common/commonModal";
import FeedDetail from "../feeds/detail/feedDetail.container";
import { IOtherUserUIProps } from "./otherUser.types";

const OtherUserUI = (props: IOtherUserUIProps) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  const getDate = () => {
    const newDate = new Date();
    const tmp = newDate.getMonth() + 1;
    const mm = tmp.toString().padStart(2, "0");
    const dd = newDate.getDate().toString().padStart(2, "0");
    return {
      month: mm,
      day: dd,
    };
  };

  return (
    <div>
      <S.MainWrapperDiv>
        <S.MyPageHeaderWeatherDiv>
          <S.MyPageWeatherFirstDiv>
            {/* 날씨 맑음 부분 */}
            {(props.weahterData?.getWeather.weatherIcon === "01d" || props.weahterData?.getWeather.weatherIcon === "01n") && (
              <S.MyPageHeaderSunnyImg src="../images/🦆 _Weather Sunny_.png" alt="weatherSunny" />
            )}
            {/* 날씨 구름 + 해 부분 */}
            {(props.weahterData?.getWeather.weatherIcon === "02d" || props.weahterData?.getWeather.weatherIcon === "02n") && <S.MyPageHeaderSunnyImg src="/images/sunnycloudy.png" />}
            {/* 날씨 구름 부분 */}
            {(props.weahterData?.getWeather.weatherIcon === "03d" ||
              props.weahterData?.getWeather.weatherIcon === "03n" ||
              props.weahterData?.getWeather.weatherIcon === "04d" ||
              props.weahterData?.getWeather.weatherIcon === "04n") && <S.MyPageHeaderSunnyImg src="/images/cloudy.png" alt="weatherSunny" />}
            {/* 날씨 비 부분 */}
            {(props.weahterData?.getWeather.weatherIcon === "09d" ||
              props.weahterData?.getWeather.weatherIcon === "09n" ||
              props.weahterData?.getWeather.weatherIcon === "10d" ||
              props.weahterData?.getWeather.weatherIcon === "10n") && <S.MyPageHeaderSunnyImg src="/images/rainny.png" alt="weatherSunny" />}
            {/* 날씨 번개 부분 */}
            {(props.weahterData?.getWeather.weatherIcon === "11d" || props.weahterData?.getWeather.weatherIcon === "11n") && <S.MyPageHeaderSunnyImg src="/images/lightning.png" alt="weatherSunny" />}
            {/* 날씨 눈 부분 */}
            {(props.weahterData?.getWeather.weatherIcon === "13d" || props.weahterData?.getWeather.weatherIcon === "13n") && <S.MyPageHeaderSunnyImg src="/images/snowy.png" alt="weatherSunny" />}
            <S.MyPageHeaderDateDiv>
              <S.MyPageHeaderMonthSpan>{getDate().month}</S.MyPageHeaderMonthSpan>
              <S.MyPageHeaderDaySpan>{getDate().day}</S.MyPageHeaderDaySpan>
            </S.MyPageHeaderDateDiv>
          </S.MyPageWeatherFirstDiv>

          <S.MyPageWeatherTempertureDiv>
            <S.MyPageWeatherDoubleDiv>
              <S.ThermometerImg src="../images/🦆 _Temperature_.png" />
              <S.MyPageWeatherTemp>{props.weahterData?.getWeather.temp ? `${Math.round(props.weahterData?.getWeather.temp)}°C` : "-°C"}</S.MyPageWeatherTemp>
            </S.MyPageWeatherDoubleDiv>

            <S.MyPageWeatherDoubleDiv>
              <S.RainImg src="../images/🦆 _umbrella with rain drops_.png" />
              <S.MyPageWeatherTemp>{props.weahterData?.getWeather.rainAmount ? `${Math.ceil(props.weahterData?.getWeather.rainAmount)}%` : "0%"}</S.MyPageWeatherTemp>
            </S.MyPageWeatherDoubleDiv>
          </S.MyPageWeatherTempertureDiv>
        </S.MyPageHeaderWeatherDiv>

        <S.MyPageHeaderContentDiv>
          <S.MyPageHeaderProFileImg src="/images/user.png" alt="profileImg" />
          <S.MyPageHeaderUserNameSpan>{props.ClickedUserData?.fetchNickname.nickname}</S.MyPageHeaderUserNameSpan>
          <S.MyPageHeaderDataTagFlexDiv>
            <S.MypageHeaderDataTagDiv>{props.ClickedUserData?.fetchNickname.region.id ? `#${props.ClickedUserData?.fetchNickname.region.id}` : "-"}</S.MypageHeaderDataTagDiv>
            <S.MypageHeaderDataTagDiv style={{ marginRight: "0px" }}>{props.ClickedUserData?.fetchNickname.style ? `#${props.ClickedUserData?.fetchNickname.style}` : "-"}</S.MypageHeaderDataTagDiv>
          </S.MyPageHeaderDataTagFlexDiv>
        </S.MyPageHeaderContentDiv>
      </S.MainWrapperDiv>

      <S.MyPageWrapperDiv>
        <S.MenuDiv>
          <S.MenuUl>
            <S.Menuli>나衣 룩북</S.Menuli>
          </S.MenuUl>
        </S.MenuDiv>
        <S.MyPageContendWrapperDiv>
          <S.MyPageFeedWrapperDiv>
            <S.MyPageFeedLookBooxDiv>
              {props.ClickedUserFeed?.fetchUserFeeds.feeds.map((el, index) => {
                return (
                  <div
                    key={index}
                    onClick={() => {
                      props.selectId(el.id), openModal();
                    }}
                  >
                    <S.MypageFeedImage src={`https://storage.googleapis.com/${el.feedImg[0]?.imgURL}`} alt="mypageImage" key={index} width={242} height={362} />
                  </div>
                );
              })}
            </S.MyPageFeedLookBooxDiv>
            <Modal open={modalOpen} close={closeModal}>
              <FeedDetail myPageFeedId={props.myPageFeedId} />
            </Modal>
          </S.MyPageFeedWrapperDiv>
        </S.MyPageContendWrapperDiv>
      </S.MyPageWrapperDiv>
    </div>
  );
};

export default OtherUserUI;
