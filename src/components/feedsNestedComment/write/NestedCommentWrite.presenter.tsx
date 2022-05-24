import React from "react";
import * as s from "./NestedCommentWrite.styles";
import { INestedCommentWriteUIProps } from "./NestedCommentWrite.types";

const NestedCommentWriteUI = (props: INestedCommentWriteUIProps) => {
  return (
    <form onSubmit={props.handleSubmit(props.onWriteNestedComment)}>
      <s.WrapperDiv>
        <s.DetailWrapperDiv>
          <s.DetailInput {...props.register("comment")} defaultValue={props.mention} />
          <s.WriteCommentButton>
            <s.CommentImg src="/images/commentArrow.png" />
          </s.WriteCommentButton>
        </s.DetailWrapperDiv>
      </s.WrapperDiv>
    </form>
  );
};

export default NestedCommentWriteUI;
