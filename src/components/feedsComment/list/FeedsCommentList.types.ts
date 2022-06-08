import { MouseEvent } from "react";

export interface IFeedsCommentListUIProps {
  el: any;
  onDeleteComment: (e: MouseEvent<HTMLDivElement>) => void;
  IDforFetch: string;
}
