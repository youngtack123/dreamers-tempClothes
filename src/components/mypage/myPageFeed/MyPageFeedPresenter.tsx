/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Modal from "../../common/commonModal";
import FeedDetail from "../../feeds/detail/feedDetail.container";
import * as S from "./MyPageFeedStyles";
const MyPageFeedPresenter = (props) => {
  const { fetchMyFeed, selectId, myPageFeedId } = props;
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <S.RealMyPageFeedWrapper>
      <S.MyPageFeedWrapper>
        <div>
          <S.MyPageFeedHeadP>나衣 룩북</S.MyPageFeedHeadP>
          <S.MyPageFeedLookBooxDiv>
            {fetchMyFeed?.fetchMyFeeds.feeds.map((el, index) => {
              return (
                <div
                  key={index}
                  onClick={() => {
                    selectId(el.id), openModal();
                  }}
                >
                  <S.MypageFeedImage src={`https://storage.googleapis.com/${el.feedImg[0].imgURL}`} alt="mypageImage" key={index} width={242} height={362}></S.MypageFeedImage>
                </div>
              );
            })}
          </S.MyPageFeedLookBooxDiv>
        </div>
      </S.MyPageFeedWrapper>
      <Modal open={modalOpen} close={closeModal} header="게시글 상세정보">
        <FeedDetail myPageFeedId={myPageFeedId}></FeedDetail>
      </Modal>
    </S.RealMyPageFeedWrapper>
  );
};

export default MyPageFeedPresenter;
