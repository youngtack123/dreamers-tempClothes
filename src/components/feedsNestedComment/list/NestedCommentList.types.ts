import { MouseEvent } from "react";

export interface INestedCommentListUIProps {
  el: any;
  onDeleteNestedComment: (e: MouseEvent<HTMLDivElement>) => void;
}
export interface INestedCommentListProps {
  el: any;
}
