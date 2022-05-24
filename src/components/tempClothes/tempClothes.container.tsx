import { useQuery } from "@apollo/client";
import React from "react";
import TempClothesUI from "./tempClothes.presenter";
import { Q_FETCH_USER, Q_GET_WEATHER } from "./tempClothes.queries";

const TempClothes = () => {
  const { data: userData } = useQuery(Q_FETCH_USER);

  const { data: weatherData } = useQuery(Q_GET_WEATHER, {
    variables: { regionName: String(userData?.fetchUser.region.id) },
  });

  return <TempClothesUI weatherData={weatherData} userData={userData} />;
};

export default TempClothes;
