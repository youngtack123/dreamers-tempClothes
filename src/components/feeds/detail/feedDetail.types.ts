import { IQuery } from "../../types/types";

export interface IFeedDetailButtonProps {
  isOpen: boolean;
}

export interface IFeedDetailUIProps {
  data?: Pick<IQuery, "fetchFeed">;
  userData?: Pick<IQuery, "fetchUser">;
  feedLike?: Pick<IQuery, "fetchFeedLike">;
  onClickPhoto: (photo: string) => void;
  onClickLike: () => void;
  showPhoto: string;
  IDforFetch: string;
}
