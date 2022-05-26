import React, { useRef, useState } from "react";
import MyPageHeaderPresenter from "./MyPageHeaderPresenter";
import { useQuery } from "@apollo/client";
import { FETCH_USER, FETCH_WEATHER } from "./MyPageHeaderquries";

const MyPageHeaderContainer = () => {
  const selectMyPageRef = useRef([]);

  const { data: fetchUserData } = useQuery(FETCH_USER);
  const { data: weahterData } = useQuery(FETCH_WEATHER, {
    variables: {
      regionName: fetchUserData?.fetchUser.region.id,
    },
  });

  return <MyPageHeaderPresenter selectMyPageRef={selectMyPageRef} fetchUserData={fetchUserData} weahterData={weahterData}></MyPageHeaderPresenter>;
};

export default MyPageHeaderContainer;
