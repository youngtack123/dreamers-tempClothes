import React, { useRef, useState } from "react";
import MyPageHeaderPresenter from "./MyPageHeaderPresenter";
import { useRecoilState } from "recoil";
import { selectMyPageList } from "../../common/store";
import { useQuery } from "@apollo/client";
import { FETCH_USER, FETCH_WEATHER } from "./MyPageHeaderquries";

const MyPageHeaderContainer = () => {
  const selectMyPageRef = useRef([]);
  const [, setSelectMyPageList] = useRecoilState(selectMyPageList);
  const { data: fetchUserData } = useQuery(FETCH_USER);
  const { data: weahterData } = useQuery(FETCH_WEATHER, {
    variables: {
      regionName: fetchUserData?.fetchUser.region.id,
    },
  });
  const onClickMyPageList = (index: number) => {
    // console.log(selectMyPageRef.current[index].innerText);
    setSelectMyPageList(selectMyPageRef.current[index].innerText);
  };

  return <MyPageHeaderPresenter onClickMyPageList={onClickMyPageList} selectMyPageRef={selectMyPageRef} fetchUserData={fetchUserData} weahterData={weahterData}></MyPageHeaderPresenter>;
};

export default MyPageHeaderContainer;
