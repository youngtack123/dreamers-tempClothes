import { useMutation, useQuery } from "@apollo/client";
import React from "react";
import { toast } from "react-toastify";
import { M_DELETE_COMMENT } from "../../feedsComment/list/FeedsCommentList.queries";
import { Q_FETCH_SUB_COMMENTS } from "../write/NestedCommentWrite.queries";
import NestedCommentListUI from "./NestedCommentList.presenter";
import { INestedCommentListProps } from "./NestedCommentList.types";

const NestedCommentList = (props: INestedCommentListProps) => {
  const [deleteNestedComment] = useMutation(M_DELETE_COMMENT);

  const { data } = useQuery(Q_FETCH_SUB_COMMENTS, {
    variables: {
      pCommentId: props.el,
    },
  });

  const onDeleteNestedComment = async (event) => {
    try {
      await deleteNestedComment({
        variables: {
          commentId: String(event.target.id),
        },
        refetchQueries: [
          {
            query: Q_FETCH_SUB_COMMENTS,
            variables: { pCommentId: props.el },
          },
        ],
      });
      // alert("대댓글이 삭제되었습니다!");
    } catch (error) {
      toast.error(error.message, {
        icon: "🤔",
      });
    }
  };

  return (
    <>
      {data?.fetchSubComments.map((el: any) => (
        <NestedCommentListUI key={el.id} el={el} onDeleteNestedComment={onDeleteNestedComment} />
      ))}
    </>
  );
};

export default NestedCommentList;
