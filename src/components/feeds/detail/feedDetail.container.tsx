import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import FeedDetailUI from "./feedDetail.presenter";
import { M_DELETE_FEED, M_TOGGLE_LIKE_FEED, Q_FETCH_FEED } from "./feedDetail.queries";

function FeedDetail(props) {
  const { myPageFeedId, ootdFeedId, tagFeed } = props; //mypage으로부터 받아오는 feedId
  const router = useRouter();

  // 페치 피드
  const { data } = useQuery(Q_FETCH_FEED, {
    variables: {
      feedId: myPageFeedId ? String(myPageFeedId) : tagFeed ? String(tagFeed) : ootdFeedId ? String(ootdFeedId) : "",
    },
  });

  // 피드 좋아요
  const [toggleLikeFeed] = useMutation(M_TOGGLE_LIKE_FEED);
  const [isLike, setIsLike] = useState(false);

  const onClickLike = (e) => {
    try {
      toggleLikeFeed({
        variables: {
          feedId: String(e.currentTarget.id),
        },
      });
      setIsLike(!isLike);
    } catch (error) {
      alert(error.message);
    }
  };

  const [showPhoto, setShowPhoto] = useState<String[]>([]);

  const onClickPhoto = (photo: any) => {
    setShowPhoto([photo]);
  };

  console.log("show", showPhoto);

  const IDforFetch = myPageFeedId ? String(myPageFeedId) : tagFeed ? String(tagFeed) : ootdFeedId ? String(ootdFeedId) : "";

  return (
    <>
      <FeedDetailUI data={data} onClickPhoto={onClickPhoto} showPhoto={showPhoto} IDforFetch={IDforFetch} onClickLike={onClickLike} isLike={isLike} />
    </>
  );
}

export default FeedDetail;
