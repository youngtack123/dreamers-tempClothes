import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import MyPageFeedPresenter from "./MyPageFeedPresenter";
import { FETCH_MY_FEED } from "./MyPageFeedQuries";

const MyPageFeedContainer = () => {
  const { data: fetchMyFeed } = useQuery(FETCH_MY_FEED);
  const [myPageFeedId, setFeedId] = useState("");
  const selectId = (id: string) => {
    console.log(id);
    setFeedId(id);
  };
  return <MyPageFeedPresenter fetchMyFeed={fetchMyFeed} selectId={selectId} myPageFeedId={myPageFeedId}></MyPageFeedPresenter>;
};

export default MyPageFeedContainer;
