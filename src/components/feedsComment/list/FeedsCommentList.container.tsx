import { useMutation, useQuery } from "@apollo/client";
import { Q_FETCH_COMMENTS } from "../write/FeedsCommentWrite.queries";
import FeedsCommentListUI from "./FeedsCommentList.presenter";
import { M_DELETE_COMMENT } from "./FeedsCommentList.queries";
import { toast } from "react-toastify";
import { MouseEvent } from "react";
import { IMutation, IMutationDeleteCommentArgs, IQuery, IQueryFetchCommentsArgs } from "../../types/types";

const FeedsCommentList = (props) => {
  const [deleteComment] = useMutation<Pick<IMutation, "deleteComment">, IMutationDeleteCommentArgs>(M_DELETE_COMMENT);

  const { data } = useQuery<Pick<IQuery, "fetchComments">, IQueryFetchCommentsArgs>(Q_FETCH_COMMENTS, {
    variables: {
      feedId: props.IDforFetch,
    },
  });

  const comment = [];
  data?.fetchComments.comments?.map((el: any) => {
    if (el.pComment === null) {
      return comment.push(el);
    }
  });

  const onDeleteComment = async (e: MouseEvent<HTMLDivElement>) => {
    try {
      await deleteComment({
        variables: {
          commentId: String((e.target as HTMLDivElement).id),
        },
        refetchQueries: [
          {
            query: Q_FETCH_COMMENTS,
            variables: { feedId: props.IDforFetch },
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
      <div style={{ height: "603", overflow: "auto" }}>
        {comment.map((el) => (
          <FeedsCommentListUI key={el.id} el={el} onDeleteComment={onDeleteComment} IDforFetch={props.IDforFetch} />
        ))}
      </div>
    </>
  );
};

export default FeedsCommentList;
