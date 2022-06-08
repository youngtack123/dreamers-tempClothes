export interface FormValue {
  comment?: string;
}
export interface IFeedsCommentWriteUIProps {
  register: any;
  handleSubmit: any;
  onClickWriteComment: (data: FormValue) => void;
}
