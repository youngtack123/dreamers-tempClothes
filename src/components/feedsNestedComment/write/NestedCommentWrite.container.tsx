import { useMutation } from "@apollo/client";
import React from "react";
import { useForm } from "react-hook-form";
import { M_CREATE_COMMENT } from "../../feedsComment/write/FeedsCommentWrite.queries";
import NestedCommentWriteUI from "./NestedCommentWrite.presenter";
import { Q_FETCH_SUB_COMMENTS } from "./NestedCommentWrite.queries";
import { INestedCommentWriteProps, IWriteNestedComment } from "./NestedCommentWrite.types";

const NestedCommentWrite = (props: INestedCommentWriteProps) => {
  const [createNestedComment] = useMutation(M_CREATE_COMMENT);

  const { register, handleSubmit, setValue } = useForm({
    mode: "onChange",
  });

  const onWriteNestedComment = async (data: IWriteNestedComment) => {
    const { comment } = data;

    try {
      await createNestedComment({
        variables: {
          createCommentInput: {
            pCommentId: props.el,
            commentDetail: comment,
            feedId: "cac09a67-e251-48a3-a0e7-5ba89268792e",
            // feedId: String(router.query.feedId),
          },
        },
        refetchQueries: [
          {
            query: Q_FETCH_SUB_COMMENTS,
            variables: { pCommentId: props.el },
          },
        ],
      });
      alert(`${props.mention}님에 대한 답글등록이 완료되었습니다!`);
      setValue("comment", "");
      props.setIsNested(false);
    } catch (error) {
      alert(error.message);
    }
  };

  return <NestedCommentWriteUI register={register} handleSubmit={handleSubmit} onWriteNestedComment={onWriteNestedComment} mention={props.mention} />;
};

export default NestedCommentWrite;
