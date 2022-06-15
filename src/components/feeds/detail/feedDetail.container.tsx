import { useMutation, useQuery } from "@apollo/client";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { IMutation, IMutationToggleLikeFeedArgs, IQuery, IQueryFetchFeedArgs, IQueryFetchFeedLikeArgs } from "../../types/types";
import FeedDetailUI from "./feedDetail.presenter";
import { M_TOGGLE_LIKE_FEED, Q_FETCH_FEED, Q_FETCH_FEED_LIKE, Q_FETCH_USER } from "./feedDetail.queries";

function FeedDetail(props) {
  const { myPageFeedId, ootdFeedId, tagFeed } = props; //mypage으로부터 받아오는 feedId

  const [showPhoto, setShowPhoto] = useState<string>("");

  // 페치 피드
  const { data } = useQuery<Pick<IQuery, "fetchFeed">, IQueryFetchFeedArgs>(Q_FETCH_FEED, {
    variables: {
      feedId: myPageFeedId ? String(myPageFeedId) : tagFeed ? String(tagFeed) : ootdFeedId ? String(ootdFeedId) : "",
    },
  });

  // 피드 좋아요
  const { data: feedLike } = useQuery<Pick<IQuery, "fetchFeedLike">, IQueryFetchFeedLikeArgs>(Q_FETCH_FEED_LIKE, {
    variables: {
      feedId: myPageFeedId ? String(myPageFeedId) : tagFeed ? String(tagFeed) : ootdFeedId ? String(ootdFeedId) : "",
    },
  });

  // 페치 유저
  const { data: userData } = useQuery<Pick<IQuery, "fetchUser">>(Q_FETCH_USER);

  const [toggleLikeFeed] = useMutation<Pick<IMutation, "toggleLikeFeed">, IMutationToggleLikeFeedArgs>(M_TOGGLE_LIKE_FEED);

  const onClickLike = async () => {
    try {
      await toggleLikeFeed({
        variables: {
          feedId: myPageFeedId ? String(myPageFeedId) : tagFeed ? String(tagFeed) : ootdFeedId ? String(ootdFeedId) : "",
        },
        refetchQueries: [
          {
            query: Q_FETCH_FEED_LIKE,
            variables: { feedId: myPageFeedId ? String(myPageFeedId) : tagFeed ? String(tagFeed) : ootdFeedId ? String(ootdFeedId) : "" },
          },
        ],
      });
    } catch (error) {
      toast.error(error.message, {
        icon: "🤔",
      });
    }
  };

  const onClickPhoto = (photo: string) => {
    setShowPhoto(photo);
  };

  const IDforFetch = myPageFeedId ? String(myPageFeedId) : tagFeed ? String(tagFeed) : ootdFeedId ? String(ootdFeedId) : "";

  return (
    <>
      <FeedDetailUI data={data} userData={userData} feedLike={feedLike} onClickPhoto={onClickPhoto} showPhoto={showPhoto} IDforFetch={IDforFetch} onClickLike={onClickLike} />
    </>
  );
}

export default FeedDetail;
