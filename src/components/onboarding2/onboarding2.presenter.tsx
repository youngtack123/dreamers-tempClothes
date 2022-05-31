import { useRouter } from "next/router";
import { useState } from "react";
import * as s from "./onboarding2.styles";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Onboarding2UI() {
  const router = useRouter();

  const [isSelected, setIsSelected] = useState<String>("");

  const onClickSelect = (e) => {
    setIsSelected(e.target.innerText);
  };

  const onMoveToLogin = () => {
    router.push("/login");
  };

  const onMoveToOnboarding3 = () => {
    router.push("/onboarding3");
  };

  const onMoveToOnboarding1 = () => {
    router.push("/onboarding1");
  };

  useEffect(() => {
    AOS.init();
  });

  return (
    <s.WrapperDiv>
      <s.ItemWrapperDiv data-aos="fade-up" data-aos-duration="2000">
        <s.QuestionDiv>즐겨 입는 스타일을 알려주세요!</s.QuestionDiv>

        <s.StyleDiv>
          <s.WhichStyleDiv id={"캐주얼"} onClick={onClickSelect} isSelected={isSelected}>
            캐주얼
          </s.WhichStyleDiv>
          <s.WhichStyleDiv id={"스트릿"} onClick={onClickSelect} isSelected={isSelected}>
            스트릿
          </s.WhichStyleDiv>
          <s.WhichStyleDiv id={"트레이닝"} onClick={onClickSelect} isSelected={isSelected}>
            트레이닝
          </s.WhichStyleDiv>
        </s.StyleDiv>

        <s.RestDiv>
          <s.WhichStyleDiv id={"포멀"} onClick={onClickSelect} isSelected={isSelected}>
            포멀
          </s.WhichStyleDiv>
          <s.WhichStyleDiv id={"세미포멀"} onClick={onClickSelect} isSelected={isSelected}>
            세미포멀
          </s.WhichStyleDiv>
        </s.RestDiv>

        <s.AreYouUserDiv>
          <s.AlreadyUserDiv>이미 회원이신가요?</s.AlreadyUserDiv>
          <s.GoToLoginDiv onClick={onMoveToLogin}>로그인 하러가기</s.GoToLoginDiv>
        </s.AreYouUserDiv>

        <s.PrevNextDiv>
          <s.PrevImg src="/images/leftarrow.png" onClick={onMoveToOnboarding1} />
          <s.NextImg src="/images/rightarrow.png" onClick={onMoveToOnboarding3} />
        </s.PrevNextDiv>
      </s.ItemWrapperDiv>
    </s.WrapperDiv>
  );
}
