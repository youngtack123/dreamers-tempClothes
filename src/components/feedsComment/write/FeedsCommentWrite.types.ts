export interface IWriteComment {
  comment?: string;
}
export interface IFeedsCommentWriteUIProps {
  register: any;
  handleSubmit: any;
  onClickWriteComment: (data: IWriteComment) => void;
}
