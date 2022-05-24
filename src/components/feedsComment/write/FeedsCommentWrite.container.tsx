import { gql, useMutation, useQuery } from "@apollo/client";
import { useForm } from "react-hook-form";
import FeedsCommentWriteUI from "./FeedsCommentWrite.presenter";
import { M_CREATE_COMMENT, Q_FETCH_COMMENTS } from "./FeedsCommentWrite.queries";
import { IWriteComment } from "./FeedsCommentWrite.types";

const FeedsCommentWrite = () => {
  const [createComment] = useMutation(M_CREATE_COMMENT);

  const { register, handleSubmit, setValue } = useForm({
    mode: "onChange",
  });

  const onClickWriteComment = async (data: IWriteComment) => {
    const { comment } = data;

    try {
      await createComment({
        variables: {
          createCommentInput: {
            commentDetail: comment,
            feedId: "cac09a67-e251-48a3-a0e7-5ba89268792e",
            // feedId: String(router.query.feedId),
          },
        },
        refetchQueries: [
          {
            query: Q_FETCH_COMMENTS,
            variables: { feedId: "cac09a67-e251-48a3-a0e7-5ba89268792e" },
          },
        ],
      });
      alert("댓글 등록이 완료되었습니다!");
      setValue("comment", "");
    } catch (error) {
      alert(error.message);
    }
  };

  return <FeedsCommentWriteUI register={register} handleSubmit={handleSubmit} onClickWriteComment={onClickWriteComment} />;
};

export default FeedsCommentWrite;
