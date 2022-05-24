import React, { useEffect, useState } from "react";
import * as S from "./MyPageHeaderStyles";
import Script from "next/script";
import Modal from "../../common/commonModal";
import Payment from "../../common/commonModal/payment";
const MyPageHeaderPresenter = (props: any) => {
  const { onClickMyPageList, selectMyPageRef, fetchUserData, weahterData } = props;
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

  console.log(weahterData);

  return (
    <S.MyPageHeaderWrapper>
      <Script type="text/javascript" src="https://code.jquery.com/jquery-1.12.4.min.js"></Script>
      <Script type="text/javascript" src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"></Script>

      <S.MyPageHeaderProfileDiv>
        <S.MyPageHeaderProfileDataDiv>
          <S.UserImg src="/images/user.png"></S.UserImg>
          <S.MyPageHeaderDataTagFlexDiv>
            <p
              style={{
                fontSize: "2rem",
                textAlign: "center",
              }}
            >
              {fetchUserData?.fetchUser.nickname}
            </p>
            <S.MyPageHeaderTagDiv>
              <S.MypageHeaderDataTagDiv>{`#${fetchUserData?.fetchUser.region.id}`}</S.MypageHeaderDataTagDiv>
              <S.MypageHeaderDataTagDiv>{`#${fetchUserData?.fetchUser.style}`}</S.MypageHeaderDataTagDiv>
            </S.MyPageHeaderTagDiv>
          </S.MyPageHeaderDataTagFlexDiv>
        </S.MyPageHeaderProfileDataDiv>

        <S.DivideLine1 />

        <S.MyPageHeaderListDiv>
          <S.FontSizeHeaderTitleP>단추</S.FontSizeHeaderTitleP>
          <S.MyPageButtonUl>
            <S.MyPageHeaderButtonListLi>
              <S.FontSizeHeaderListSpan>보유단추</S.FontSizeHeaderListSpan>
              <S.ButtonListCountSpan>{`${fetchUserData?.fetchUser.button}개`}</S.ButtonListCountSpan>
            </S.MyPageHeaderButtonListLi>
            <S.MyPageHeaderButtonListLi>
              <S.FontSizeHeaderListSpan onClick={openModal}>충전하기</S.FontSizeHeaderListSpan>
            </S.MyPageHeaderButtonListLi>
          </S.MyPageButtonUl>
        </S.MyPageHeaderListDiv>

        <S.DivideLine2 />

        <S.MyLookBookDiv>
          <S.MyPlageHeaderListUl>
            <S.MyPageHeaderListLi>
              <S.FontSizeHeaderListSpan onClick={() => onClickMyPageList(0)} ref={(el) => (selectMyPageRef.current[0] = el)}>
                나衣 룩북
              </S.FontSizeHeaderListSpan>
            </S.MyPageHeaderListLi>
            <S.MyPageHeaderListLi>
              <S.FontSizeHeaderListSpan onClick={() => onClickMyPageList(1)} ref={(el) => (selectMyPageRef.current[1] = el)}>
                개인정보 수정
              </S.FontSizeHeaderListSpan>
            </S.MyPageHeaderListLi>
            <S.MyPageHeaderListLi>
              <S.FontSizeHeaderListSpan onClick={() => onClickMyPageList(2)} ref={(el) => (selectMyPageRef.current[2] = el)}>
                비밀번호 변경
              </S.FontSizeHeaderListSpan>
            </S.MyPageHeaderListLi>
            <S.MyPageHeaderListLi>
              <S.FontSizeHeaderListSpan>로그아웃</S.FontSizeHeaderListSpan>
            </S.MyPageHeaderListLi>
            <S.MyPageHeaderListLi>
              <S.FontSizeHeaderListLastSpan>회원탈퇴</S.FontSizeHeaderListLastSpan>
            </S.MyPageHeaderListLi>
          </S.MyPlageHeaderListUl>
        </S.MyLookBookDiv>
      </S.MyPageHeaderProfileDiv>

      <S.MyPageHeaderWeatherDiv>
        <div>
          <img
            src="../images/🦆 _Weather Sunny_.png"
            style={{
              width: "4.9rem",
              height: "4.9rem",
              marginTop: "3.9rem",
              marginBottom: "2rem",
              marginRight: "10.2rem",
            }}
          ></img>
          <S.FontSizeTempertureP style={{ color: "rgba(51, 51, 51, 0.7)" }}>05</S.FontSizeTempertureP>
          <S.FontSizeTempertureP>06</S.FontSizeTempertureP>
        </div>
        <S.MyPageHeaderWeatherWrapperDiv>
          <S.MyPageHeaderWeatherFlexDiv>
            <img src="../images/🦆 _Temperature_.png" style={{ width: "2.8rem", height: "2.8rem" }}></img>
            <S.MyPageHeaderWeatherP>{`${Math.round(weahterData?.getWeather.temp)}°C`}</S.MyPageHeaderWeatherP>
          </S.MyPageHeaderWeatherFlexDiv>
          <S.MyPageHeaderWeatherFlexDiv>
            <img src="../images/🦆 _umbrella with rain drops_.png"></img>
            <S.MyPageHeaderWeatherP>{`${weahterData?.getWeather.rainAmount}%`}</S.MyPageHeaderWeatherP>
          </S.MyPageHeaderWeatherFlexDiv>
          <S.MyPageHeaderWeatherFlexDiv>
            <img src="../images/🦆 _PPE Face Mask_.png" style={{ width: "2.8rem", height: "2.8rem" }}></img>
            <S.MyPageHeaderWeatherP>{weatherDetail}</S.MyPageHeaderWeatherP>
          </S.MyPageHeaderWeatherFlexDiv>
        </S.MyPageHeaderWeatherWrapperDiv>
      </S.MyPageHeaderWeatherDiv>
      <Modal open={modalOpen} close={closeModal} header="단추 충전하기">
        <Payment setModalOpen={setModalOpen}></Payment>
      </Modal>
    </S.MyPageHeaderWrapper>
  );
};

export default MyPageHeaderPresenter;
