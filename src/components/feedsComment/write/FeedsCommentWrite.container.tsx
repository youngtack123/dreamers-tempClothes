import { useForm } from "react-hook-form";
import FeedsCommentWriteUI from "./FeedsCommentWrite.presenter";

const FeedsCommentWrite = () => {
  const { register, handleSubmit } = useForm({
    mode: "onChange",
  });

  return <FeedsCommentWriteUI />;
};

export default FeedsCommentWrite;
