import { useRouter } from "next/router";
import { useState } from "react";
import * as s from "./onboarding3.styles";

export default function Onboarding3UI() {
  const router = useRouter();
  const [clickTag, setClickTag] = useState("");

  const onMoveToLogin = () => {
    router.push("/login");
  };

  const onMoveToTempClothes = () => {
    router.push("/tempClothes");
  };

  const onMoveToOnboarding2 = () => {
    router.push("/onboarding2");
  };

  const onClickTag = (e) => {
    setClickTag(e.target.innerText);
    localStorage.setItem("onboarding3", e.target.innerText);
  };

  return (
    <s.WrapperDiv>
      <s.ItemWrapperDiv>
        <s.QuestionDiv>거주하시는 곳을 알려주세요!</s.QuestionDiv>

        <s.StyleDiv>
          <s.RegionDiv id={"서울"} clickTag={clickTag} onClick={onClickTag}>
            서울
          </s.RegionDiv>
          <s.RegionDiv id={"경기"} clickTag={clickTag} onClick={onClickTag}>
            경기
          </s.RegionDiv>
          <s.RegionDiv id={"강원"} clickTag={clickTag} onClick={onClickTag}>
            강원
          </s.RegionDiv>
        </s.StyleDiv>

        <s.RestDiv>
          <s.RegionDiv id={"충북"} clickTag={clickTag} onClick={onClickTag}>
            충북
          </s.RegionDiv>
          <s.RegionDiv id={"충남"} clickTag={clickTag} onClick={onClickTag}>
            충남
          </s.RegionDiv>
          <s.RegionDiv id={"경북"} clickTag={clickTag} onClick={onClickTag}>
            경북
          </s.RegionDiv>
        </s.RestDiv>

        <s.RestDiv>
          <s.RegionDiv id={"경남"} clickTag={clickTag} onClick={onClickTag}>
            경남
          </s.RegionDiv>
          <s.RegionDiv id={"전북"} clickTag={clickTag} onClick={onClickTag}>
            전북
          </s.RegionDiv>
          <s.RegionDiv id={"전남"} clickTag={clickTag} onClick={onClickTag}>
            전남
          </s.RegionDiv>
        </s.RestDiv>

        <s.JejuRegionDiv id={"제주"} clickTag={clickTag} onClick={onClickTag}>
          제주
        </s.JejuRegionDiv>

        <s.AreYouUserDiv>
          <s.AlreadyUserDiv>이미 회원이신가요?</s.AlreadyUserDiv>
          <s.GoToLoginDiv onClick={onMoveToLogin}>로그인 하러가기</s.GoToLoginDiv>
        </s.AreYouUserDiv>

        <s.PrevNextDiv>
          <s.PrevImg src="/images/leftarrow.png" onClick={onMoveToOnboarding2} />
          <s.NextImg src="/images/rightarrow.png" onClick={onMoveToTempClothes} />
        </s.PrevNextDiv>
      </s.ItemWrapperDiv>
    </s.WrapperDiv>
  );
}
