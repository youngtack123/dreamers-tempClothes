import React from "react";
import FeedsCommentList from "../../src/components/feedsComment/list/FeedsCommentList.container";
import FeedsCommentWrite from "../../src/components/feedsComment/write/FeedsCommentWrite.container";

const FeedsCommentWritePage = () => {
  return (
    <>
      <FeedsCommentList />
      <FeedsCommentWrite />
    </>
  );
};

export default FeedsCommentWritePage;
