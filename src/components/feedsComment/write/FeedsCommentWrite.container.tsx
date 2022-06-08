import { useMutation } from "@apollo/client";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { IMutation, IMutationCreateCommentArgs } from "../../types/types";
import FeedsCommentWriteUI from "./FeedsCommentWrite.presenter";
import { M_CREATE_COMMENT, Q_FETCH_COMMENTS } from "./FeedsCommentWrite.queries";
import { FormValue } from "./FeedsCommentWrite.types";

const FeedsCommentWrite = (props) => {
  const [createComment] = useMutation<Pick<IMutation, "createComment">, IMutationCreateCommentArgs>(M_CREATE_COMMENT);

  const { register, handleSubmit, setValue } = useForm<FormValue>({
    mode: "onChange",
  });

  const onClickWriteComment: SubmitHandler<FormValue> = async (data) => {
    const { comment } = data;

    try {
      await createComment({
        variables: {
          createCommentInput: {
            commentDetail: comment,
            feedId: props.IDforFetch,
          },
        },
        refetchQueries: [
          {
            query: Q_FETCH_COMMENTS,
            variables: { feedId: props.IDforFetch },
          },
        ],
      });
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
