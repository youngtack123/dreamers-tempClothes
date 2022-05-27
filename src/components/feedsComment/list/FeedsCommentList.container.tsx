import { useMutation, useQuery } from "@apollo/client";
import { Q_FETCH_COMMENTS } from "../write/FeedsCommentWrite.queries";
import FeedsCommentListUI from "./FeedsCommentList.presenter";
import { M_DELETE_COMMENT } from "./FeedsCommentList.queries";
import InfiniteScroll from "react-infinite-scroller";

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
      alert("댓글이 삭제되었습니다!");
    } catch (error) {
      alert(error.message);
    }
  };

  // console.log(props.IDforFetch);

  const onLoadMore = () => {
    if (!data) return;

    fetchMore({
      variables: {
        page: Math.ceil(data?.fetchComments.comments?.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult?.fetchComments.comments) return { fetchComments: [...prev.fetchComments.comments] };

        return {
          fetchComments: [...prev.fetchComments.comments, ...fetchMoreResult.fetchComments.comments],
        };
      },
    });
  };

  return (
    <>
      <div style={{ height: "603", overflow: "auto" }}>
        <InfiniteScroll pageStart={0} onLoadMore={onLoadMore} hasMore={true} useWindow={false}>
          {comment.map((el) => (
            <FeedsCommentListUI key={el.id} el={el} onDeleteComment={onDeleteComment} IDforFetch={props.IDforFetch} />
          ))}
        </InfiniteScroll>
      </div>
    </>
  );
};

export default FeedsCommentList;
