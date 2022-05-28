import { useMutation, useQuery } from "@apollo/client";
import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import OotdUI from "./Ootd.presenter";
import { Q_FETCH_FEEDS, Q_FETCH_USER, Q_GET_WEATHER } from "./Ootd.queries";
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

  const [myTag, setMyTag] = useState<String[]>([]);
  const [myRegion, setMyRegion] = useState("서울");
  const [tagSelected, setTagSelected] = useState<String[]>([]);
  const [regionSelected, setRegionSelected] = useState("서울");
  const [feedPage, setFeedPage] = useState(1);

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
    setTagSelected([...tagSelected, e]);
  };

  // 태그 지우기
  const onClickRemoveTag = (e) => {
    const newMyTag = myTag.filter((tagEl) => tagEl !== e);
    setMyTag(newMyTag);
    setTagSelected(newMyTag);
  };

  // const onClickMoveToDetail = () => (event) => {
  //   router.push(`/feeds/${event.target?.id}`);
  // };

  const [feedList, setFeedList] = useState([]);

  const [lastFeed, setLastFeed] = useState(null);
  // const [target, setTarget] = useState(null);

  const getFeedList = () => {
    setFeedList(data);
    console.log(feedList);
  };

  // const onIntersect: IntersectionObserverCallback = (entries, observer) => {
  //   entries.forEach((entry) => {
  //     if (entry.isIntersecting) {
  //       setPage((prev) => prev + 1);
  //       observer.unobserve(entry.target);
  //     }
  //   });
  // };

  // useEffect(() => {
  //   console.log(page);
  //   getFeedList();
  // }, [page]);

  // useEffect(() => {
  //   let observer: IntersectionObserver;
  //   if (lastFeed) {
  //     observer = new IntersectionObserver(onIntersect, { threshold: 0.5 });
  //     observer.observe(data.fetchFeeds.feed);
  //   }
  //   return () => observer && observer.disconnect();
  // }, [lastFeed]);

  // const observer = new IntersectionObserver( entries, {threshold: 1})

  const onLoadMore = () => {
    if (!data) return;
    fetchMore({
      variables: {
        page: Math.ceil(data?.fetchFeeds.feeds.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult?.fetchFeeds.feeds) return { feeds: [...prev.fetchFeeds.feeds] };
        console.log(...prev.fetchFeeds.feeds);
        return {
          feeds: [...prev.fetchFeeds.feeds, ...fetchMoreResult.fetchFeeds.feeds],
        };
      },
    });
  };
  console.log(Math.ceil(data?.fetchFeeds.feeds.length / 10) + 1);
  // onLoadMore();

  // const [page, setPage] = useState(1);
  // const onClickNextPage = () => {
  //   setPage((prev) => prev + 1);
  //   console.log("aaa", data);
  //   if (!data) return;
  //   fetchMore({
  //     variables: {
  //       page: page,
  //     },
  //     updateQuery: (prev, { fetchMoreResult }) => {
  //       if (!fetchMoreResult?.fetchFeeds.feeds) return { feeds: [...prev.fetchFeeds.feeds] };
  //       // console.log(...prev.fetchFeeds?.feeds);
  //       return {
  //         feeds: [...prev.fetchFeeds.feeds, ...fetchMoreResult.fetchFeeds.feeds],
  //       };
  //     },
  //   });

  //   // refetch({ page: page });
  //   console.log("눌림");
  // };

  // const onClickPage = (event) => {
  //   refetch({ page: Number(event.target.id) });
  // };

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
      // onClickMoveToDetail={onClickMoveToDetail}
      tempData={tempData}
      // onClickNextPage={onClickNextPage}
      onLoadMore={onLoadMore}
    />
  );
};

export default OotdPage;
