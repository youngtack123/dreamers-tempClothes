import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { FETCH_USER, FETCH_WEATHER } from "../mypage/myPageHeader/MyPageHeaderquries";
import OtherUserUI from "./otherUser.presenter";
import { Q_FETCH_NICK_NAME, Q_FETCH_USER_FEEDS } from "./otherUser.queries";

const OtherUser = () => {
  const [myPageFeedId, setFeedId] = useState("");
  const [nickname, setNickname] = useState("");

  const { data: fetchUserData } = useQuery(FETCH_USER);
  const { data: weahterData } = useQuery(FETCH_WEATHER, {
    variables: {
      regionName: fetchUserData?.fetchUser.region.id,
    },
  });

  const { data: ClickedUserFeed } = useQuery(Q_FETCH_USER_FEEDS, {
    variables: {
      userNickname: nickname,
    },
  });

  const { data: ClickedUserData } = useQuery(Q_FETCH_NICK_NAME, {
    variables: {
      nickname: nickname,
    },
  });

  const selectId = (id: string) => {
    setFeedId(id);
  };

  useEffect(() => {
    setNickname(localStorage.getItem("nickname"));
  }, []);

  return <OtherUserUI selectId={selectId} myPageFeedId={myPageFeedId} fetchUserData={fetchUserData} weahterData={weahterData} ClickedUserFeed={ClickedUserFeed} ClickedUserData={ClickedUserData} />;
};

export default OtherUser;
