import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import FeedsCommentWriteUI from "./FeedsCommentWrite.presenter";
import { M_CREATE_COMMENT, Q_FETCH_COMMENT, Q_FETCH_USER } from "./FeedsCommentWrite.queries";
import { IWriteComment } from "./FeedsCommentWrite.types";

const FeedsCommentWrite = () => {
  const router = useRouter();
  const [createComment] = useMutation(M_CREATE_COMMENT);

  const { data: userIdData } = useQuery(Q_FETCH_USER);

  const { register, handleSubmit } = useForm({
    mode: "onChange",
  });

  const onClickWriteComment = async (data: IWriteComment) => {
    const { comment } = data;

    try {
      const result = await createComment({
        variables: {
          createCommentInput: {
            comment: comment,
            feedId: String(router.query.feedId),
          },
          userId: String(userIdData.userId),
        },
        refetchQueries: [
          {
            query: Q_FETCH_COMMENT,
            variables: { feedId: router.query.feedId },
          },
        ],
      });
      console.log(result);
      alert("댓글 등록이 완료되었습니다!");
    } catch (error) {
      alert(error.message);
    }
  };

  return <FeedsCommentWriteUI register={register} handleSubmit={handleSubmit} onClickWriteComment={onClickWriteComment} />;
};

export default FeedsCommentWrite;
