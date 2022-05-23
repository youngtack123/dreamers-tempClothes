import { gql } from "@apollo/client";

export const Q_FETCH_FEED = gql`
  query fetchFeed($feedId: String!) {
    fetchFeed(feedId: $feedId) {
      detail
      top
      bottom
      outer
      user {
        userId
      }
    }
  }
`;
