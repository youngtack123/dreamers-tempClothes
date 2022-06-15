import { IQuery } from "../types/types";

export interface ITempClothesUIProps {
  weatherData?: Pick<IQuery, "getWeather">;
  userData?: Pick<IQuery, "fetchUser">;
  tagData?: Pick<IQuery, "fetchFeedTags">;
}
