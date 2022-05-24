import { gql } from "@apollo/client";

export const FETCH_MY_FEED = gql`
  query fetchMyFeeds($page: Float, $count: Float) {
    fetchMyFeeds(page: $page, count: $count) {
      feeds {
        id
        detail
        feedImg {
          id
          imgURL
        }
      }
      total
    }
  }
`;
