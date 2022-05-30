import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import { withAuth } from "../hoc/withAuth";
import TempClothesUI from "./tempClothes.presenter";
import { Q_FETCH_FEED_TAGS, Q_FETCH_USER, Q_GET_WEATHER } from "./tempClothes.queries";

const TempClothes = () => {
  const { data: userData } = useQuery(Q_FETCH_USER);

  const { data: weatherData } = useQuery(Q_GET_WEATHER, {
    variables: { regionName: String(userData?.fetchUser.region.id) },
  });

  const { data: tagData } = useQuery(Q_FETCH_FEED_TAGS, {
    variables: { count: 2 },
  });

  return <TempClothesUI weatherData={weatherData} userData={userData} tagData={tagData} />;
};

export default withAuth(TempClothes);
