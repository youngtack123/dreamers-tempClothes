import { useMutation, useQuery } from "@apollo/client";
import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import OotdUI from "./Ootd.presenter";
import { Q_FETCH_FEEDS, Q_FETCH_USER, Q_GET_WEATHER } from "./Ootd.queries";
import { regionCategory, tagCategory } from "../common/store";
import { useRouter } from "next/router";
import { withAuth } from "../hoc/withAuth";

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

  const [myTag, setMyTag] = useState<string[]>([]);
  const [myRegion, setMyRegion] = useState<string>("서울");
  const [tagSelected, setTagSelected] = useState<string[]>([]);
  const [regionSelected, setRegionSelected] = useState<string>("서울");

  const { data, fetchMore, refetch } = useQuery(Q_FETCH_FEEDS, {
    variables: {
      regionId: myRegion,
    },
  });

  // console.log(data?.fetchFeeds.feeds);

  const { data: userData } = useQuery(Q_FETCH_USER);

  const { data: tempData } = useQuery(Q_GET_WEATHER, {
    variables: { regionName: String(userData?.fetchUser.region.id) },
  });

  // 지역 선택하기
  const onClickRegion = (e: any) => {
    setMyRegion(e);
    setRegionSelected(e);
  };

  // 태그 선택하기
  const onClickTag = (e: any) => {
    if (myTag.includes(e)) {
      return;
    }
    setMyTag([...myTag, e]);
    setTagSelected([...tagSelected, e]);
  };

  // 태그 지우기
  const onClickRemoveTag = (e) => {
    const newMyTag = myTag.filter((tagEl) => tagEl !== e);
    setMyTag(newMyTag);
    setTagSelected(newMyTag);
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
      tagSelected={tagSelected}
      regionSelected={regionSelected}
      tempData={tempData}
    />
  );
};

export default withAuth(OotdPage);
