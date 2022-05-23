import * as s from "./FeedsCommentWrite.styles";
import { IFeedsCommentWriteUIProps } from "./FeedsCommentWrite.types";

const FeedsCommentWriteUI = (props: IFeedsCommentWriteUIProps) => {
  return (
    <form onSubmit={props.handleSubmit(props.onClickWriteComment)}>
      <s.WrapperDiv>
        <s.DetailWrapperDiv>
          <s.DetailInput {...props.register("comment")} placeholder="댓글 작성을 기다리고 있어요!" />
          <s.WriteCommentButton>
            <s.CommentImg src="/images/commentArrow.png" />
          </s.WriteCommentButton>
        </s.DetailWrapperDiv>
      </s.WrapperDiv>
    </form>
  );
};

export default FeedsCommentWriteUI;
