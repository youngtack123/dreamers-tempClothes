import React from "react";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { breakpoints } from "../src/components/common/breakPoint";

const Body = styled.div`
  width: 100%;
  background-color: #f9f9f9;
`;

const Wrapper1 = styled.div`
  width: 144rem;
  height: 102.4rem;
  min-height: 90rem;
  background-color: #f9f9f9;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  position: relative;
  @media ${breakpoints.tablet} {
    width: 860px;
  }
`;

const MainImg = styled.img`
  position: absolute;
  width: 54.6rem;
  height: 64.6rem;
  left: 68.4rem;
  top: 9.1rem;
`;

const SmallLogo = styled.img`
  position: absolute;
  width: 9.249rem;
  height: 13.3rem;
  left: 31.3rem;
  top: 35.9rem;
`;

const TitleKo = styled.span`
  font-family: "Pretendard";
  font-weight: 200;
  position: absolute;
  left: 23.2rem;
  top: 51.1rem;
  font-size: 3.2rem;
  line-height: 2.8rem;
  letter-spacing: 0.48em;
  color: #5c5c5c;
`;

const DecoBar = styled.div`
  position: absolute;
  width: 51.7rem;
  height: 0rem;
  left: 80.3rem;
  top: 52.8rem;
  border: 0.5px solid #5c5c5c;
`;

const TitleEng1 = styled.span`
  font-family: "Bodoni 72 Oldstyle";
  font-style: normal;
  font-weight: 400;
  font-size: 8rem;
  line-height: 8rem;
  color: #434343;
  position: absolute;
  left: 23.2rem;
  top: 55.8rem;
`;

const TitleEng2 = styled.span`
  font-family: "Bodoni 72 Oldstyle";
  font-style: normal;
  font-weight: 400;
  font-size: 8rem;
  line-height: 8rem;
  color: #434343;
  position: absolute;
  left: 59.1rem;
  top: 62.5rem;
`;

const Wrapper2 = styled.div`
  width: 144rem;
  height: 102.4rem;
  min-height: 90rem;
  background: #fff2b2;
  margin: 0 auto;
  position: relative;
`;

const SubTitleEng1 = styled.span`
  position: absolute;
  left: 40.1rem;
  top: 17.6rem;
  font-family: "Bodoni 72 Oldstyle";
  font-style: normal;
  font-weight: 400;
  font-size: 8rem;
  line-height: 8rem;
  color: #434343;
`;

const SubTitleEng2 = styled.span`
  position: absolute;
  left: 83.4rem;
  top: 58.2rem;
  font-family: "Bodoni 72 Oldstyle";
  font-style: normal;
  font-weight: 400;
  font-size: 8rem;
  line-height: 8rem;
  color: #434343;
`;
const SubImg1 = styled.img`
  position: absolute;
  width: 32.3rem;
  height: 42.8rem;
  left: 27.5rem;
  top: 19.4rem;
`;

const SubImg2 = styled.img`
  position: absolute;
  width: 32.5rem;
  height: 42.1rem;
  left: 59rem;
  top: 22.5rem;
`;

const SubImg3 = styled.img`
  position: absolute;
  width: 35.4rem;
  height: 40.8rem;
  left: 88.1rem;
  top: 21.4rem;
`;

const SmallLogo2 = styled.img`
  position: absolute;
  width: 9.249rem;
  height: 13.3rem;
  left: 57.4rem;
  top: 63.7rem;
`;

const SubTitleKo = styled.span`
  font-family: "Pretendard";
  font-weight: 200;
  position: absolute;
  left: 50.5rem;
  top: 78.4rem;
  font-size: 2.8rem;
  line-height: 2.8rem;
  letter-spacing: 0.48em;
  color: #5c5c5c;
`;

const Wrapper3 = styled.div`
  width: 144rem;
  height: 102.4rem;
  min-height: 90rem;
  background-color: #f9f9f9;
  overflow: hidden;
  margin: 0 auto;
  position: relative;
`;

const LineBox = styled.div`
  position: absolute;
  width: 69.4rem;
  height: 82.1rem;
  left: 6.2rem;
  top: 8.9rem;
  border: 1px solid #5c5c5c;
`;

const LandImg = styled.img`
  position: absolute;
  width: 67rem;
  height: 79.3rem;
  left: 3.6rem;
  top: 7.3rem;
`;

const LandingTitle = styled.span`
  position: absolute;
  left: 91.4rem;
  top: 19rem;
  font-family: "Pretendard";
  font-weight: 200;
  font-size: 2rem;
  line-height: 2.8rem;
  letter-spacing: 0.48em;
  color: #5c5c5c;
`;

const Ondoui = styled.span`
  position: absolute;
  left: 104.9rem;
  top: 25.5rem;
  font-family: "Pretendard";
  font-weight: 200;
  font-weight: 200;
  font-size: 2.8rem;
  line-height: 2.8rem;
  letter-spacing: 0.4em;
  color: #5c5c5c;
`;

const MainLogo = styled.img`
  position: absolute;
  width: 23.9rem;
  height: 19.9rem;
  left: 98.9rem;
  top: 36.7rem;
`;

const Login = styled.span`
  position: absolute;
  left: 107.6rem;
  top: 68.6rem;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 200;
  font-size: 2rem;
  line-height: 2.5rem;
  color: rgba(0, 0, 0, 0.6);
`;

const Looking = styled.span`
  position: absolute;
  left: 106.9rem;
  top: 74.8rem;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 200;
  font-size: 2rem;
  line-height: 2.5rem;
  color: rgba(0, 0, 0, 0.6);
`;

function Landing() {
  const router = useRouter();

  const onClickMoveToLogin = () => {
    router.push("/login");
  };

  const onClickMoveToOnboarding = () => {
    router.push("/onboarding1");
  };
  return (
    <Body>
      <Wrapper1>
        <MainImg src="/images/landimg1.png" />
        <SmallLogo src="/images/landui.svg" />
        <TitleKo>당신의 완벽한 외출을 위해</TitleKo>
        <DecoBar></DecoBar>
        <TitleEng1>For your perfect </TitleEng1>
        <TitleEng2>excursion</TitleEng2>
      </Wrapper1>
      <Wrapper2>
        <SubTitleEng1>match clothes</SubTitleEng1>
        <SubImg1 src="/images/land2-1.png" />
        <SubImg3 src="images/land2-3.png" />
        <SubImg2 src="/images/land2-2.png" />
        <SubTitleEng2>with temp</SubTitleEng2>
        <SmallLogo2 src="/images/landui.svg" />
        <SubTitleKo>당신의 완벽한 날씨를 위해</SubTitleKo>
      </Wrapper2>
      <Wrapper3>
        <LineBox></LineBox>
        <LandImg src="/images/land3.png" />
        <LandingTitle>온도에 맞는 옷을 입고 싶은 날</LandingTitle>
        <Ondoui>온도衣</Ondoui>
        <MainLogo src="/images/mainlogo.svg" />
        <Login onClick={onClickMoveToLogin}>로그인</Login>
        <Looking onClick={onClickMoveToOnboarding}>둘러보기</Looking>
      </Wrapper3>
    </Body>
  );
}

export default Landing;
