import React from "react";
import * as S from "./MyPageHeaderStyles";
const MyPageHeaderPresenter = (props: any) => {
  const { onClickMyPageList, selectMyPageRef } = props;

  return (
    <S.MyPageHeaderWrapper>
      <S.MyPageHeaderProfileDiv>
        <S.MyPageHeaderProfileDataDiv>
          <S.UserImg src="/images/user.png"></S.UserImg>
          <S.MyPageHeaderDataTagFlexDiv>
            <p
              style={{
                fontSize: "2rem", textAlign: "center"
              }}
            >
              홍영택
            </p>
            <S.MyPageHeaderTagDiv>
              <S.MypageHeaderDataTagDiv>#경기</S.MypageHeaderDataTagDiv>
              <S.MypageHeaderDataTagDiv>#스트릿</S.MypageHeaderDataTagDiv>
            </S.MyPageHeaderTagDiv>
          </S.MyPageHeaderDataTagFlexDiv>
        </S.MyPageHeaderProfileDataDiv>

        <S.DivideLine1 />

        <S.MyPageHeaderListDiv>
          <S.FontSizeHeaderTitleP>단추</S.FontSizeHeaderTitleP>
          <S.CurrentPointDiv>보유단추 <span style={{ fontWeight: "600" }}>12개</span></S.CurrentPointDiv>
          <S.FontSizeHeaderListP>충전하기</S.FontSizeHeaderListP>
        </S.MyPageHeaderListDiv>

        <S.DivideLine2 />

        <S.MyLookBookDiv>
          <S.MyLookBookP>나衣 룩북</S.MyLookBookP>
          <S.FontSizeHeaderListP
            onClick={() => onClickMyPageList(0)}
            ref={(el) => (selectMyPageRef.current[0] = el)}
          >
            개인정보 수정
          </S.FontSizeHeaderListP>
          <S.FontSizeHeaderListP
            onClick={() => onClickMyPageList(1)}
            ref={(el) => (selectMyPageRef.current[1] = el)}
          >
            비밀번호 변경
          </S.FontSizeHeaderListP>
          <S.FontSizeHeaderListP>로그아웃</S.FontSizeHeaderListP>
          <S.FontSizeHeaderListP>회원탈퇴</S.FontSizeHeaderListP>
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
          <S.FontSizeTempertureP style={{ color: "rgba(51, 51, 51, 0.7)" }}>
            05
          </S.FontSizeTempertureP>
          <S.FontSizeTempertureP>06</S.FontSizeTempertureP>
        </div>
        <div>
          <S.MyPageHeaderWeatherFlexDiv style={{ marginTop: "3.3rem" }}>
            <img
              src="../images/🦆 _Temperature_.png"
              style={{ width: "2.8rem", height: "2.8rem" }}
            ></img>
            <S.MyPageHeaderWeatherP>17°C</S.MyPageHeaderWeatherP>
          </S.MyPageHeaderWeatherFlexDiv>
          <S.MyPageHeaderWeatherFlexDiv>
            <img
              src="../images/🦆 _umbrella with rain drops_.png"
              style={{ width: "2.8rem", height: "2.8rem" }}
            ></img>
            <S.MyPageHeaderWeatherP>13%</S.MyPageHeaderWeatherP>
          </S.MyPageHeaderWeatherFlexDiv>
          <S.MyPageHeaderWeatherFlexDiv>
            <img
              src="../images/🦆 _PPE Face Mask_.png"
              style={{ width: "2.8rem", height: "2.8rem" }}
            ></img>
            <S.MyPageHeaderWeatherP>좋음</S.MyPageHeaderWeatherP>
          </S.MyPageHeaderWeatherFlexDiv>
        </div>
      </S.MyPageHeaderWeatherDiv>
    </S.MyPageHeaderWrapper>
  );
};

export default MyPageHeaderPresenter;
