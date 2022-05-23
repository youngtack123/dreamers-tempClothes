import * as s from "./FeedsCommentList.styles";
import { IFeedsCommentListUIProps } from "./FeedsCommentList.types";

const FeedsCommentListUI = (props: IFeedsCommentListUIProps) => {
  return (
    <s.WrapperDiv>
      <s.CommentListDiv>
        <s.UserImg src="/images/user.png" />
        <s.UserNameDiv>{props.el?.user.userId}</s.UserNameDiv>
        <s.CommentDiv>
          {props.el?.comment}
          <s.DeleteSpan style={{ marginLeft: "10px" }}>x</s.DeleteSpan>
        </s.CommentDiv>
      </s.CommentListDiv>
    </s.WrapperDiv>
  );
};

export default FeedsCommentListUI;
