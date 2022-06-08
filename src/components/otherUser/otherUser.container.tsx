import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { FETCH_USER, FETCH_WEATHER } from "../mypage/myPageHeader/MyPageHeaderquries";
import { IQuery, IQueryFetchNicknameArgs, IQueryFetchUserFeedsArgs, IQueryGetWeatherArgs } from "../types/types";
import OtherUserUI from "./otherUser.presenter";
import { Q_FETCH_NICK_NAME, Q_FETCH_USER_FEEDS } from "./otherUser.queries";

const OtherUser = () => {
  const [myPageFeedId, setFeedId] = useState<string>("");
  const [nickname, setNickname] = useState<string>("");

  const { data: fetchUserData } = useQuery<Pick<IQuery, "fetchUser">>(FETCH_USER);
  const { data: weahterData } = useQuery<Pick<IQuery, "getWeather">, IQueryGetWeatherArgs>(FETCH_WEATHER, {
    variables: {
      regionName: fetchUserData?.fetchUser.region.id,
    },
  });

  const { data: ClickedUserFeed } = useQuery<Pick<IQuery, "fetchUserFeeds">, IQueryFetchUserFeedsArgs>(Q_FETCH_USER_FEEDS, {
    variables: {
      userNickname: nickname,
    },
  });

  const { data: ClickedUserData } = useQuery<Pick<IQuery, "fetchNickname">, IQueryFetchNicknameArgs>(Q_FETCH_NICK_NAME, {
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

  return <OtherUserUI selectId={selectId} myPageFeedId={myPageFeedId} weahterData={weahterData} ClickedUserFeed={ClickedUserFeed} ClickedUserData={ClickedUserData} />;
};

export default OtherUser;
