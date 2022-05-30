import React, { useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { selectMyPageList } from "../common/store";
import { withAuth } from "../hoc/withAuth";
import MyPagePresenter from "./MyPagePresenter";

const MyPageContainer = () => {
  const [, setSelectMyPageList] = useRecoilState(selectMyPageList);
  const selectMyPageRef = useRef([]);

  const onClickMyPageList = (index: number) => {
    setSelectMyPageList(selectMyPageRef.current[index].innerText);
  };

  return <MyPagePresenter onClickMyPageList={onClickMyPageList} selectMyPageRef={selectMyPageRef} />;
};

export default withAuth(MyPageContainer);
