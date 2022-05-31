import React, { useEffect, useState } from "react";
import * as S from "./MyPageHeaderStyles";
import Script from "next/script";
import Modal from "../../common/commonModal";
import Payment from "../../common/commonModal/payment";
const MyPageHeaderPresenter = (props: any) => {
  const { onClickMyPageList, fetchUserData, weahterData } = props;
  const [modalOpen, setModalOpen] = useState(false);

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

  console.log(weahterData);

  return (
    <S.MyPageHeaderWrapperDiv>
      <S.MyPageHeaderWeatherDiv>
        <S.MyPageWeatherFirstDiv>
          {/* 날씨 맑음 부분 */}
          {(weahterData?.getWeather.weatherIcon === "01d" || weahterData?.getWeather.weatherIcon === "01n") && <S.MyPageHeaderSunnyImg src="../images/🦆 _Weather Sunny_.png" alt="weatherSunny" />}
          {/* 날씨 구름 + 해 부분 */}
          {(weahterData?.getWeather.weatherIcon === "02d" || weahterData?.getWeather.weatherIcon === "02n") && <S.MyPageHeaderSunnyImg src="/images/sunnycloudy.png" />}
          {/* 날씨 구름 부분 */}
          {(weahterData?.getWeather.weatherIcon === "03d" ||
            weahterData?.getWeather.weatherIcon === "03n" ||
            weahterData?.getWeather.weatherIcon === "04d" ||
            weahterData?.getWeather.weatherIcon === "04n") && <S.MyPageHeaderSunnyImg src="/images/cloudy.png" alt="weatherSunny" />}
          {/* 날씨 비 부분 */}
          {(weahterData?.getWeather.weatherIcon === "09d" ||
            weahterData?.getWeather.weatherIcon === "09n" ||
            weahterData?.getWeather.weatherIcon === "10d" ||
            weahterData?.getWeather.weatherIcon === "10n") && <S.MyPageHeaderSunnyImg src="/images/rainny.png" alt="weatherSunny" />}
          {/* 날씨 번개 부분 */}
          {(weahterData?.getWeather.weatherIcon === "11d" || weahterData?.getWeather.weatherIcon === "11n") && <S.MyPageHeaderSunnyImg src="/images/lightning.png" alt="weatherSunny" />}
          {/* 날씨 눈 부분 */}
          {(weahterData?.getWeather.weatherIcon === "13d" || weahterData?.getWeather.weatherIcon === "13n") && <S.MyPageHeaderSunnyImg src="/images/snowy.png" alt="weatherSunny" />}
          <S.MyPageHeaderDateDiv>
            <S.MyPageHeaderMonthSpan>{getDate().month}</S.MyPageHeaderMonthSpan>
            <S.MyPageHeaderDaySpan>{getDate().day}</S.MyPageHeaderDaySpan>
          </S.MyPageHeaderDateDiv>
        </S.MyPageWeatherFirstDiv>

        <S.MyPageWeatherTempertureDiv>
          <S.MyPageWeatherDoubleDiv>
            <S.ThermometerImg src="../images/🦆 _Temperature_.png" />
            <S.MyPageWeatherTemp>{weahterData?.getWeather.temp ? `${Math.round(weahterData?.getWeather.temp)}°C` : "-°C"}</S.MyPageWeatherTemp>
          </S.MyPageWeatherDoubleDiv>

          <S.MyPageWeatherDoubleDiv>
            <S.RainImg src="../images/🦆 _umbrella with rain drops_.png" />
            <S.MyPageWeatherTemp>{weahterData?.getWeather.rainAmount ? `${Math.ceil(weahterData?.getWeather.rainAmount)}%` : "0%"}</S.MyPageWeatherTemp>
          </S.MyPageWeatherDoubleDiv>
        </S.MyPageWeatherTempertureDiv>
      </S.MyPageHeaderWeatherDiv>

      <S.MyPageHeaderContentDiv>
        <S.MyPageHeaderProFileImg src="/images/user.png" alt="profileImg" />
        <S.MyPageHeaderUserNameSpan>{fetchUserData?.fetchUser.nickname}</S.MyPageHeaderUserNameSpan>
        <S.MyPageHeaderButtonCountSpan>{fetchUserData?.fetchUser.button ? `단추 ${fetchUserData?.fetchUser.button} 개` : "0개"}</S.MyPageHeaderButtonCountSpan>
        <S.MyPageHeaderDataTagFlexDiv>
          <S.MypageHeaderDataTagDiv>{fetchUserData?.fetchUser.region.id ? `#${fetchUserData?.fetchUser.region.id}` : "-"}</S.MypageHeaderDataTagDiv>
          <S.MypageHeaderDataTagDiv style={{ marginRight: "0px" }}>{fetchUserData?.fetchUser.style ? `#${fetchUserData?.fetchUser.style}` : "-"}</S.MypageHeaderDataTagDiv>
        </S.MyPageHeaderDataTagFlexDiv>
      </S.MyPageHeaderContentDiv>
    </S.MyPageHeaderWrapperDiv>
  );
};

export default MyPageHeaderPresenter;
