import { useQuery } from "@apollo/client";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import OotdUI from "./Ootd.presenter";
import { Q_FETCH_FEEDS_WITH_TAGS } from "./Ootd.queries";

const OotdPage = () => {
  // const isPc = useMediaQuery({
  //   query: "(min-width : 1200px) and (max-width : 1920px)",
  // });
  // const isTablet = useMediaQuery({
  //   query: "(min-width:768px) and (max-width:1199px)",
  // });
  // const isMobile = useMediaQuery({
  //   query: "(max-width:767px)",
  // });

  const regionCategory = [
    "서울",
    "경기",
    "강원",
    "충북",
    "충남",
    "경북",
    "경남",
    "전북",
    "전남",
    "제주",
  ];
  const tagCategory = [
    {
      id: 1,
      tagTitle: "스타일",
      tagItem: ["캐주얼", "스트릿", "트레이닝", "포멀", "세미포멀"],
    },
    {
      id: 2,
      tagTitle: "아우터",
      tagItem: ["트랙자켓", "플리스", "자켓", "점퍼", "코트"],
    },
    {
      id: 3,
      tagTitle: "상의",
      tagItem: ["티셔츠", "셔츠/블라우스", "니트", "맨투맨", "후드"],
    },
    {
      id: 4,
      tagTitle: "하의",
      tagItem: ["청바지", "슬랙스", "반바지", "스커트"],
    },
    {
      id: 5,
      tagTitle: "기타",
      tagItem: ["원피스"],
    },
  ];

  const [myTag, setMyTag] = useState(["청바지"]);
  const [myRegion, setMyRegion] = useState("제주");
  const [isSelected, setIsSelected] = useState(false);

  const { data } = useQuery(Q_FETCH_FEEDS_WITH_TAGS, {
    variables: {
      feedTags: myTag,
      regionId: myRegion,
    },
  });

  // 지역 선택하기
  const onClickRegion = (e) => {
    setMyRegion(e);
    // if (myRegion.includes(e)) {
    //   setIsSelected(true);
    // }
  };

  console.log(myRegion);

  // 태그 선택하기
  const onClickTag = (e) => {
    if (myTag.includes(e)) {
      return;
    }
    setMyTag([...myTag, e]);
    setIsSelected(true);
  };

  // console.log(myTag);

  // 태그 지우기
  const onClickRemoveTag = (e) => {
    const newMyTag = myTag.filter((tagEl) => tagEl !== e);
    setMyTag(newMyTag);
    setIsSelected(false);
  };

  return (
    <OotdUI
      onClickRegion={onClickRegion}
      onClickTag={onClickTag}
      onClickRemoveTag={onClickRemoveTag}
      regionCategory={regionCategory}
      tagCategory={tagCategory}
      myRegion={myRegion}
      myTag={myTag}
      data={data}
      isSelected={isSelected}
    />
  );
};

export default OotdPage;
