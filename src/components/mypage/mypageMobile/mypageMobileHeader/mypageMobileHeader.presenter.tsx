import * as S from "./mypageMobileHeader.styles";

const MypageMobileHeaderUI = (props) => {
  const { selectMyPageRef, fetchUserData, weahterData } = props;

  const getDate = () => {
    const newDate = new Date();
    const tmp = newDate.getMonth() + 1;
    const mm = tmp.toString().padStart(2, "0");
    const dd = newDate.getDate().toString().padStart(2, "0");
    return `${mm} ${dd}`;
  };

  return (
    <S.MyPageHeaderWrapperDiv>
      {/* <S.MyPageHeaderWeatherDivFake></S.MyPageHeaderWeatherDivFake> */}

      <S.MyPageHeaderContentDiv>
        <S.MyPageHeaderProFileImg src="/images/user.png" alt="profileImg" />
        <S.MyPageHeaderUserNameP>{fetchUserData?.fetchUser.nickname}</S.MyPageHeaderUserNameP>
        <S.MyPageHeaderButtonCountP>{`단추 ${fetchUserData?.fetchUser.button}개`}</S.MyPageHeaderButtonCountP>
        <S.MyPageHeaderDataTagFlexDiv>
          <S.MypageHeaderDataTagDiv>{`#${fetchUserData?.fetchUser.region.id}`}</S.MypageHeaderDataTagDiv>
          <S.StyleDiv>{`#${fetchUserData?.fetchUser.style}`}</S.StyleDiv>
        </S.MyPageHeaderDataTagFlexDiv>
      </S.MyPageHeaderContentDiv>

      <S.MyPageHeaderWeatherDiv>
        {weahterData?.getWeather.weatherIcon === "01d" || weahterData?.getWeather.weatherIcon === "01n" ? (
          <S.MyPageHeaderSunnyImg src="../images/🦆 _Weather Sunny_.png" alt="weatherSunny" />
        ) : (
          <S.MyPageHeaderSunnyImg src={`http://openweathermap.org/img/wn/${weahterData?.getWeather.weatherIcon}@2x.png`} alt="weatherSunny" />
        )}
        <S.MyPageHeaderFrontDateSpan>{getDate()}</S.MyPageHeaderFrontDateSpan>
        <S.ThermometerImg src="../images/🦆 _Temperature_.png" />
        <S.MyPageWeatherTemp style={{ marginRight: "31px" }}>{`${Math.round(weahterData?.getWeather.temp)}°C`}</S.MyPageWeatherTemp>
        <S.RainImg src="../images/🦆 _umbrella with rain drops_.png" />
        <S.MyPageWeatherTemp>{`${weahterData?.getWeather.rainAmount}%`}</S.MyPageWeatherTemp>
      </S.MyPageHeaderWeatherDiv>
    </S.MyPageHeaderWrapperDiv>
  );
};

export default MypageMobileHeaderUI;
