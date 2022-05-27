export interface INestedCommentWriteProps {
  mention: string;
  el: any;
  setIsNested: any;
  IDforFetch: string;
}
export interface INestedCommentWriteUIProps {
  mention: string;
  register: any;
  handleSubmit: any;
  onWriteNestedComment: (data: IWriteNestedComment) => void;
}
export interface IWriteNestedComment {
  comment: string;
}
