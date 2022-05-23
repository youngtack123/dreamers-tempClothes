import styled from "@emotion/styled";
import { useRouter } from "next/router";

const MainWrapperDiv = styled.div`
  height: 259rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const WrapperDiv = styled.div`
  position: absolute;
  width: 100%;
  height: 291.685rem;
  top: -161.8rem;
  background-image: url("/images/landing.jpg");
  background-size: cover;
  background-position: center;
  opacity: 0.75;
`;
const MiddleDiv = styled.div`
  position: absolute;
  width: 100%;
  height: 41.9rem;
  left: 0.3rem;
  top: 88rem;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.69) 52.6%, #ffffff 100%);
`;
const RemarkDiv = styled.div`
  writing-mode: vertical-rl;
  text-orientation: upright;
  position: absolute;
  width: 5rem;
  height: 51.4rem;
  line-height: 4.3rem;
  /* left: 50%; */
  left: 94rem;
  top: 132.6rem;
  font-size: 1.8rem;
  border: 2px solid #eeeeee;
  border-radius: 10rem;
  padding-top: 4rem;
  color: rgba(0, 0, 0, 0.4);
`;
const CircleDiv = styled.div`
  position: absolute;
  width: 8rem;
  height: 8rem;
  /* left: 48%; */
  left: 92.5rem;
  top: 180rem;

  border: 3px solid #b7e576;
  border-radius: 100px;
`;
const SecondCircleDiv = styled.div`
  position: absolute;
  width: 5rem;
  height: 5rem;
  /* left: 49.5%; */
  left: 94rem;
  top: 190.7rem;

  background: #fff2b2;
  border-radius: 10rem;
`;
const MainLogoImg = styled.img`
  position: absolute;
  width: 19.2rem;
  height: 16rem;
  /* left: 46%; */
  left: 87.5rem;
  top: 205.7rem;
`;
const BottomDiv = styled.div`
  position: absolute;
  width: 100%;
  height: 41.9rem;
  left: 0px;
  top: 217.6rem;

  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.26) 52.07%, rgba(183, 229, 118, 0.34) 100%);
`;
const LoginDiv = styled.div`
  position: absolute;
  /* left: 50%; */
  left: 93.5rem;
  top: 231.7rem;

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
  /* left: 50%; */
  left: 93.5rem;
  top: 237.7rem;

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
      <RemarkDiv>기온에 맞는 옷을 입고 싶은 날</RemarkDiv>
      <CircleDiv />
      <SecondCircleDiv />
      <MainLogoImg src="/images/mainlogo.png" />

      <BottomDiv />
      <LoginDiv onClick={onMoveToLogin}>로그인</LoginDiv>
      <LookAroundDiv onClick={onMoveToOnboarding1}>둘러보기</LookAroundDiv>
    </MainWrapperDiv>
  );
}
