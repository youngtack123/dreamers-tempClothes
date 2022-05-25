import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import React from "react";
import FeedDetailUI from "./feedDetail.presenter";
import { M_DELETE_FEED, Q_FETCH_FEED } from "./feedDetail.queries";

function FeedDetail(props) {
  const { myPageFeedId, ootdFeedId } = props; //mypage으로부터 받아오는 feedId
  const router = useRouter();

  const { data } = useQuery(Q_FETCH_FEED, {
    variables: {
      feedId: myPageFeedId ? String(myPageFeedId) : String(ootdFeedId),
    },
  });

  // const onClickMoveToEdit = (event) => {
  //   router.push(`/feeds/${event.currentTarget.id}/edit`);
  // };

  return (
    <>
      <FeedDetailUI data={data} />
    </>
  );
}

export default FeedDetail;
