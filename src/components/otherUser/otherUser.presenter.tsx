import { useState } from "react";
import * as S from "./otherUser.styles";
import Modal from "../common/commonModal";
import FeedDetail from "../feeds/detail/feedDetail.container";

const OtherUserUI = (props: any) => {
  const { fetchUserData, weahterData, ClickedUserFeed, ClickedUserData, selectId, myPageFeedId } = props;

  const [modalOpen, setModalOpen] = useState(false);

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
    return `${mm} ${dd}`;
  };

  console.log("weahterData", weahterData);

  return (
    <div>
      <div>
        <S.MyPageHeaderWrapperDiv>
          <S.MyPageHeaderWeatherDivFake></S.MyPageHeaderWeatherDivFake>
          <S.MyPageHeaderContentDiv>
            <S.MyPageHeaderProFileImg src="/images/user.png" alt="profileImg"></S.MyPageHeaderProFileImg>
            <S.MyPageHeaderUserNameP>{ClickedUserData?.fetchNickname.nickname}</S.MyPageHeaderUserNameP>
            <S.MyPageHeaderDataTagFlexDiv>
              <S.MypageHeaderDataTagDiv>{`#${ClickedUserData?.fetchNickname.region.id}`}</S.MypageHeaderDataTagDiv>
              <S.MypageHeaderDataTagDiv style={{ marginRight: "0px" }}>{`#${ClickedUserData?.fetchNickname.style}`}</S.MypageHeaderDataTagDiv>
            </S.MyPageHeaderDataTagFlexDiv>
          </S.MyPageHeaderContentDiv>
          <S.MyPageHeaderWeatherDiv>
            <S.MyPageWeatherFirstDiv>
              {weahterData?.getWeather.weatherIcon === "01d" || weahterData?.getWeather.weatherIcon === "01n" ? (
                <S.MyPageHeaderSunnyImg src="../images/🦆 _Weather Sunny_.png" alt="weatherSunny" />
              ) : (
                <S.MyPageHeaderSunnyImg src={`http://openweathermap.org/img/wn/${weahterData?.getWeather.weatherIcon}@2x.png`} alt="weatherSunny" />
              )}
              <S.MyPageHeaderFrontDateSpan>{getDate()}</S.MyPageHeaderFrontDateSpan>
            </S.MyPageWeatherFirstDiv>
            <S.MyPageWeatherTempertureDiv>
              <S.MyPageWeatherDoubleDiv>
                <S.ThermometerImg src="../images/🦆 _Temperature_.png" />
                <S.MyPageWeatherTemp>{`${Math.round(weahterData?.getWeather.temp)}°C`}</S.MyPageWeatherTemp>
              </S.MyPageWeatherDoubleDiv>
              <S.MyPageWeatherDoubleDiv>
                <S.RainImg src="../images/🦆 _umbrella with rain drops_.png"></S.RainImg>
                <S.MyPageWeatherTemp>{`${Math.round(weahterData?.getWeather.rainAmount)}%`}</S.MyPageWeatherTemp>
              </S.MyPageWeatherDoubleDiv>
            </S.MyPageWeatherTempertureDiv>
          </S.MyPageHeaderWeatherDiv>
        </S.MyPageHeaderWrapperDiv>
      </div>
      <S.MyPageWrapperDiv>
        <S.MenuDiv>
          <S.MenuUl>
            <S.Menuli>나衣 룩북</S.Menuli>
          </S.MenuUl>
        </S.MenuDiv>
        <S.MyPageContendWrapperDiv>
          <S.MyPageFeedWrapperDiv>
            <S.MyPageFeedLookBooxDiv>
              {ClickedUserFeed?.fetchUserFeeds.feeds.map((el, index) => {
                return (
                  <div
                    key={index}
                    onClick={() => {
                      selectId(el.id), openModal();
                    }}
                  >
                    <S.MypageFeedImage src={`https://storage.googleapis.com/${el.feedImg[0]?.imgURL}`} alt="mypageImage" key={index} width={242} height={362} />
                  </div>
                );
              })}
            </S.MyPageFeedLookBooxDiv>
            <Modal open={modalOpen} close={closeModal}>
              <FeedDetail myPageFeedId={myPageFeedId} />
            </Modal>
          </S.MyPageFeedWrapperDiv>
        </S.MyPageContendWrapperDiv>
      </S.MyPageWrapperDiv>
    </div>
  );
};

export default OtherUserUI;
