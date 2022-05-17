import React, { useRef } from "react";
import MyPageHeaderPresenter from "./MyPageHeaderPresenter";
import { useRecoilState } from "recoil";
import { selectMyPageList } from "../../common/store";
const MyPageHeaderContainer = () => {
  const selectMyPageRef = useRef([]);
  const [, setSelectMyPageList] = useRecoilState(selectMyPageList);

  const onClickMyPageList = (index: number) => {
    // console.log(selectMyPageRef.current[index].innerText);
    setSelectMyPageList(selectMyPageRef.current[index].innerText);
    console.log(index);
  };

  return (
    <MyPageHeaderPresenter
      onClickMyPageList={onClickMyPageList}
      selectMyPageRef={selectMyPageRef}
    ></MyPageHeaderPresenter>
  );
};

export default MyPageHeaderContainer;
