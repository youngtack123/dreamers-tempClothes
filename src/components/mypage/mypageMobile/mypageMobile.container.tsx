import React, { useRef } from "react";
import { useRecoilState } from "recoil";
import { selectMyPageList } from "../../common/store";
import MypageMobileUI from "./mypageMobile.presenter";

const MypageMobile = () => {
  const [, setSelectMyPageList] = useRecoilState(selectMyPageList);
  const selectMyPageRef = useRef([]);

  const onClickMyPageList = (index: number) => {
    setSelectMyPageList(selectMyPageRef.current[index].innerText);
  };

  return <MypageMobileUI onClickMyPageList={onClickMyPageList} selectMyPageRef={selectMyPageRef} />;
};

export default MypageMobile;
