import { gql } from "@apollo/client";

export const M_UPLOAD_FEED_IMGS = gql`
  mutation uploadFeedImgs($imgs: [Upload!]!) {
    uploadFeedImgs(imgs: $imgs)
  }
`;

export const M_CREATE_FEED = gql`
  mutation createFeed($createFeedInput: CreateFeedInput!) {
    createFeed(createFeedInput: $createFeedInput) {
      id
      detail
      top
      bottom
      outer
      feedTag {
        tagName
      }
      # feedImg {
      #   imgURL
      # }
      region {
        id
      }
    }
  }
`;

export const M_UPDATE_FEED = gql`
  mutation updateFeed($updateFeedInput: UpdateFeedInput!, $feedId: String!) {
    updateFeed(updateFeedInput: $updateFeedInput, feedId: $feedId) {
      detail
      top
      bottom
      outer
      feedTag {
        tagName
      }
      # feedImg {
      #   imgURL
      # }
      region {
        id
      }
    }
  }
`;
