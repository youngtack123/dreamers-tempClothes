import { gql } from "@apollo/client";

export const Q_FETCH_FEED = gql`
  query fetchFeed($feedId: String!) {
    fetchFeed(feedId: $feedId) {
      id
      detail
      top
      bottom
      outer
      etc
      user {
        nickname
      }
      feedTag {
        tagName
      }
      feedImg {
        imgURL
      }
      region {
        id
      }
    }
  }
`;

export const M_DELETE_FEED = gql`
  mutation deleteFeed($feedId: String!) {
    deleteFeed(feedId: $feedId)
  }
`;
