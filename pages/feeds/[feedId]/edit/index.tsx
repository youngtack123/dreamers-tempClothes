import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Modal from "../../../../src/components/common/commonModal";
import FeedsWrite from "../../../../src/components/feeds/write/feedsWrite.container";

const Q_FETCH_FEED = gql`
  query fetchFeed($feedId: String!) {
    fetchFeed(feedId: $feedId) {
      id
      detail
      top
      bottom
      outer
      etc
      feedTag {
        tagName
      }
      feedImg {
        imgURL
      }
      region {
        id
      }
    }
  }
`;

function FeedUpdatePage() {
  const router = useRouter();

  const [modalOpen, setModalOpen] = useState(true);
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  const { data: fetchData } = useQuery(Q_FETCH_FEED, {
    variables: {
      feedId: String(router.query.feedId),
    },
  });

  return (
    // <Modal open={modalOpen} close={() => router.push(`/ootd`)} header="게시글 상세정보">
    <FeedsWrite isEdit={true} fetchData={fetchData} />
    // </Modal>
  );
}

export default FeedUpdatePage;
