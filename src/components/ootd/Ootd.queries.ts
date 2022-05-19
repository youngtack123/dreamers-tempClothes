import { gql } from "@apollo/client";

export const Q_FETCH_FEEDS_WITH_TAGS = gql`
  query fetchFeedsWithTags($feedTags: [String!]!, $regionId: String!) {
    fetchFeedsWithTags(feedTags: $feedTags, regionId: $regionId) {
      detail
      feedTag {
        tagName
      }
    }
  }
`;
