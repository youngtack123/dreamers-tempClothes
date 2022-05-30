import { useMutation, useQuery } from "@apollo/client";
import { Q_FETCH_COMMENTS } from "../write/FeedsCommentWrite.queries";
import FeedsCommentListUI from "./FeedsCommentList.presenter";
import { M_DELETE_COMMENT } from "./FeedsCommentList.queries";
import { toast } from "react-toastify";

const FeedsCommentList = (props) => {
  const [deleteComment] = useMutation(M_DELETE_COMMENT);

  const { data, fetchMore } = useQuery(Q_FETCH_COMMENTS, {
    variables: {
      // feedId: String(router.query.feedId),
      feedId: props.IDforFetch,
      // feedId: "67e8a648-6c86-46e1-8919-d52c6550c119",
    },
  });

  const comment = [];
  data?.fetchComments.comments?.map((el) => {
    if (el.pComment === null) {
      return comment.push(el);
    }
  });

  const onDeleteComment = async (event) => {
    try {
      await deleteComment({
        variables: {
          commentId: String(event.target.id),
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
