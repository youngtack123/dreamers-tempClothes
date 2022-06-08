import { useRouter } from "next/router";
import * as s from "./onboarding1.styles";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { IOnboarding1UIProps } from "./onboarding1.types";

export default function Onboarding1UI(props: IOnboarding1UIProps) {
  const router = useRouter();

  const onMoveToLogin = () => {
    router.push("/login");
  };

  const onMoveToOnboarding2 = () => {
    router.push("/onboarding2");
  };

  const onMoveToLanding = () => {
    router.push("/");
  };

  useEffect(() => {
    AOS.init();
  });

  return (
    <s.WrapperDiv>
      <s.ItemWrapperDiv data-aos="fade-up" data-aos-duration="2000">
        <s.QuestionDiv>성별을 알려주세요!</s.QuestionDiv>
        <s.ButtonDiv>
          <s.ManButton value={"여성"} onClick={props.onClickSelect} isSelected={props.isSelected}>
            여성
          </s.ManButton>
          <s.ManButton value={"남성"} onClick={props.onClickSelect} isSelected={props.isSelected}>
            남성
          </s.ManButton>
        </s.ButtonDiv>

        <s.AreYouUserDiv>
          <s.AlreadyUserDiv>이미 회원이신가요?</s.AlreadyUserDiv>
          <s.GoToLoginDiv onClick={onMoveToLogin}>로그인 하러가기</s.GoToLoginDiv>
        </s.AreYouUserDiv>

        <s.PrevNextDiv>
          <s.PrevImg src="/images/leftarrow.png" onClick={onMoveToLanding} />
          <s.NextImg src="/images/rightarrow.png" onClick={onMoveToOnboarding2} />
        </s.PrevNextDiv>
      </s.ItemWrapperDiv>
    </s.WrapperDiv>
  );
}
