/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Modal from "../../common/commonModal";
import FeedDetail from "../../feeds/detail/feedDetail.container";
import * as S from "./MyPageFeedStyles";
const MyPageFeedPresenter = (props) => {
  const { userData, fetchMyFeed, selectId, myPageFeedId } = props;
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <S.MyPageFeedWrapperDiv>
      <S.MyPageFeedLookBooxDiv>
        {fetchMyFeed?.fetchMyFeeds.feeds.length !== 0 ? (
          fetchMyFeed?.fetchMyFeeds.feeds.map((el, index) => {
            return (
              <div
                key={index}
                onClick={() => {
                  selectId(el.id), openModal();
                }}
              >
                <S.MypageFeedImage src={`https://storage.googleapis.com/${el.feedImg[0]?.imgURL}`} alt="mypageImage" key={index} width={242} height={362}></S.MypageFeedImage>
              </div>
            );
          })
        ) : (
          <S.NoImageDiv>
            <S.NoImgaeImg src="/images/sadface.png" />
            <S.NoImageTextDiv>
              <span style={{ fontWeight: "700" }}>{userData?.fetchUser.nickname}</span>님만의 새로운 피드를 기다리고 있어요!
            </S.NoImageTextDiv>
          </S.NoImageDiv>
        )}
      </S.MyPageFeedLookBooxDiv>
      <Modal open={modalOpen} close={closeModal} header="게시글 상세정보">
        <FeedDetail myPageFeedId={myPageFeedId}></FeedDetail>
      </Modal>
    </S.MyPageFeedWrapperDiv>
  );
};

export default MyPageFeedPresenter;
