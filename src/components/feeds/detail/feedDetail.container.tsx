import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import FeedDetailUI from "./feedDetail.presenter";
import { M_DELETE_FEED, Q_FETCH_FEED } from "./feedDetail.queries";

function FeedDetail(props) {
  const { myPageFeedId, ootdFeedId, tagFeed } = props; //mypage으로부터 받아오는 feedId
  const router = useRouter();

  const { data } = useQuery(Q_FETCH_FEED, {
    variables: {
      feedId: myPageFeedId ? String(myPageFeedId) : tagFeed ? String(tagFeed) : ootdFeedId ? String(ootdFeedId) : "",
    },
  });

  // useEffect(() => {
  //   console.log(myPageFeedId, ootdFeedId, tagFeed);
  // }, []);

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
