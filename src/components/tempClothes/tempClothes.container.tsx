import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import TempClothesUI from "./tempClothes.presenter";
import { Q_FETCH_FEED_TAGS, Q_FETCH_USER, Q_GET_WEATHER } from "./tempClothes.queries";

const TempClothes = () => {
  const [tagFeed, setTagFeed] = useState("");
  const [whichModal, setWhichModal] = useState(false);

  const { data: userData } = useQuery(Q_FETCH_USER);

  const { data: weatherData } = useQuery(Q_GET_WEATHER, {
    variables: { regionName: String(userData?.fetchUser.region.id) },
  });

  const { data: tagData } = useQuery(Q_FETCH_FEED_TAGS, {
    variables: { count: 2 },
  });

  const selectId = (id: string) => {
    setWhichModal(true);
    setTagFeed(id);
  };

  const feed = tagData?.fetchFeedTags.map((el) => {
    return el.feed.map((el) => {
      return el.feedImg.map((el) => {
        return el.imgURL;
      });
    });
  });

  return <TempClothesUI weatherData={weatherData} userData={userData} tagData={tagData} selectId={selectId} tagFeed={tagFeed} feed={feed} whichModal={whichModal} setWhichModal={setWhichModal} />;
};

export default TempClothes;
