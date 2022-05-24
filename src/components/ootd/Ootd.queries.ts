import { gql } from "@apollo/client";

export const Q_FETCH_FEEDS = gql`
  query fetchFeeds($feedTags: [String!], $regionId: String!, $page: Float) {
    fetchFeeds(feedTags: $feedTags, regionId: $regionId, page: $page) {
      feeds {
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
      }
    }
  }
`;
