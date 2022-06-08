import { useQuery } from "@apollo/client";
import { IQuery, IQueryFetchFeedTagsArgs, IQueryGetWeatherArgs } from "../types/types";
import TempClothesUI from "./tempClothes.presenter";
import { Q_FETCH_FEED_TAGS, Q_FETCH_USER, Q_GET_WEATHER } from "./tempClothes.queries";

const TempClothes = () => {
  const { data: userData } = useQuery<Pick<IQuery, "fetchUser">>(Q_FETCH_USER);

  const { data: weatherData } = useQuery<Pick<IQuery, "getWeather">, IQueryGetWeatherArgs>(Q_GET_WEATHER, {
    variables: { regionName: String(userData?.fetchUser.region.id) },
  });

  const { data: tagData } = useQuery<Pick<IQuery, "fetchFeedTags">, IQueryFetchFeedTagsArgs>(Q_FETCH_FEED_TAGS, {
    variables: { count: 2 },
  });

  return <TempClothesUI weatherData={weatherData} userData={userData} tagData={tagData} />;
};

export default TempClothes;
