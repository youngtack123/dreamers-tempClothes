import React, { useEffect, useState } from "react";
import * as S from "./MyPageHeaderStyles";
import Script from "next/script";
import Modal from "../../common/commonModal";
import Payment from "../../common/commonModal/payment";
const MyPageHeaderPresenter = (props: any) => {
  const { onClickMyPageList, fetchUserData, weahterData } = props;
  const [modalOpen, setModalOpen] = useState(false);
  const [weatherDetail, setWeatherDetail] = useState("");
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  useEffect(() => {
    checkWeatherDetail();
  }, [weahterData?.getWeather.uvi]);

  const checkWeatherDetail = () => {
    if (weahterData?.getWeather.uvi >= 0 && weahterData?.getWeather.uvi <= 30) {
      setWeatherDetail("좋음");
    } else if (weahterData?.getWeather.uvi >= 31 && weahterData?.getWeather.uvi <= 80) {
      setWeatherDetail("보통");
    } else if (weahterData?.getWeather.uvi >= 81) {
      setWeatherDetail("나쁨");
    }
  };

  return (
    <S.MyPageHeaderWrapperDiv>
      <S.MyPageHeaderWeatherDivFake></S.MyPageHeaderWeatherDivFake>
      <S.MyPageHeaderContentDiv>
        <S.MyPageHeaderProFileImg src="/images/user.png" alt="profileImg"></S.MyPageHeaderProFileImg>
        <S.MyPageHeaderUserNameP>{fetchUserData?.fetchUser.nickname}</S.MyPageHeaderUserNameP>
        <S.MyPageHeaderButtonCountP>{`단추 ${fetchUserData?.fetchUser.button}개`}</S.MyPageHeaderButtonCountP>
        <S.MyPageHeaderDataTagFlexDiv>
          <S.MypageHeaderDataTagDiv>{`#${fetchUserData?.fetchUser.region.id}`}</S.MypageHeaderDataTagDiv>
          <S.MypageHeaderDataTagDiv style={{ marginRight: "0px" }}>{`#${fetchUserData?.fetchUser.style}`}</S.MypageHeaderDataTagDiv>
        </S.MyPageHeaderDataTagFlexDiv>
      </S.MyPageHeaderContentDiv>
      <S.MyPageHeaderWeatherDiv>
        <S.MyPageWeatherFirstDiv>
          <S.MyPageHeaderSunnyImg src="../images/🦆 _Weather Sunny_.png" alt="weatherSunny"></S.MyPageHeaderSunnyImg>
          <S.MyPageHeaderFrontDateSpan>05</S.MyPageHeaderFrontDateSpan>
          <S.MyPageHeaderAfterDateSpan>06</S.MyPageHeaderAfterDateSpan>
        </S.MyPageWeatherFirstDiv>
        <S.MyPageWeatherTempertureDiv>
          <S.MyPageWeatherDoubleDiv>
            <img src="../images/🦆 _Temperature_.png"></img>
            <S.MyPageWeatherTemp>{`${Math.round(weahterData?.getWeather.temp)}°C`}</S.MyPageWeatherTemp>
          </S.MyPageWeatherDoubleDiv>
          <S.MyPageWeatherDoubleDiv>
            <img src="../images/🦆 _umbrella with rain drops_.png"></img>
            <S.MyPageWeatherTemp>{`${weahterData?.getWeather.rainAmount}%`}</S.MyPageWeatherTemp>
          </S.MyPageWeatherDoubleDiv>
        </S.MyPageWeatherTempertureDiv>
      </S.MyPageHeaderWeatherDiv>
    </S.MyPageHeaderWrapperDiv>
  );
};

export default MyPageHeaderPresenter;
