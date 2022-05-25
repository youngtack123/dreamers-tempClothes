import { useMutation, useQuery } from "@apollo/client";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import OotdUI from "./Ootd.presenter";
import { Q_FETCH_FEEDS } from "./Ootd.queries";
import { regionCategory, tagCategory } from "../common/store";
import { useRouter } from "next/router";

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

  const router = useRouter();

  const [myTag, setMyTag] = useState(["청바지"]);
  const [myRegion, setMyRegion] = useState("서울");
  const [isSelected, setIsSelected] = useState(["청바지"]);
  const [regionSelected, setRegionSelected] = useState("서울");

  const { data, fetchMore } = useQuery(Q_FETCH_FEEDS, {
    variables: {
      feedTags: myTag,
      regionId: myRegion,
    },
  });

  // 지역 선택하기
  const onClickRegion = (e) => {
    setMyRegion(e);
    setRegionSelected(e);
  };

  // 태그 선택하기
  const onClickTag = (e) => {
    if (myTag.includes(e)) {
      return;
    }
    setMyTag([...myTag, e]);
    setIsSelected([...isSelected, e]);
  };

  // 태그 지우기
  const onClickRemoveTag = (e) => {
    const newMyTag = myTag.filter((tagEl) => tagEl !== e);
    setMyTag(newMyTag);
    setIsSelected(newMyTag);
  };

  // const onClickMoveToDetail = () => (event) => {
  //   router.push(`/feeds/${event.target?.id}`);
  // };

  const onLoadMore = () => {
    if (!data) return;
    fetchMore({
      variables: {
        page: Math.ceil(data.fetchFeeds.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult?.fetchFeeds) return { fetchFeeds: [...prev.fetchFeeds] };

        return {
          fetchFeeds: [...prev.fetchFeeds, ...fetchMoreResult.fetchFeeds],
        };
      },
    });
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
      regionSelected={regionSelected}
      // onClickMoveToDetail={onClickMoveToDetail}
      onLoadMore={onLoadMore}
    />
  );
};

export default OotdPage;
