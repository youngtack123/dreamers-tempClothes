import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import { FETCH_MY_FEED } from "../../myPageFeed/MyPageFeedQuries";
import MypageMobileFeedUI from "./mypageMobileFeed.presenter";

const MypageMobileFeed = () => {
  const { data: fetchMyFeed } = useQuery(FETCH_MY_FEED);
  const [myPageFeedId, setFeedId] = useState("");

  const selectId = (id: string) => {
    setFeedId(id);
  };

  return <MypageMobileFeedUI fetchMyFeed={fetchMyFeed} selectId={selectId} myPageFeedId={myPageFeedId} />;
};

export default MypageMobileFeed;
