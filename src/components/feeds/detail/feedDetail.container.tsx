import { useQuery } from "@apollo/client";
import React from "react";
import FeedDetailUI from "./feedDetail.presenter";
import { Q_FETCH_FEED } from "./feedDetail.queries";

function FeedDetail() {
  const { data } = useQuery(Q_FETCH_FEED, {
    variables: {
      feedId: "10c3b5f0-06b9-47c5-a2b1-221953b0c863",
    },
  });
  console.log(data);

  return (
    <>
      <FeedDetailUI data={data} />
    </>
  );
}

export default FeedDetail;
