import { useState } from "react";
import NestedCommentList from "../../feedsNestedComment/list/NestedCommentList.container";
import NestedCommentWrite from "../../feedsNestedComment/write/NestedCommentWrite.container";
import FeedsCommentWrite from "../write/FeedsCommentWrite.container";
import * as s from "./FeedsCommentList.styles";
import { IFeedsCommentListUIProps } from "./FeedsCommentList.types";

const FeedsCommentListUI = (props: IFeedsCommentListUIProps) => {
  const [isNested, setIsNested] = useState(false);
  const [mention, setMention] = useState("");

  // 대댓글 멘션 기능
  const onWriteMention = (nickname) => () => {
    const at = "@";
    setMention(at.concat(nickname));
    setIsNested(true);
  };

  return (
    <>
      <s.WrapperDiv>
        <s.CommentListDiv>
          <s.UserImg src="/images/user.png" />
          <s.UserNameDiv>{props.el?.user.nickname}</s.UserNameDiv>
          <s.CommentDiv>{props.el?.commentDetail}</s.CommentDiv>
        </s.CommentListDiv>

        <s.BottomDiv>
          <s.NestedCommentDiv onClick={onWriteMention(props.el?.user.nickname)}>답글 달기</s.NestedCommentDiv>
          <s.DeleteCommentDiv id={props.el.id} onClick={props.onDeleteComment}>
            삭제하기
          </s.DeleteCommentDiv>
        </s.BottomDiv>
      </s.WrapperDiv>

      {/* 대댓글 달리는 부분 */}
      <NestedCommentList el={props.el.id} />

      {isNested && <NestedCommentWrite el={props.el.id} mention={mention} setIsNested={setIsNested} />}
    </>
  );
};

export default FeedsCommentListUI;
