import { useMutation, useQuery } from "@apollo/client";
import React, { MouseEvent } from "react";
import { toast } from "react-toastify";
import { M_DELETE_COMMENT } from "../../feedsComment/list/FeedsCommentList.queries";
import { IMutation, IMutationDeleteCommentArgs, IQuery, IQueryFetchSubCommentsArgs } from "../../types/types";
import { Q_FETCH_SUB_COMMENTS } from "../write/NestedCommentWrite.queries";
import NestedCommentListUI from "./NestedCommentList.presenter";
import { INestedCommentListProps } from "./NestedCommentList.types";

const NestedCommentList = (props: INestedCommentListProps) => {
  const [deleteNestedComment] = useMutation<Pick<IMutation, "deleteComment">, IMutationDeleteCommentArgs>(M_DELETE_COMMENT);

  const { data } = useQuery<Pick<IQuery, "fetchSubComments">, IQueryFetchSubCommentsArgs>(Q_FETCH_SUB_COMMENTS, {
    variables: {
      pCommentId: props.el,
    },
  });

  const onDeleteNestedComment = async (e: MouseEvent<HTMLDivElement>) => {
    try {
      await deleteNestedComment({
        variables: {
          commentId: String((e.target as HTMLDivElement).id),
        },
        refetchQueries: [
          {
            query: Q_FETCH_SUB_COMMENTS,
            variables: { pCommentId: props.el },
          },
        ],
      });
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
