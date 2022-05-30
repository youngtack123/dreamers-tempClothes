import React from "react";
import MyPageFeedContainer from "./myPageFeed/MyPageFeedContainer";
import MyPageHeaderContainer from "./myPageHeader/MyPageHeaderContainer";
import * as S from "./MyPageStlyes";
import { useRecoilState } from "recoil";
import { selectMyPageList } from "../common/store/index";
import MyPageEditInfoContainter from "./myPageEditInfo/MyPageEditInfoContainter";
import MyPageChangePassWordContainer from "./myPageChagnePassWord/MyPageChangePassWordContainer";
import Payment from "../common/commonModal/payment";
import Modal from "../common/commonModal";
import { useState } from "react";
import Modal2 from "../common/commonModal2";
const MyPagePresenter = (props) => {
  const [selectMyPageListData] = useRecoilState(selectMyPageList);
  const { onClickMyPageList, selectMyPageRef } = props;

  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <div>
        <MyPageHeaderContainer />
      </div>
      <S.MyPageWrapperDiv>
        <S.MenuDiv>
          <S.MenuUl>
            <S.Menuli onClick={() => onClickMyPageList(0)} ref={(el) => (selectMyPageRef.current[0] = el)}>
              나衣 룩북
            </S.Menuli>
            <S.Menuli onClick={() => onClickMyPageList(1)} ref={(el) => (selectMyPageRef.current[1] = el)}>
              개인정보 수정
            </S.Menuli>
            <S.Menuli onClick={() => onClickMyPageList(2)} ref={(el) => (selectMyPageRef.current[2] = el)}>
              비밀번호 변경
            </S.Menuli>
            <S.Menuli onClick={openModal}>단추 충전</S.Menuli>
            <S.Menuli>회원탈퇴</S.Menuli>
          </S.MenuUl>
        </S.MenuDiv>
        <S.MyPageContendWrapperDiv>
          {selectMyPageListData === "나衣 룩북" && <MyPageFeedContainer />}
          {selectMyPageListData === "개인정보 수정" && <MyPageEditInfoContainter />}
          {selectMyPageListData === "비밀번호 변경" && <MyPageChangePassWordContainer />}
        </S.MyPageContendWrapperDiv>
        {/* <Modal open={modalOpen} close={closeModal} header="단추 충전">
          <Payment setModalOpen={setModalOpen}></Payment>
        </Modal> */}
        <Modal2 open={modalOpen} close={closeModal} header="단추 충전">
          <Payment setModalOpen={setModalOpen}></Payment>
        </Modal2>
      </S.MyPageWrapperDiv>
    </div>
  );
};

export default MyPagePresenter;
