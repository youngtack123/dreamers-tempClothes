import * as s from "./NestedCommentList.styles";
import { INestedCommentListUIProps } from "./NestedCommentList.types";

const NestedCommentListUI = (props: INestedCommentListUIProps) => {
  return (
    <s.WrapperDiv>
      <s.CommentListDiv>
        <s.UserImg src="/images/user.png" />
        <s.UserNameDiv>{props.el.user.nickname}</s.UserNameDiv>
        <s.CommentDiv>{props.el.commentDetail}</s.CommentDiv>
        <s.DeleteCommentDiv id={props.el.id} onClick={props.onDeleteNestedComment}>
          x
        </s.DeleteCommentDiv>
      </s.CommentListDiv>
    </s.WrapperDiv>
  );
};

export default NestedCommentListUI;
