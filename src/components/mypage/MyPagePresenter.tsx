import React from "react";
import MyPageFeedContainer from "./myPageFeed/MyPageFeedContainer";
import MyPageHeaderContainer from "./myPageHeader/MyPageHeaderContainer";
import * as S from "./MyPageStlyes";
import { useRecoilState } from "recoil";
import { selectMyPageList } from "../common/store/index";
import MyPageEditInfoContainter from "./myPageEditInfo/MyPageEditInfoContainter";
import MyPageChangePassWordContainer from "./myPageChagnePassWord/MyPageChangePassWordContainer";
const MyPagePresenter = () => {
  const [selectMyPageListData] = useRecoilState(selectMyPageList);
  console.log("selectMyPageListData", selectMyPageListData);
  return (
    <div>
      <S.MyPageWrapperDiv>
        <MyPageHeaderContainer></MyPageHeaderContainer>
      </S.MyPageWrapperDiv>
      <S.MyPageWrapperDiv>
        {selectMyPageListData === "나衣 룩북" && (
          <MyPageFeedContainer></MyPageFeedContainer>
        )}
        {selectMyPageListData === "개인정보 수정" && (
          <MyPageEditInfoContainter></MyPageEditInfoContainter>
        )}
        {selectMyPageListData === "비밀번호 변경" && (
          <MyPageChangePassWordContainer></MyPageChangePassWordContainer>
        )}
      </S.MyPageWrapperDiv>
    </div>

    // <MyPageHeaderContainer></MyPageHeaderContainer>

    // <MyPageFeedContainer></MyPageFeedContainer>
  );
};

export default MyPagePresenter;
