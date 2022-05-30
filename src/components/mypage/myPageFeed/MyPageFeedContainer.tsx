import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import { FETCH_USER } from "../myPageHeader/MyPageHeaderquries";
import MyPageFeedPresenter from "./MyPageFeedPresenter";
import { FETCH_MY_FEED } from "./MyPageFeedQuries";

const MyPageFeedContainer = () => {
  const { data: fetchMyFeed } = useQuery(FETCH_MY_FEED);
  const { data: userData } = useQuery(FETCH_USER);
  const [myPageFeedId, setFeedId] = useState("");

  const selectId = (id: string) => {
    setFeedId(id);
  };

  return <MyPageFeedPresenter userData={userData} fetchMyFeed={fetchMyFeed} selectId={selectId} myPageFeedId={myPageFeedId}></MyPageFeedPresenter>;
};

export default MyPageFeedContainer;
