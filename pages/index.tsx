import React, { useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { gsap } from "gsap";
import AOS from "aos";
import "aos/dist/aos.css";

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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  cursor: pointer;
  :hover {
    opacity: 0.6;
  }
`;

const Looking = styled.span`
  position: absolute;
  left: 106.7rem;
  top: 74.8rem;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 200;
  font-size: 2rem;
  line-height: 2.5rem;
  color: rgba(0, 0, 0, 0.6);
  cursor: pointer;
  :hover {
    opacity: 0.6;
  }
`;
const DownArrowImg = styled.img`
  position: absolute;
  width: 4.7rem;
  height: 3rem;
  top: 88rem;
  cursor: pointer;
`;

function Landing() {
  const router = useRouter();
  const downArrow1 = useRef(null);
  const downArrow2 = useRef(null);
  const [isVisible, setIsVisible] = useState(true);
  const [isVisible2, setIsVisible2] = useState(true);

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      if (window.scrollY > 1300) {
        setIsVisible2(false);
      } else {
        setIsVisible2(true);
      }
    });
  }

  const onClickMoveToLogin = () => {
    router.push("/login");
  };

  const onClickMoveToOnboarding = () => {
    router.push("/onboarding1");
  };

  const scrollToMiddle = () => {
    window.scrollTo({ top: 1030, behavior: "smooth" });
  };

  const scrollToBottom = () => {
    window.scrollTo({ top: 2050, behavior: "smooth" });
  };

  useEffect(() => {
    gsap.from(downArrow1.current, { duration: 1, autoAlpha: 5, y: 20, repeat: 100, yoyo: true });
    gsap.from(downArrow2.current, { duration: 1, autoAlpha: 5, y: 20, repeat: 100, yoyo: true });
  }, []);

  useEffect(() => {
    AOS.init();
  });

  return (
    <Body>
      <Wrapper1>
        <MainImg data-aos="fade-left" data-aos-easing="ease-in-sine" data-aos-duration="1200" src="/images/landimg1.png" />
        <SmallLogo src="/images/landui.svg" />
        <TitleKo>당신의 완벽한 외출을 위해</TitleKo>
        <DecoBar></DecoBar>
        <TitleEng1 data-aos="fade-right" data-aos-easing="ease-in-sine" data-aos-duration="1350">
          For your perfect{" "}
        </TitleEng1>
        <TitleEng2 data-aos="fade-right" data-aos-easing="ease-in-sine" data-aos-duration="1350">
          excursion
        </TitleEng2>
        {isVisible && <DownArrowImg ref={downArrow1} src="/images/downArrow.png" onClick={scrollToMiddle} />}
      </Wrapper1>
      <Wrapper2>
        <SubTitleEng1 data-aos="fade-right" data-aos-easing="ease-in-sine" data-aos-duration="1350" data-aos-delay="300">
          match clothes
        </SubTitleEng1>
        <SubImg1 data-aos="fade-zoom-in" data-aos-duration="1500" data-aos-easing="ease-in-sine" src="/images/land2-1.png" />
        <SubImg3 src="images/land2-3.png" data-aos="fade-zoom-in" data-aos-easing="ease-in-sine" data-aos-duration="1500" />
        <SubImg2 src="/images/land2-2.png" data-aos="fade-zoom-in" data-aos-easing="ease-in-sine" data-aos-duration="1500" />
        <SubTitleEng2 data-aos="fade-left" data-aos-easing="ease-in-sine" data-aos-duration="1350" data-aos-delay="300">
          with temp
        </SubTitleEng2>
        <SmallLogo2 data-aos="fade-up" data-aos-duration="2000" src="/images/landui.svg" />
        <SubTitleKo data-aos="fade-up" data-aos-duration="2000">
          당신의 완벽한 날씨를 위해
        </SubTitleKo>
        {isVisible2 && <DownArrowImg ref={downArrow2} src="/images/downArrow.png" onClick={scrollToBottom} />}
      </Wrapper2>
      <Wrapper3>
        <LineBox data-aos-delay="200" data-aos="fade-up" data-aos-duration="2000"></LineBox>
        <LandImg data-aos-delay="200" data-aos="fade-right" data-aos-easing="ease-in-sine" data-aos-duration="1350" src="/images/land3.png" />
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
