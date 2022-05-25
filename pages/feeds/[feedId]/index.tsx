import { useRouter } from "next/router";
import React, { useState } from "react";
import { useRecoilState } from "recoil";
import Modal from "../../../src/components/common/commonModal";
import { aaa } from "../../../src/components/common/store";
import FeedDetail from "../../../src/components/feeds/detail/feedDetail.container";

function DetailPage() {
  const router = useRouter();
  const feedDetailId = router.query.feedId;

  const showModal = !!feedDetailId;

  const [modalOpen, setModalOpen] = useState(true);
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  // return (
  //   <Modal open={modalOpen} close={closeModal} header="게시글 상세정보">
  //     <FeedDetail />
  //   </Modal>
  // );
  return <FeedDetail />;
}

export default DetailPage;
