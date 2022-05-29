import React, { useState } from "react";
import { useRecoilState } from "recoil";
import Modal from "../../common/commonModal";
import Payment from "../../common/commonModal/payment";
import { selectMyPageList } from "../../common/store";
import * as S from "./mypageMobile.styles";
import MypageMobileHeader from "./mypageMobileHeader/mypageMobileHeader.container";

const MypageMobileUI = (props) => {
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
        <MypageMobileHeader />
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
          {selectMyPageListData === "나衣 룩북"}
          {selectMyPageListData === "개인정보 수정"}
          {selectMyPageListData === "비밀번호 변경"}
        </S.MyPageContendWrapperDiv>
        <Modal open={modalOpen} close={closeModal} header="단추 충전">
          <Payment setModalOpen={setModalOpen}></Payment>
        </Modal>
      </S.MyPageWrapperDiv>
    </div>
  );
};

export default MypageMobileUI;
