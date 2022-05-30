import { gql, useMutation, useQuery } from "@apollo/client";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useRecoilState } from "recoil";
import { Q_FETCH_SUB_COMMENTS } from "../../feedsNestedComment/write/NestedCommentWrite.queries";
import FeedsCommentWriteUI from "./FeedsCommentWrite.presenter";
import { M_CREATE_COMMENT, Q_FETCH_COMMENTS } from "./FeedsCommentWrite.queries";
import { IWriteComment } from "./FeedsCommentWrite.types";

const FeedsCommentWrite = (props) => {
  const [createComment] = useMutation(M_CREATE_COMMENT);

  const { register, handleSubmit, setValue } = useForm({
    mode: "onChange",
  });

  const onClickWriteComment = async (data: IWriteComment) => {
    const { comment } = data;

    try {
      const result = await createComment({
        variables: {
          createCommentInput: {
            commentDetail: comment,
            feedId: props.IDforFetch,
            // feedId: String(router.query.feedId),
          },
        },
        refetchQueries: [
          {
            query: Q_FETCH_COMMENTS,
            variables: { feedId: props.IDforFetch },
          },
        ],
      });
      // alert("댓글 등록이 완료되었습니다!");
      setValue("comment", "");
    } catch (error) {
      toast.error(error.message, {
        icon: "🤔",
      });
    }
  };

  return <FeedsCommentWriteUI register={register} handleSubmit={handleSubmit} onClickWriteComment={onClickWriteComment} />;
};

export default FeedsCommentWrite;
