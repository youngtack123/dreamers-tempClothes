import * as s from "./FeedsCommentWrite.styles";

const FeedsCommentWriteUI = () => {
  return (
    <s.WrapperDiv>
      <s.DetailWrapperDiv>
        <s.DetailInput placeholder="댓글 작성을 기다리고 있어요!" />
        <s.CommentImg src="/images/commentArrow.png" />
      </s.DetailWrapperDiv>
    </s.WrapperDiv>
  );
};

export default FeedsCommentWriteUI;
