import { gql } from "@apollo/client";

export const FETCH_MY_FEED = gql`
  query fetchMyFeeds($page: Int) {
    fetchMyFeeds(page: $page) {
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
