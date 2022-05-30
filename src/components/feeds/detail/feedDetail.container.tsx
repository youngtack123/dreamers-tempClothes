import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { FETCH_MY_FEED } from "../../mypage/myPageFeed/MyPageFeedQuries";
import FeedDetailUI from "./feedDetail.presenter";
import { M_DELETE_FEED, M_TOGGLE_LIKE_FEED, Q_FETCH_FEED, Q_FETCH_FEED_LIKE, Q_FETCH_USER } from "./feedDetail.queries";

function FeedDetail(props) {
  const { myPageFeedId, ootdFeedId, tagFeed } = props; //mypage으로부터 받아오는 feedId
  const router = useRouter();

  // 페치 피드
  const { data } = useQuery(Q_FETCH_FEED, {
    variables: {
      feedId: myPageFeedId ? String(myPageFeedId) : tagFeed ? String(tagFeed) : ootdFeedId ? String(ootdFeedId) : "",
    },
  });

  // 페치 유저
  const { data: userData } = useQuery(Q_FETCH_USER);

  const [toggleLikeFeed] = useMutation(M_TOGGLE_LIKE_FEED);
  const [isLike, setIsLike] = useState(false);

  const onClickLike = async () => {
    try {
      const result = await toggleLikeFeed({
        variables: {
          feedId: myPageFeedId ? String(myPageFeedId) : tagFeed ? String(tagFeed) : ootdFeedId ? String(ootdFeedId) : "",
        },
        refetchQueries: [
          {
            query: Q_FETCH_FEED,
            variables: { feedId: myPageFeedId ? String(myPageFeedId) : tagFeed ? String(tagFeed) : ootdFeedId ? String(ootdFeedId) : "" },
          },
        ],
      });
      console.log("result", result);
      setIsLike(!isLike);
    } catch (error) {
      toast.error(error.message, {
        icon: "🤔",
      });
    }
  };

  // 피드 좋아요
  const { data: feedLike } = useQuery(Q_FETCH_FEED_LIKE, {
    variables: {
      feedId: myPageFeedId ? String(myPageFeedId) : tagFeed ? String(tagFeed) : ootdFeedId ? String(ootdFeedId) : "",
    },
  });
  // 로그인한 유저 정보 일치
  // const [isMatched, setIsMatched] = useState(false);
  // const userMatched = data?.fetchFeed.feedLike?.user?.id === userData?.fetchUser.id;
  // console.log(data?.fetchFeed.feedLike.user?.id);
  // console.log(userData?.fetchUser.id);

  const [showPhoto, setShowPhoto] = useState<string>("");

  const onClickPhoto = (photo: any) => {
    setShowPhoto(photo);
  };

  const IDforFetch = myPageFeedId ? String(myPageFeedId) : tagFeed ? String(tagFeed) : ootdFeedId ? String(ootdFeedId) : "";

  return (
    <>
      <FeedDetailUI data={data} userData={userData} feedLike={feedLike} onClickPhoto={onClickPhoto} showPhoto={showPhoto} IDforFetch={IDforFetch} onClickLike={onClickLike} isLike={isLike} />
    </>
  );
}

export default FeedDetail;
