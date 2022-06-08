import { IQuery } from "../types/types";

export interface IOtherUserUIProps {
  selectId: (id: string) => void;
  myPageFeedId: string;
  weahterData?: Pick<IQuery, "getWeather">;
  ClickedUserFeed?: Pick<IQuery, "fetchUserFeeds">;
  ClickedUserData?: Pick<IQuery, "fetchNickname">;
}
