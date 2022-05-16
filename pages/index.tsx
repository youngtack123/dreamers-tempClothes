import styled from "@emotion/styled";
import { useRouter } from "next/router";

const MainWrapperDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const WrapperDiv = styled.div`
  width: 97.7rem;
  height: 197.9rem;
  margin-top: -87rem;
  background-image: url("/images/landing.jpg");
  background-size: cover;
  background-position: center;
  opacity: .75;
`
const RemarkDiv = styled.div`
  font-size: 2rem;
  color: rgba(0, 0, 0, 0.6);
  position: absolute;
  margin-bottom: 60rem;
  font-family: 'Noto Serif KR', serif;
`
const ServiceNameDiv = styled.div`
  writing-mode: vertical-rl;
  text-orientation: upright;
  position: absolute;
  font-size: 9.8rem;
  color: #FFEA86;
  font-family: 'Noto Serif KR', serif;
`
const LoginDiv = styled.div`
  font-weight: 500;
  font-size: 1.8rem;
  color: rgba(0, 0, 0, 0.6);
  position: absolute;
  font-family: 'Noto Serif KR', serif;
  margin-top: 50rem;
  cursor: pointer;
  :hover {
        opacity: .6;
    }
`
const LookAroundDiv = styled.div`
  font-weight: 500;
  font-size: 1.8rem;
  color: rgba(0, 0, 0, 0.6);
  position: absolute;
  font-family: 'Noto Serif KR', serif;
  margin-top: 65rem;
  cursor: pointer;
  :hover {
        opacity: .6;
    }
`

export default function Home() {

  const router = useRouter()

  const onMoveToLogin = () => {
    router.push("/login")
  }

  const onMoveToOnboarding1 = () => {
    router.push("/onboarding1")
  }

  return (
    <MainWrapperDiv>
      <WrapperDiv />
      <RemarkDiv>기온에 맞는 옷을 입고 싶은 날,</RemarkDiv>
      <ServiceNameDiv>온도<span style={{color: "#44BD48"}}>衣</span></ServiceNameDiv>
      <LoginDiv onClick={onMoveToLogin}>로그인</LoginDiv>
      <LookAroundDiv onClick={onMoveToOnboarding1}>둘러보기</LookAroundDiv>
    </MainWrapperDiv>

  );
}
