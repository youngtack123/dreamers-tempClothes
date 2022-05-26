import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { css, keyframes } from "@emotion/react";

const MainWrapperDiv = styled.div`
  height: 204rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;
const WrapperDiv = styled.div`
  position: absolute;
  width: 100%;
  height: 291.685rem;
  top: -134.6rem;
  background-image: url("/images/landing.jpg");
  background-size: cover;
  background-position: center;
  opacity: 0.75;
`;
const MiddleDiv = styled.div`
  position: absolute;
  width: 100%;
  height: 70rem;
  top: 88rem;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.69) 52.6%, #ffffff 100%);
`;
const RemarkDiv = styled.div`
  writing-mode: vertical-rl;
  text-orientation: upright;
  position: absolute;
  width: 5rem;
  height: 51.4rem;
  line-height: 4.7rem;
  top: 56.4rem;
  font-size: 1.8rem;
  border-radius: 10rem;
  padding-top: 4rem;
  color: rgba(0, 0, 0, 0.6);
  background: rgba(255, 255, 255, 0.6);
  letter-spacing: 6px;
  padding-top: 4rem;
`;

const CircleDiv = styled.div`
  position: absolute;
  width: 8rem;
  height: 8rem;
  top: 103.8rem;
  border: 3px solid #b7e576;
  border-radius: 100px;
`;
const SecondCircleDiv = styled.div`
  position: absolute;
  width: 5rem;
  height: 5rem;
  top: 114.5rem;
  background: #fff2b2;
  border-radius: 10rem;
`;
const MainLogoImg = styled.img`
  position: absolute;
  width: 19.2rem;
  height: 16rem;
  top: 150.2rem;
`;
const BottomDiv = styled.div`
  position: absolute;
  width: 100%;
  height: 66.7rem;
  left: 0px;
  top: 137.3rem;

  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.26) 52.07%, rgba(183, 229, 118, 0.34) 100%);
`;
const LoginDiv = styled.div`
  position: absolute;
  top: 176.2rem;

  font-family: "SUIT";
  font-style: normal;
  font-weight: 500;
  font-size: 1.8rem;
  margin-left: 0.8rem;

  color: rgba(0, 0, 0, 0.6);

  cursor: pointer;
  :hover {
    opacity: 0.6;
  }
`;
const LookAroundDiv = styled.div`
  position: absolute;
  top: 182.2rem;

  font-family: "SUIT";
  font-style: normal;
  font-weight: 500;
  font-size: 1.8rem;

  color: rgba(0, 0, 0, 0.6);

  cursor: pointer;
  :hover {
    opacity: 0.6;
  }
`;

export default function Home() {
  const router = useRouter();

  const onMoveToLogin = () => {
    router.push("/login");
  };

  const onMoveToOnboarding1 = () => {
    router.push("/onboarding1");
  };

  return (
    <MainWrapperDiv>
      <WrapperDiv />
      <MiddleDiv />
      <RemarkDiv>기온에맞는옷을입고싶은 &nbsp;날</RemarkDiv>
      <CircleDiv />
      <SecondCircleDiv />
      <MainLogoImg src="/images/mainlogo.png" />
      <BottomDiv />
      <LoginDiv onClick={onMoveToLogin}>로그인</LoginDiv>
      <LookAroundDiv onClick={onMoveToOnboarding1}>둘러보기</LookAroundDiv>
    </MainWrapperDiv>
  );
}
