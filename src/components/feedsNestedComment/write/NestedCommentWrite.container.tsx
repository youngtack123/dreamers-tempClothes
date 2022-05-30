import { useMutation } from "@apollo/client";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
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
            feedId: props.IDforFetch,
          },
        },
        refetchQueries: [
          {
            query: Q_FETCH_SUB_COMMENTS,
            variables: { pCommentId: props.el },
          },
        ],
      });
      setValue("comment", "");
      props.setIsNested(false);
    } catch (error) {
      toast.error(error.message, {
        icon: "🤔",
      });
    }
  };

  return <NestedCommentWriteUI register={register} handleSubmit={handleSubmit} onWriteNestedComment={onWriteNestedComment} mention={props.mention} />;
};

export default NestedCommentWrite;
