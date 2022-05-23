import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { Q_FETCH_COMMENT } from "../write/FeedsCommentWrite.queries";
import FeedsCommentListUI from "./FeedsCommentList.presenter";

const FeedsCommentList = () => {
  const router = useRouter();

  const { data } = useQuery(Q_FETCH_COMMENT, {
    variables: {
      feedId: String(router.query.feedId),
    },
  });

  return (
    <div>
      {data?.fetchComment.map((el: any) => (
        <FeedsCommentListUI key={el.id} el={el} />
      ))}
    </div>
  );
};

export default FeedsCommentList;
